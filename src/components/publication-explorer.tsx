"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Publication, ResearchClaim } from "@/content/types";
import { publicationStatuses } from "@/content/types";
import { statusLabels } from "@/content/publications";
import { SearchIcon } from "./icons";
import { PublicationEntry } from "./publication-entry";

export function PublicationExplorer({ publications, claims }: { publications: Publication[]; claims: ResearchClaim[] }) {
  const router = useRouter(); const pathname = usePathname(); const params = useSearchParams();
  const query = params.get("q") ?? ""; const status = params.get("status") ?? "all"; const year = params.get("year") ?? "all"; const area = params.get("area") ?? "all";
  const update = useCallback((key: string, value: string) => { const next = new URLSearchParams(params.toString()); if (value && value !== "all") next.set(key, value); else next.delete(key); router.replace(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false }); }, [params, pathname, router]);
  const years = useMemo(() => [...new Set(publications.map((p) => p.year).filter((value): value is number => Boolean(value)))].sort((a,b) => b-a), [publications]);
  const filtered = useMemo(() => publications.filter((p) => {
    const haystack = [p.title, p.journal, ...p.authors.map((a) => a.displayName), ...p.keywords].filter(Boolean).join(" ").toLowerCase();
    return (!query || haystack.includes(query.toLowerCase())) && (status === "all" || p.status === status) && (year === "all" || p.year === Number(year)) && (area === "all" || p.researchClaimIds.includes(area));
  }), [publications, query, status, year, area]);

  return <div className="publication-explorer">
    <section className="filters" aria-label="Publication filters">
      <div className="search-field"><SearchIcon/><label htmlFor="publication-search">Search publications</label><input id="publication-search" type="search" value={query} onChange={(event) => update("q", event.target.value)} placeholder="Title, journal, coauthor, or keyword" /></div>
      <label>Status<select value={status} onChange={(e) => update("status", e.target.value)}><option value="all">All statuses</option>{publicationStatuses.map((item) => <option key={item} value={item}>{statusLabels[item]}</option>)}</select></label>
      <label>Year<select value={year} onChange={(e) => update("year", e.target.value)}><option value="all">All years</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      <label>Research claim<select value={area} onChange={(e) => update("area", e.target.value)}><option value="all">All claims</option>{claims.map((item) => <option key={item.id} value={item.id}>{item.shortTitle}</option>)}</select></label>
      {(query || status !== "all" || year !== "all" || area !== "all") && <button className="clear-filters" type="button" onClick={() => router.replace(pathname, { scroll: false })}>Clear filters</button>}
    </section>
    <p className="results-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "paper" : "papers"}</p>
    {publicationStatuses.map((group) => {
      const items = filtered.filter((p) => p.status === group).sort((a,b) => (b.year ?? 0) - (a.year ?? 0) || (a.order ?? 99) - (b.order ?? 99));
      if (!items.length && publications.length) return null;
      return <section className="publication-group" id={group} key={group}><div className="section-heading"><p className="eyebrow">Status</p><h2>{statusLabels[group]}</h2><span>{items.length}</span></div>{items.length ? items.map((publication) => <PublicationEntry key={publication.id} publication={publication}/>) : <p className="empty-state">No verified records have been added to this section yet.</p>}</section>;
    })}
  </div>;
}
