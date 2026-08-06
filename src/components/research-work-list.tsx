import type { ResearchWork } from "@/content/types";

export function ResearchWorkList({ works }: { works: ResearchWork[] }) {
  const headingId = `claim-studies-${works[0]?.id ?? "list"}`;
  return <section className="claim-studies" aria-labelledby={headingId}>
    <h3 id={headingId}>Collection of Studies</h3>
    <div className="work-list">
      {works.map((work, index) => <article className="research-work" key={work.id}>
        <div className="work-number" aria-hidden="true">0{index + 1}</div>
        <div className="work-content">
          <p className="work-status">{work.venue ?? work.status}{!work.venue && work.status.toLowerCase() !== "working paper" && work.year ? ` · ${work.year}` : ""}</p>
          <h4>{work.title}</h4>
          {work.authors && <p className="work-authors">{work.authors.map((author, authorIndex) => <span key={author.displayName}>{author.profileUrl ? <a href={author.profileUrl}>{author.displayName}</a> : author.displayName}{authorIndex < work.authors!.length - 1 ? " and " : ""}</span>)}</p>}
          <p className="work-description">{work.description}</p>
          {Boolean(work.links?.length) && <div className="work-links">{work.links!.map((link) => <a href={link.href} key={link.label} target={link.isExternal ? "_blank" : undefined} rel={link.isExternal ? "noopener noreferrer" : undefined}>{link.label}{link.isExternal && <span className="sr-only"> (opens in a new tab)</span>}</a>)}</div>}
          {work.abstract && <details className="work-abstract">
            <summary><span>Abstract</span><i aria-hidden="true"/></summary>
            <div className={work.abstractIsPlaceholder ? "abstract-copy is-placeholder" : "abstract-copy"}><p>{work.abstract}</p></div>
          </details>}
        </div>
      </article>)}
    </div>
  </section>;
}
