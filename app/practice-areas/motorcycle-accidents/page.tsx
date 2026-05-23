import type { Metadata } from "next";
import PracticePageLayout from "@/components/PracticePageLayout";
import { getPracticeArea } from "@/data/practiceAreas";
import { faqsByArea } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Motorcycle Accident Lawyer in Virginia | Johnson Law Center",
  description:
    "Motorcycle accident representation in Virginia. Johnson Law Center stands up for injured riders facing insurance bias and complex fault questions.",
};

export default function Page() {
  const area = getPracticeArea("motorcycle-accidents");
  if (!area) return null;
  return <PracticePageLayout area={area} faqs={faqsByArea["motorcycle-accidents"]} />;
}
