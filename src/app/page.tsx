import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { HeroVisual } from "@/components/hero-visual";
import { PlaceholderNote } from "@/components/placeholder-note";
import { siteContent } from "@/content/site";
import { researchClaims } from "@/content/research";
import { featuredPublications } from "@/content/publications";

export default function Home() {
  return <>
    <section className="hero"><div className="shell hero-grid"><div><h1>{siteContent.heroQuestion}</h1><p className="hero-intro">{siteContent.heroIntroduction}</p><div className="hero-links"><Link className="text-link" href="/research">Explore the research <ArrowIcon/></Link><Link className="text-link" href="/publications">Find a paper <ArrowIcon/></Link></div></div><HeroVisual/></div></section>
    <section className="home-section"><div className="shell section-grid"><div className="section-kicker"><p className="eyebrow">The Research Agenda</p></div><div className="section-content research-agenda-copy"><h2>How explanations grow</h2>{siteContent.researchAgenda.map((paragraph) => <p className="large-copy" key={paragraph}>{paragraph}</p>)}<Link className="text-link" href="/research">Read the research overview <ArrowIcon/></Link></div></div></section>
    <section className="home-section flagship"><div className="shell section-grid"><div className="section-kicker"><p className="eyebrow">Flagship current project</p></div><div className="section-content"><h2>Recursive Reflection Theory</h2><PlaceholderNote>Approved description of the theory, its central proposition, evidence, and relationship to the broader agenda will appear here.</PlaceholderNote><Link className="text-link" href="/research#recursive-reflection-theory">Explore the project <ArrowIcon/></Link></div></div></section>
    <section className="home-section"><div className="shell section-grid"><div className="section-kicker"><p className="eyebrow">Scientific claims</p></div><div className="section-content"><h2>One question, three claims</h2><div className="claim-list">{researchClaims.map((claim,index) => <Link className="claim-preview" href={`/research#${claim.id}`} key={claim.id}><span className="claim-number">0{index+1}</span><div><h3>{claim.title}</h3><p>{claim.question ?? "Research question to be supplied."}</p></div><ArrowIcon/></Link>)}</div></div></div></section>
    <section className="home-section"><div className="shell section-grid"><div className="section-kicker"><p className="eyebrow">Selected work</p></div><div className="section-content"><h2>Representative publications</h2>{featuredPublications.length ? null : <p className="empty-state">Selected work will appear here after verified publication records are supplied.</p>}<Link className="text-link" href="/publications">View all publications <ArrowIcon/></Link></div></div></section>
  </>;
}
