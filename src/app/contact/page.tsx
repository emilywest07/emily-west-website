import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PlaceholderNote } from "@/components/placeholder-note";
import { siteContent, PLACEHOLDER } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Professional contact information for Emily A. West." };
export default function ContactPage() {
  return <><PageHeader eyebrow="Contact" title="Get in touch" introduction="Professional contact details and academic profiles."/><section className="page-section"><div className="shell section-grid"><div className="section-kicker"><div className="portrait-placeholder" role="img" aria-label="Professional portrait to be supplied"><span>{siteContent.shortName}</span></div></div><div className="section-content"><h2>{siteContent.name}</h2>{siteContent.biography === PLACEHOLDER && <PlaceholderNote>Approved short biography and optional professional portrait will appear here.</PlaceholderNote>}<dl className="detail-list"><div><dt>Title</dt><dd>{siteContent.title}</dd></div><div><dt>Affiliation</dt><dd>{siteContent.affiliation}</dd></div><div><dt>Email</dt><dd>{siteContent.email ? <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a> : "To be supplied"}</dd></div><div><dt>Office</dt><dd>{siteContent.office || "To be supplied"}</dd></div>{siteContent.profiles.map((profile) => <div key={profile.url}><dt>{profile.label}</dt><dd><a href={profile.url}>{profile.url}</a></dd></div>)}</dl></div></div></section></>;
}
