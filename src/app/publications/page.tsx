import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ResearchWorkList } from "@/components/research-work-list";
import { scholarshipSections } from "@/content/publications";

export const metadata: Metadata = { title: "Scholarship", description: "A complete record of published, forthcoming, under-review, and ongoing scholarship." };

export default function PublicationsPage() {
  return <><PageHeader eyebrow="Scholarship" title="Scholarship" introduction="A complete record of published, forthcoming, under-review, and ongoing scholarship."/><section className="page-section publication-archive"><div className="shell scholarship-sections">{scholarshipSections.map((section) => <section className="scholarship-section" key={section.title}><h2>{section.title}</h2>{section.groups.map((group, index) => <div className="scholarship-group" key={group.title ?? index}>{group.title && <h3>{group.title}</h3>}<ResearchWorkList works={group.works} heading={null}/></div>)}</section>)}</div></section></>;
}
