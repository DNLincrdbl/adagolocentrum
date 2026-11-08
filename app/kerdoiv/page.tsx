import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { SurveyForm } from "@/components/site/SurveyForm";

export const metadata: Metadata = {
  title: "Vevőelégedettségi kérdőív",
  description: "Önkéntes kérdőív a Móricz Kft. szolgáltatásának minőségéről.",
};

export default function SurveyPage() {
  return (
    <>
      <PageHero
        eyebrow="Vevőelégedettség"
        title="Négy fokozat, őszinte válasz."
        lead="A kitöltés önkéntes, és a szolgáltatás javítását szolgálja. 1 elégtelen, 2 még elfogadható, 3 megfelelő, 4 kiváló."
        image="/media/workshop.jpg"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <SurveyForm />
      </section>
    </>
  );
}
