import { email, FormError, handleForm, privacyAccepted, text } from "@/lib/form-mail";
import { ratingLabels, surveyQuestions } from "@/lib/site";

const questions = surveyQuestions.flatMap((group) => group.items);

export function POST(request: Request) {
  return handleForm(request, "kerdoiv", (data) => {
    const name = text(data, "name", "név", { min: 2, max: 100 });
    const address = email(data);
    const answers = questions.map((question, index) => {
      const score = Number(data.get(`q${index + 1}`));
      if (!Number.isInteger(score) || score < 1 || score > ratingLabels.length) {
        throw new FormError("Kérjük, minden kérdést értékeljen 1-től 4-ig.");
      }
      return { label: question, value: `${score} - ${ratingLabels[score - 1]}` };
    });
    const note = text(data, "note", "megjegyzés", { required: false, max: 5000, multiline: true });
    privacyAccepted(data);
    return {
      subject: `Elégedettségi kérdőív - ${name}`,
      replyTo: { name, address },
      fields: [
        { label: "Név", value: name },
        { label: "E-mail", value: address },
        ...answers,
        { label: "Megjegyzés", value: note },
      ],
    };
  });
}
