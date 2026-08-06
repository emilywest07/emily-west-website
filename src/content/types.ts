export const publicationStatuses = [
  "published",
  "forthcoming",
  "under-review",
  "working-paper",
] as const;

export type PublicationStatus = (typeof publicationStatuses)[number];

export type Author = {
  givenName: string;
  familyName: string;
  displayName: string;
  profileUrl?: string;
  isEmilyWest?: boolean;
};

export type PublicationLinkType =
  | "article"
  | "preprint"
  | "doi"
  | "publisher"
  | "replication"
  | "data"
  | "appendix"
  | "slides"
  | "media";

export type PublicationLink = {
  type: PublicationLinkType;
  label: string;
  url: string;
  format?: string;
  accessNote?: string;
};

export type Publication = {
  id: string;
  slug: string;
  title: string;
  authors: Author[];
  status: PublicationStatus;
  year?: number;
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  publicationType?: "article" | "chapter" | "book" | "review" | "report";
  abstract?: string;
  summary?: string;
  researchClaimIds: string[];
  keywords: string[];
  featured?: boolean;
  featuredOrder?: number;
  order?: number;
  doi?: string;
  links: PublicationLink[];
  citation?: string;
  bibtex?: string;
  datePublished?: string;
  dateUpdated?: string;
  note?: string;
  visible: boolean;
};

export type ResearchProject = {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  summary?: string;
  detail?: string;
  descriptionParagraphs?: string[];
  status?: string;
  links?: {
    label: string;
    href: string;
    isPrimary?: boolean;
    isExternal?: boolean;
    isPlaceholder?: boolean;
  }[];
  publicationIds: string[];
  isFlagship?: boolean;
};

export type ResearchWork = {
  id: string;
  title: string;
  status: string;
  venue?: string;
  year?: number;
  authors?: Author[];
  description: string;
  abstract?: string;
  abstractIsPlaceholder?: boolean;
  links?: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
  pendingLinks?: {
    label: string;
    placeholderHref: string;
  }[];
};

export type ResearchClaim = {
  id: string;
  title: string;
  mapTitle: string;
  shortTitle: string;
  question?: string;
  summary?: string;
  contribution?: string;
  evidence?: string;
  nextQuestions?: string;
  relatedClaimIds: string[];
  projects: ResearchProject[];
  works?: ResearchWork[];
  order: number;
  isPlaceholder?: boolean;
};
