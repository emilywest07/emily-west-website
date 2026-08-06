export const PLACEHOLDER = "Authoritative content to be supplied.";

export const siteContent = {
  name: "Emily A. West",
  shortName: "EAW",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  heroQuestion: "How do humans build better explanations?",
  title: "Assistant Professor of Political Science",
  affiliation: "University of Pittsburgh",
  email: "",
  office: "",
  biography: PLACEHOLDER,
  heroIntroduction:
    "We do not simply accumulate new beliefs. We construct increasingly encompassing explanations capable of integrating more of our experience into a coherent understanding of the world. Yet inhabiting the space between an explanation that no longer adequately explains our experience and one that has not yet fully taken shape can be one of the most cognitively difficult experiences we face.",
  teachingPhilosophy: PLACEHOLDER,
  courses: [] as { title: string; term?: string; description?: string }[],
  profiles: [] as { label: string; url: string }[],
  cvFile: "/emily-west-cv.pdf",
  cvAvailable: false,
  socialImageAlt:
    "Emily A. West — How do humans build better explanations?",
} as const;
