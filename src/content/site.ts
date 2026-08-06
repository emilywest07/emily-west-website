export const PLACEHOLDER = "Authoritative content to be supplied.";

export const siteContent = {
  name: "Emily A. West",
  shortName: "EAW",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  siteTitle: "Emily A. West | Political Science",
  socialDescription:
    "We do not simply accumulate new beliefs. We build explanatory frameworks that organize beliefs, values, identities, and experiences into coherent understandings of the world.",
  heroQuestion: "How do humans build better explanations?",
  title: "Assistant Professor of Political Science",
  affiliation: "University of Pittsburgh",
  email: "",
  office: "",
  biography: PLACEHOLDER,
  heroIntroduction:
    "We do not simply accumulate new beliefs. We build explanatory frameworks that organize beliefs, values, identities, and experiences into coherent understandings of the world. My research investigates how these frameworks are constructed, reorganized, observed, and used to support learning.",
  teachingPhilosophy: PLACEHOLDER,
  courses: [] as { title: string; term?: string; description?: string }[],
  profiles: [] as { label: string; url: string }[],
  cvFile: "/emily-west-cv.pdf",
  cvAvailable: false,
  socialImageAlt:
    "Social preview for Emily A. West, University of Pittsburgh: How do humans build better explanations?",
} as const;
