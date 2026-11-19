import { email, FormError, handleForm, privacyAccepted, text } from "@/lib/form-mail";

export function POST(request: Request) {
  return handleForm(request, "csomagfelvetel", (data) => {
    const name = text(data, "name", "név", { min: 2, max: 100 });
    const pickupAddress = text(data, "address", "cím", { min: 6, max: 200 });
    const phone = text(data, "phone", "telefonszám", { max: 40 });
    if (!/^[0-9+()\/.\s-]+$/.test(phone) || phone.replace(/\D/g, "").length < 8) {
      throw new FormError("Kérjük, érvényes telefonszámot adjon meg.");
    }
    const address = email(data);
    privacyAccepted(data);
    return {
      subject: `Csomagfelvétel kérés - ${name}`,
      replyTo: { name, address },
      fields: [
        { label: "Név", value: name },
        { label: "Cím", value: pickupAddress },
        { label: "Telefonszám", value: phone },
        { label: "E-mail", value: address },
      ],
    };
  });
}
