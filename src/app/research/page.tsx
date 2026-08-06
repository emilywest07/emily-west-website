import type { Metadata } from "next";
import { PlaceholderNote } from "@/components/placeholder-note";
import { ResearchWorkList } from "@/components/research-work-list";
import { ProjectFeature } from "@/components/project-feature";
import { ResearchClaimMap } from "@/components/research-claim-map";
import { researchClaims } from "@/content/research";
import { siteContent } from "@/content/site";

export const metadata: Metadata = { title: "Research", description: "Scientific claims, questions, projects, and connections in Emily A. West’s work." };

export default function ResearchPage() {
  return <>
    <section className="research-opening"><div className="shell research-opening-grid">
      <header className="research-opening-intro"><p className="eyebrow">Research</p><h1>How Humans Build Better Explanations</h1><div className="research-opening-copy"><p>My research investigates how human beings construct, maintain, revise, and learn through the explanatory frameworks by which they understand themselves, other people, and the world.</p><p>Rather than simply accumulating beliefs, people organize beliefs, values, identities, and experiences into structured explanations. I study how these frameworks are constructed and reorganized, how they can be observed directly, and whether recursive explanatory organization helps people understand, remember, transfer, and communicate new knowledge.</p></div></header>
      <div className="research-opening-map"><p className="eyebrow">One question, three claims</p><h2>Approaches to the Question</h2><p className="approaches-intro">The research below develops and tests three scientific claims about how people build, revise, and learn through explanatory frameworks.</p><ResearchClaimMap claims={researchClaims.map(({ id, mapTitle }) => ({ id, mapTitle }))} question={siteContent.heroQuestion}/></div>
    </div></section>
    {researchClaims.map((claim,index) => {
      return <section className="page-section research-claim" id={claim.id} key={claim.id}><div className="shell"><div className="claim-overview"><div className="claim-head"><div><p className="eyebrow">Claim 0{index+1}</p><h2>{claim.title}</h2></div><div><h3>Research Question</h3>{claim.question ? <p className="large-copy">{claim.question}</p> : <PlaceholderNote>Authoritative research question to be supplied.</PlaceholderNote>}</div></div><div className="claim-detail-grid"><div><h3>Contribution</h3>{claim.contribution ? <p>{claim.contribution}</p> : <PlaceholderNote/>}</div><div><h3>Evidence &amp; Methods</h3>{claim.evidence ? <p>{claim.evidence}</p> : <PlaceholderNote/>}</div><div><h3>Next Questions</h3>{claim.nextQuestions ? <p>{claim.nextQuestions}</p> : <PlaceholderNote/>}</div></div></div>{claim.projects.map((project) => <ProjectFeature project={project} key={project.id}/>)}{claim.works && <ResearchWorkList works={claim.works}/>}</div></section>;
    })}
    <section className="page-section"><div className="shell"><div className="claim-head"><p className="eyebrow">Synthesis</p><div><h2>Connections across claims</h2><PlaceholderNote>Approved descriptions of the substantive connections among claims will appear here.</PlaceholderNote><div className="connection-list">{researchClaims.map((claim,index) => <div key={claim.id}><span>Claim 0{index+1}</span><h3>{claim.shortTitle}</h3><p className="muted">Connections to be supplied.</p></div>)}</div></div></div></div></section>
  </>;
}
