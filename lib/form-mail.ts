import nodemailer from "nodemailer";

const ENV_NAMES = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_SECURE",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "MAIL_FROM",
  "CONTACT_RECIPIENT",
] as const;

type MailEnv = Record<(typeof ENV_NAMES)[number], string>;

const MAX_BODY_BYTES = 64 * 1024;
const MIN_FILL_MS = 3000;
const EMAIL_PATTERN = /^[^\s@<>()",;]+@[^\s@<>()",;]+\.[^\s@<>()",;]+$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
const LINE_BREAKS = /[\r\n]/;

export type MailField = { label: string; value: string };

export type FormMail = {
  subject: string;
  replyTo: { name: string; address: string };
  fields: MailField[];
};

export class FormError extends Error {}

function readEnv(form: string): MailEnv | null {
  const missing = ENV_NAMES.filter((name) => !process.env[name]?.trim());
  if (missing.length > 0) {
    console.error(`[forms] ${form}: missing env ${missing.join(", ")}`);
    return null;
  }
  return Object.fromEntries(ENV_NAMES.map((name) => [name, process.env[name]!.trim()])) as MailEnv;
}

export function text(
  data: FormData,
  name: string,
  label: string,
  { required = true, min = 0, max, multiline = false }: { required?: boolean; min?: number; max: number; multiline?: boolean },
): string {
  const raw = data.get(name);
  const value = typeof raw === "string" ? raw.trim() : "";
  if (!value) {
    if (required) throw new FormError(`Kérjük, töltse ki ezt a mezőt: ${label}.`);
    return "";
  }
  if (CONTROL_CHARS.test(value) || (!multiline && LINE_BREAKS.test(value))) {
    throw new FormError(`Érvénytelen karakter ebben a mezőben: ${label}.`);
  }
  if (value.length < min) throw new FormError(`Túl rövid: ${label}.`);
  if (value.length > max) throw new FormError(`Túl hosszú: ${label} (legfeljebb ${max} karakter).`);
  return value;
}

export function email(data: FormData, name = "email"): string {
  const value = text(data, name, "e-mail cím", { max: 254 });
  if (!EMAIL_PATTERN.test(value)) throw new FormError("Kérjük, érvényes e-mail címet adjon meg.");
  return value;
}

export function privacyAccepted(data: FormData) {
  if (data.get("privacy") !== "on") {
    throw new FormError("A küldéshez az adatkezelési tájékoztató elfogadása szükséges.");
  }
}

function isBot(data: FormData): string | null {
  const honeypot = data.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") return "honeypot";
  const startedAt = Number(data.get("startedAt"));
  const submittedAt = Number(data.get("submittedAt"));
  if (!Number.isFinite(startedAt) || !Number.isFinite(submittedAt) || submittedAt - startedAt < MIN_FILL_MS) {
    return "too fast";
  }
  return null;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function render(mail: FormMail) {
  const heading = (label: string) => (/[?:]$/.test(label) ? label : `${label}:`);
  const plain = mail.fields.map(({ label, value }) => `${heading(label)}\n${value || "-"}`).join("\n\n");
  const blocks = mail.fields
    .map(
      ({ label, value }) =>
        `<p style="margin:0 0 14px"><strong>${escapeHtml(label)}</strong><br>` +
        `${escapeHtml(value || "-").replace(/\r?\n/g, "<br>")}</p>`,
    )
    .join("");
  const html =
    `<!doctype html><html lang="hu"><head><meta charset="utf-8"><title>${escapeHtml(mail.subject)}</title></head>` +
    `<body style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">${blocks}</body></html>`;
  return { plain, html };
}

export async function handleForm(request: Request, form: string, build: (data: FormData) => FormMail) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return Response.json({ error: "Az elküldött adat túl nagy." }, { status: 400 });
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return Response.json({ error: "Hibás kérés." }, { status: 400 });
  }

  const bot = isBot(data);
  if (bot) {
    console.info(`[forms] ${form}: dropped (${bot})`);
    return Response.json({ ok: true });
  }

  let mail: FormMail;
  try {
    mail = build(data);
  } catch (error) {
    if (error instanceof FormError) return Response.json({ error: error.message }, { status: 400 });
    throw error;
  }

  const env = readEnv(form);
  if (!env) {
    return Response.json({ error: "Az üzenetküldés jelenleg nem érhető el." }, { status: 503 });
  }

  const { plain, html } = render(mail);
  try {
    const transport = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT),
      secure: env.SMTP_SECURE === "true",
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
    await transport.sendMail({
      from: env.MAIL_FROM,
      to: env.CONTACT_RECIPIENT,
      replyTo: mail.replyTo,
      subject: mail.subject,
      text: plain,
      html,
      textEncoding: "quoted-printable",
    });
  } catch (error) {
    const code = error as { code?: string; responseCode?: number };
    console.error(`[forms] ${form}: sending failed (${code.code ?? "unknown"}${code.responseCode ? ` ${code.responseCode}` : ""})`);
    return Response.json({ error: "Az üzenetet most nem sikerült elküldeni." }, { status: 503 });
  }

  console.info(`[forms] ${form}: sent`);
  return Response.json({ ok: true });
}
