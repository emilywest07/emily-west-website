import type { Publication, PublicationStatus } from "./types";

// This array is intentionally empty. Add only verified publication records.
// See CONTENT-GUIDE.md for a complete, copyable example and validation checklist.
export const publications: Publication[] = [];

export const statusLabels: Record<PublicationStatus, string> = {
  published: "Published",
  forthcoming: "Forthcoming",
  "under-review": "Under Review",
  "working-paper": "Working Papers",
};

export const visiblePublications = publications.filter(
  (publication) => publication.visible,
);

export const featuredPublications = visiblePublications
  .filter((publication) => publication.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export function getPublicationsForClaim(claimId: string) {
  return visiblePublications.filter((publication) =>
    publication.researchClaimIds.includes(claimId),
  );
}
