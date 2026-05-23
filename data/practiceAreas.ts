export type PracticeArea = {
  slug: string;
  title: string;
  navLabel: string;
  shortLabel: string;
  cardSummary: string;
  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
  };
  sections: { heading: string; body: string }[];
  bullets?: { heading: string; items: string[] };
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "personal-injury",
    title: "Personal Injury",
    navLabel: "Personal Injury",
    shortLabel: "Personal Injury",
    cardSummary:
      "Representation for clients hurt by another party's negligence, including medical, property, and workplace incidents.",
    hero: {
      eyebrow: "Practice Area",
      headline: "Personal Injury Lawyer in Gloucester, VA",
      subtext:
        "If you were hurt because of someone else's negligence, Johnson Law Center can help you understand your options and pursue fair compensation for your losses.",
    },
    sections: [
      {
        heading: "Injured because of someone else's negligence",
        body: "A serious injury can change every part of your life at once. Medical bills arrive. Work hours are missed. Insurance representatives press for quick statements. Johnson Law Center steps in to handle these conversations and protect your interests while you focus on recovery.",
      },
      {
        heading: "Medical bills, missed work, and insurance pressure",
        body: "Personal injury matters often involve more than the obvious medical costs. Lost income, future care, household impact, and ongoing pain all matter. We work to make sure the picture of your losses is complete and clearly presented.",
      },
      {
        heading: "What a personal injury claim may include",
        body: "Compensation may address medical care, future treatment, lost wages, loss of earning capacity, pain, and other losses tied to your injury. Every case is evaluated on its facts. No outcome can be guaranteed in any matter.",
      },
      {
        heading: "How Johnson Law Center helps",
        body: "We listen first, gather the facts, communicate with insurance representatives, and pursue a fair resolution. When negotiation does not produce a fair offer, we are prepared to take the case forward.",
      },
    ],
    bullets: {
      heading: "Common personal injury matters",
      items: [
        "Vehicle and motorcycle collisions",
        "Boating and recreational accidents",
        "Slip, trip, and premises injuries",
        "Catastrophic injury and long term care",
        "Wrongful death of a loved one",
      ],
    },
  },
  {
    slug: "car-accidents",
    title: "Car Accidents",
    navLabel: "Car Accidents",
    shortLabel: "Car Accidents",
    cardSummary:
      "Help for drivers and passengers after collisions on Virginia roads. We handle the insurance side so you can focus on recovery.",
    hero: {
      eyebrow: "Practice Area",
      headline: "Car Accident Lawyer in Gloucester, VA",
      subtext:
        "After a car accident, the insurance company is not always on your side. Johnson Law Center helps injured drivers and passengers understand their options and pursue a fair outcome.",
    },
    sections: [
      {
        heading: "The insurance company is not always on your side",
        body: "Insurance adjusters work to protect their company's bottom line. Even routine questions can be designed to reduce a claim. We communicate with the insurance company on your behalf so your statements are not used against you.",
      },
      {
        heading: "Common causes of car accidents",
        body: "Distraction, excessive speed, impaired driving, following too closely, and failure to yield are common factors in collisions. Each cause can affect how a claim is built and what evidence matters.",
      },
      {
        heading: "What compensation may cover",
        body: "A car accident claim may address medical bills, future medical care, lost wages, loss of earning capacity, vehicle damage, and other losses tied to the crash. The facts of your specific case drive the analysis.",
      },
      {
        heading: "What to do after a crash",
        body: "Get to safety, call 911, seek medical care, and document the scene if you can. Save your records. Before giving a recorded statement to any insurance company, consider speaking with an attorney.",
      },
      {
        heading: "How Johnson Law Center helps",
        body: "We gather the police report, medical records, and witness information, evaluate your losses, and communicate with insurers. If a fair offer is not made, we are prepared to take further action.",
      },
    ],
  },
  {
    slug: "truck-accidents",
    title: "Truck and Tractor Trailer Accidents",
    navLabel: "Truck Accidents",
    shortLabel: "Truck Accidents",
    cardSummary:
      "Representation in serious collisions with commercial trucks and tractor trailers, where evidence and liability are often complex.",
    hero: {
      eyebrow: "Practice Area",
      headline: "Truck and Tractor Trailer Accident Lawyer in Virginia",
      subtext:
        "Collisions with commercial trucks can leave families dealing with serious injuries and complex liability. Johnson Law Center helps you sort through the facts and protect your interests.",
    },
    sections: [
      {
        heading: "Serious injuries and complex liability",
        body: "Truck accidents often involve more than a single driver. The trucking company, maintenance providers, and multiple insurance carriers may all play a role in the case. A careful review is essential.",
      },
      {
        heading: "Driver, company, maintenance, and insurance issues",
        body: "Driver fatigue, training, hours of service, vehicle maintenance, and cargo loading can all be factors. Each one can shape how responsibility is evaluated.",
      },
      {
        heading: "Why evidence matters quickly",
        body: "Some evidence in truck cases is time sensitive. Electronic logging data, vehicle data, and physical evidence can be lost. Early action helps preserve what may matter most.",
      },
      {
        heading: "How Johnson Law Center helps",
        body: "We work to identify all responsible parties, request the right records, and present a clear picture of the loss. The goal is a fair outcome for serious injuries that often require long term care.",
      },
    ],
  },
  {
    slug: "motorcycle-accidents",
    title: "Motorcycle Accidents",
    navLabel: "Motorcycle Accidents",
    shortLabel: "Motorcycle Accidents",
    cardSummary:
      "Fair treatment for injured riders who too often face insurance bias and difficult fault questions after a crash.",
    hero: {
      eyebrow: "Practice Area",
      headline: "Motorcycle Accident Lawyer in Virginia",
      subtext:
        "Injured motorcyclists deserve fair treatment. Johnson Law Center represents riders in Virginia and works to push back on the bias that too often shapes these claims.",
    },
    sections: [
      {
        heading: "Injured motorcyclists deserve fair treatment",
        body: "Riders are often judged before the facts are fully reviewed. We focus on the evidence, the scene, and the impact of the injury, and we present that picture clearly.",
      },
      {
        heading: "Common motorcycle accident injuries",
        body: "Riders can suffer head injuries, fractures, road rash, and orthopedic injuries that require extended care. Future treatment and recovery time are part of a thorough claim review.",
      },
      {
        heading: "Insurance bias against riders",
        body: "Adjusters may attempt to assign blame to the rider without a careful look at the facts. We respond with evidence and a clear case for fair recovery.",
      },
      {
        heading: "Proving fault",
        body: "Photos, witness statements, vehicle data, scene measurements, and medical records all help establish what happened. Strong evidence supports a strong claim.",
      },
      {
        heading: "How Johnson Law Center helps",
        body: "We listen to your account, investigate the crash, and pursue a fair outcome with the insurance company or in court when needed.",
      },
    ],
  },
  {
    slug: "boating-accidents",
    title: "Boating Accidents",
    navLabel: "Boating Accidents",
    shortLabel: "Boating Accidents",
    cardSummary:
      "Help after injuries on Virginia waters, where operator negligence, speed, or unsafe conditions caused the incident.",
    hero: {
      eyebrow: "Practice Area",
      headline: "Boating Accident Lawyer in Virginia",
      subtext:
        "Boating accidents can leave passengers and operators with serious injuries. Johnson Law Center helps clients sort out responsibility and pursue fair compensation.",
    },
    sections: [
      {
        heading: "Injury claims after boating accidents",
        body: "Time on the water is part of life in the Chesapeake Bay region. When an incident causes serious injury, the rules and evidence involved can be different from a typical road accident.",
      },
      {
        heading: "Common causes of boating accidents",
        body: "Operator inattention, alcohol use, excessive speed, inexperience, and lack of safety equipment are frequent factors. Wake and weather conditions can also play a role.",
      },
      {
        heading: "Operator negligence",
        body: "An operator has a duty to act with care for passengers and other boaters. Failing to follow that duty can support a claim for an injured person.",
      },
      {
        heading: "Alcohol, speed, unsafe operation, and lack of safety equipment",
        body: "Each factor changes how a case is investigated. We collect the relevant evidence and work to build a clear record.",
      },
      {
        heading: "How Johnson Law Center helps",
        body: "We investigate the incident, request relevant records, and pursue a fair recovery for clients dealing with serious injuries from a boating accident.",
      },
    ],
  },
  {
    slug: "wrongful-death",
    title: "Wrongful Death",
    navLabel: "Wrongful Death",
    shortLabel: "Wrongful Death",
    cardSummary:
      "Compassionate support for families after the preventable loss of a loved one. We help families understand their legal options.",
    hero: {
      eyebrow: "Practice Area",
      headline: "Wrongful Death Lawyer in Virginia",
      subtext:
        "The loss of a loved one is a heavy weight to carry. Johnson Law Center supports families with respect, clear information, and steady guidance through the legal process.",
    },
    sections: [
      {
        heading: "Support for families after preventable loss",
        body: "We approach these cases with care and a focus on what matters to your family. The legal process is one part of a much larger personal experience, and we keep that in mind at every step.",
      },
      {
        heading: "What wrongful death claims may involve",
        body: "Virginia law defines who can bring a wrongful death claim and what losses it can address. We help families understand how these rules apply to their situation.",
      },
      {
        heading: "Fatal car, truck, motorcycle, and boating accidents",
        body: "Wrongful death claims often arise from serious vehicle and boating accidents. The investigation, evidence, and review follow similar steps to other injury matters, with extra care for the family.",
      },
      {
        heading: "Accountability and financial recovery",
        body: "A wrongful death claim cannot replace what your family has lost. It can address financial impact and provide a measure of accountability. We help families seek accountability and understand their legal options.",
      },
      {
        heading: "How Johnson Law Center supports families",
        body: "We communicate clearly, work at a pace that respects your family's needs, and handle the legal process so you can focus on each other.",
      },
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
