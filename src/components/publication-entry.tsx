"use client";

import { useState } from "react";
import Link from "next/link";
import type { Publication } from "@/content/types";
import { CheckIcon } from "./icons";

export function PublicationEntry({ publication }: { publication: Publication }) {
  const [copied, setCopied] = useState<"citation" | "bibtex" | null>(null);
  const copy = async (kind: "citation" | "bibtex", value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(kind); window.setTimeout(() => setCopied(null), 1800);
  };
  return <article className="publication-entry">
    <div className="publication-main">
      <p className="publication-meta">{publication.year ?? "Year pending"}{publication.journal ? ` · ${publication.journal}` : ""}</p>
      <h3>{publication.title}</h3>
      <p className="authors">{publication.authors.map((author) => author.displayName).join(", ")}</p>
      {publication.summary && <p className="publication-summary">{publication.summary}</p>}
      <div className="publication-tags">{publication.researchClaimIds.map((id) => <Link key={id} href={`/research#${id}`}>{id.replaceAll("-", " ")}</Link>)}</div>
      <div className="publication-links">{publication.links.map((link) => <a key={`${link.type}-${link.url}`} href={link.url} target="_blank" rel="noreferrer">{link.label}<span className="sr-only"> (opens in a new tab)</span></a>)}</div>
    </div>
    <div className="publication-details">
      {publication.abstract && <details><summary>Abstract</summary><p>{publication.abstract}</p></details>}
      {(publication.citation || publication.bibtex) && <div className="copy-actions" aria-live="polite">
        {publication.citation && <button type="button" onClick={() => copy("citation", publication.citation!)}>{copied === "citation" && <CheckIcon/>}{copied === "citation" ? "Copied" : "Copy citation"}</button>}
        {publication.bibtex && <button type="button" onClick={() => copy("bibtex", publication.bibtex!)}>{copied === "bibtex" && <CheckIcon/>}{copied === "bibtex" ? "Copied" : "Copy BibTeX"}</button>}
      </div>}
    </div>
  </article>;
}
