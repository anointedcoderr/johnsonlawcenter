export type FAQ = {
  q: string;
  a: string;
};

export const faqsByArea: Record<string, FAQ[]> = {
  "personal-injury": [
    {
      q: "How much does a consultation cost?",
      a: "Consultations at Johnson Law Center are free. There is no fee to discuss your situation and understand your possible next steps.",
    },
    {
      q: "How long do I have to file a personal injury claim in Virginia?",
      a: "Virginia generally has a two year statute of limitations for personal injury claims. Deadlines can change based on the facts of your case, so it is important to speak with an attorney as soon as possible.",
    },
    {
      q: "What can a personal injury claim cover?",
      a: "A claim may include medical bills, future medical care, lost wages, loss of earning capacity, pain, and other losses tied to your injury. Every situation is different and each case is evaluated on its own facts.",
    },
    {
      q: "Do I have to go to court?",
      a: "Many claims are resolved through negotiation with the insurance company. If a fair resolution is not possible, litigation may be the next step. We discuss this clearly with you at every stage.",
    },
  ],
  "car-accidents": [
    {
      q: "Should I talk to the other driver's insurance company?",
      a: "We recommend speaking with an attorney first. Statements made to an adjuster can affect your claim. Johnson Law Center can communicate with the insurance company on your behalf.",
    },
    {
      q: "What should I do at the scene of a crash?",
      a: "Get to safety, call 911, document the scene with photos if you are able, exchange information, and seek medical care. Save the police report number when you receive it.",
    },
    {
      q: "What if I was partly at fault?",
      a: "Virginia follows a strict contributory negligence rule, which is why early legal guidance can be important. Each case is evaluated on its specific facts.",
    },
    {
      q: "How are car accident claims valued?",
      a: "Claims are typically based on the nature of the injury, medical bills, lost income, and other losses. There is no fixed formula, and the strength of the evidence matters.",
    },
  ],
  "truck-accidents": [
    {
      q: "Why are truck accident cases more complex?",
      a: "Truck cases can involve multiple parties, including the driver, the trucking company, maintenance contractors, and insurers. Evidence such as driver logs and electronic data can be central to the case.",
    },
    {
      q: "Why does evidence matter quickly?",
      a: "Some evidence in truck cases can be lost or overwritten. Early legal involvement helps preserve records, electronic data, and witness statements.",
    },
    {
      q: "What injuries are common in truck collisions?",
      a: "Because of the size and weight of commercial trucks, injuries are often more serious. They can include head, back, and orthopedic injuries that require ongoing care.",
    },
    {
      q: "Who can be held responsible after a truck accident?",
      a: "Responsibility can rest with the driver, the trucking company, a maintenance provider, or others. A careful review of the facts is required in every case.",
    },
  ],
  "motorcycle-accidents": [
    {
      q: "Are motorcycle injury claims treated differently?",
      a: "Insurance carriers sometimes carry bias against riders. Strong evidence and clear presentation of the facts are important to a fair outcome.",
    },
    {
      q: "What if the driver who hit me has limited insurance?",
      a: "Uninsured and underinsured motorist coverage on your own policy can sometimes apply. We review all available coverage when evaluating a claim.",
    },
    {
      q: "Do helmet laws affect my claim?",
      a: "Virginia law has specific rules about protective equipment for riders. Compliance can be relevant to a claim and is reviewed as part of the case.",
    },
    {
      q: "What are common motorcycle injuries?",
      a: "Road rash, fractures, head injuries, and orthopedic injuries are common. Many require extended care, which the claim can address.",
    },
  ],
  "boating-accidents": [
    {
      q: "What causes most boating accidents?",
      a: "Operator inattention, alcohol, excessive speed, inexperience, and lack of safety equipment are common factors in boating injuries.",
    },
    {
      q: "Are boating injury claims different from car claims?",
      a: "Yes. Boating cases may involve different rules, different insurance coverage, and additional facts such as weather and waterway conditions.",
    },
    {
      q: "Can a passenger bring a claim?",
      a: "A passenger injured because of an operator's negligence may have a claim. Each case depends on its specific facts.",
    },
    {
      q: "What should I do after a boating accident?",
      a: "Get medical care, report the incident to the proper authorities, document the scene if you are able, and consult an attorney before giving statements.",
    },
  ],
  "wrongful-death": [
    {
      q: "Who can bring a wrongful death claim in Virginia?",
      a: "Virginia law sets who is eligible to bring a claim and who may receive damages. We help families understand how these rules apply to their situation.",
    },
    {
      q: "What does a wrongful death claim involve?",
      a: "A claim can address losses tied to the loss of the loved one. Each family's situation is reviewed with care and respect.",
    },
    {
      q: "Is there a deadline to file?",
      a: "Yes. Virginia has time limits for wrongful death actions, which makes early legal guidance important.",
    },
    {
      q: "How does the firm support families during this process?",
      a: "We focus on clear communication, careful handling of the facts, and respect for the family during a difficult time.",
    },
  ],
};
