import type { Metadata } from "next";
import PracticePageLayout from "@/components/PracticePageLayout";
import { getPracticeArea } from "@/data/practiceAreas";
import { faqsByArea } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Wrongful Death Lawyer in Virginia | Johnson Law Center",
  description:
    "Wrongful death representation in Virginia. Compassionate support for families seeking accountability after a preventable loss.",
};

export default function Page() {
  const area = getPracticeArea("wrongful-death");
  if (!area) return null;
  return <PracticePageLayout area={area} faqs={faqsByArea["wrongful-death"]} />;
}
