import type { Metadata } from "next";
import PracticePageLayout from "@/components/PracticePageLayout";
import { getPracticeArea } from "@/data/practiceAreas";
import { faqsByArea } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Truck Accident Lawyer in Virginia | Johnson Law Center",
  description:
    "Tractor trailer and commercial truck accident representation in Virginia. Johnson Law Center helps injured clients with complex liability issues.",
};

export default function Page() {
  const area = getPracticeArea("truck-accidents");
  if (!area) return null;
  return <PracticePageLayout area={area} faqs={faqsByArea["truck-accidents"]} />;
}
