import type { Metadata } from "next";
import PracticePageLayout from "@/components/PracticePageLayout";
import { getPracticeArea } from "@/data/practiceAreas";
import { faqsByArea } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Personal Injury Lawyer in Gloucester, VA | Johnson Law Center",
  description:
    "Personal injury representation in Gloucester, VA. Johnson Law Center helps injured clients understand their options and pursue fair compensation.",
};

export default function Page() {
  const area = getPracticeArea("personal-injury");
  if (!area) return null;
  return <PracticePageLayout area={area} faqs={faqsByArea["personal-injury"]} />;
}
