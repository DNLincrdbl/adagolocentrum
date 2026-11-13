import { email, handleForm, privacyAccepted, text } from "@/lib/form-mail";

export function POST(request: Request) {
  return handleForm(request, "kapcsolat", (data) => {
    const name = text(data, "name", "név", { min: 2, max: 100 });
    const address = email(data);
    const message = text(data, "message", "üzenet", { min: 8, max: 5000, multiline: true });
    privacyAccepted(data);
    return {
      subject: `Új üzenet a weboldalról - ${name}`,
      replyTo: { name, address },
      fields: [
        { label: "Név", value: name },
        { label: "E-mail", value: address },
        { label: "Üzenet", value: message },
      ],
    };
  });
}
