import type { Metadata } from "next";
import PracticePageLayout from "@/components/PracticePageLayout";
import { getPracticeArea } from "@/data/practiceAreas";
import { faqsByArea } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Car Accident Lawyer in Gloucester, VA | Johnson Law Center",
  description:
    "Car accident representation in Gloucester, VA. We handle the insurance side so you can focus on recovery.",
};

export default function Page() {
  const area = getPracticeArea("car-accidents");
  if (!area) return null;
  return <PracticePageLayout area={area} faqs={faqsByArea["car-accidents"]} />;
}
