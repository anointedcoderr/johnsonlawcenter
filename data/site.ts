export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const site = {
  name: "Johnson Law Center",
  url: "https://johnsonlawcenter.com",
  tagline: "Trusted Legal Help for Injured Virginians",
  attorney: {
    name: "William E. Johnson, Esq.",
    slug: "william-e-johnson",
  },
  address: {
    street: "6558 Main St STE 6",
    city: "Gloucester",
    region: "VA",
    postal: "23061",
    country: "US",
  },
  phones: {
    office: {
      display: "804-694-1111",
      tel: "tel:18046941111",
    },
    text: {
      display: "804-815-4200",
      tel: "tel:18048154200",
      sms: "sms:18048154200",
    },
  },
  email: "johnsonlawcenter@gmail.com",
  hours: "By appointment. Free consultations available.",
  trust: {
    reviews: "280+ Five Star Reviews",
    experience: "40+ Years Legal Experience",
    recovered: "Millions Recovered for Clients",
    consult: "Free Consultations Available",
  },
  serviceAreas: ["Gloucester", "Mathews", "Middlesex", "Virginia courts"],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Practice Areas",
      href: "/practice-areas",
      children: [
        { label: "Personal Injury", href: "/practice-areas/personal-injury" },
        { label: "Car Accidents", href: "/practice-areas/car-accidents" },
        { label: "Truck Accidents", href: "/practice-areas/truck-accidents" },
        { label: "Motorcycle Accidents", href: "/practice-areas/motorcycle-accidents" },
        { label: "Boating Accidents", href: "/practice-areas/boating-accidents" },
        { label: "Wrongful Death", href: "/practice-areas/wrongful-death" },
      ],
    },
    { label: "Reviews", href: "/reviews" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  credit: {
    name: "RSS World Network",
    email: "info@rssworldnet.work",
    whatsappDisplay: "+234 901 487 0002",
    whatsappHref: "https://wa.me/2349014870002",
  },
} as const;

export type SiteConfig = typeof site;
