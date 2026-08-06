import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/page-header";
import { PublicationExplorer } from "@/components/publication-explorer";
import { visiblePublications } from "@/content/publications";
import { researchClaims } from "@/content/research";

export const metadata: Metadata = { title: "Publications", description: "Find work by title, journal, year, status, coauthor, keyword, or research area." };

export default function PublicationsPage() {
  return <><PageHeader eyebrow="Publications" title="The complete scholarly record" introduction="Find work by title, journal, year, status, coauthor, keyword, or research claim. Bibliographic details appear here; the Research page explains how the ideas connect."/><section className="page-section"><div className="shell"><Suspense fallback={<p className="empty-state">Loading publication index…</p>}><PublicationExplorer publications={visiblePublications} claims={researchClaims}/></Suspense></div></section></>;
}
