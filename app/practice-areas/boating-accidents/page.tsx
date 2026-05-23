import type { Metadata } from "next";
import PracticePageLayout from "@/components/PracticePageLayout";
import { getPracticeArea } from "@/data/practiceAreas";
import { faqsByArea } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Boating Accident Lawyer in Virginia | Johnson Law Center",
  description:
    "Boating accident representation in Virginia. Help for injuries caused by operator negligence, speed, or unsafe conditions on the water.",
};

export default function Page() {
  const area = getPracticeArea("boating-accidents");
  if (!area) return null;
  return <PracticePageLayout area={area} faqs={faqsByArea["boating-accidents"]} />;
}
