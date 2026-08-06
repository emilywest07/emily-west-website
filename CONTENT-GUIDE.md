# Content maintenance guide

The site keeps all scholarly content in `src/content`. Do not put publication metadata directly in page components.

## Add a publication

Open `src/content/publications.ts` and add an object to `publications`. Use only verified values. Optional fields can be omitted.

```ts
{
  id: "stable-unique-id",
  slug: "url-safe-title",
  title: "[Verified title]",
  authors: [
    {
      givenName: "Emily",
      familyName: "West",
      displayName: "Emily A. West",
      isEmilyWest: true,
    },
  ],
  status: "working-paper",
  year: 2026,
  journal: "[Verified venue, if applicable]",
  abstract: "[Verified abstract]",
  summary: "[Approved plain-language summary]",
  researchClaimIds: ["claim-01-framework-construction"],
  keywords: ["verified", "search", "terms"],
  links: [{ type: "preprint", label: "Preprint", url: "https://…" }],
  citation: "[Verified formatted citation]",
  bibtex: "[Verified BibTeX]",
  featured: false,
  visible: true,
}
```

The TypeScript model in `src/content/types.ts` lists every supported field. `id` and `slug` must be unique. `researchClaimIds` must match claim IDs in `src/content/research.ts`.

## Change a publication status

Change only the record’s `status` field to one of `published`, `forthcoming`, `under-review`, or `working-paper`. The paper moves sections automatically. Then update verified year, journal, DOI, citation, and links as needed.

## Replace the CV

1. Add the authoritative file at `public/emily-west-cv.pdf`.
2. In `src/content/site.ts`, set `cvAvailable` to `true`.
3. Update the browser-readable sections in `src/app/cv/page.tsx` from the same CV. Never let the HTML and PDF records diverge.

## Update page content

- Site identity, contact, biography, teaching data: `src/content/site.ts`
- Research claims and projects: `src/content/research.ts`
- Publications: `src/content/publications.ts`
- Page-specific approved prose and section structure: the corresponding file in `src/app`

Remove `PlaceholderNote` elements only when the replacement copy is authoritative. Keep stable research-claim IDs even when changing their visible titles so existing links continue to work.

## Pre-deployment checklist

Set `NEXT_PUBLIC_SITE_URL` to the final canonical `https://` URL in Vercel. Run:

```sh
npm run check
npm run build
```

Verify the CV download, all external links, filters, citation copying, mobile navigation, keyboard navigation, reduced-motion view, print previews, `/sitemap.xml`, `/robots.txt`, and the social preview image.
