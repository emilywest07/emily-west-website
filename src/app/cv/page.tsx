import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PlaceholderNote } from "@/components/placeholder-note";
import { siteContent } from "@/content/site";

export const metadata: Metadata = { title: "CV", description: "Browser-readable curriculum vitae and PDF download." };
export default function CvPage() {
  return <><PageHeader eyebrow="Curriculum vitae" title="Academic record" introduction="A browser-readable curriculum vitae, designed for quick review and clean printing."/><section className="page-section"><div className="narrow prose"><div className="cv-actions"><a className="button-link" href={siteContent.cvAvailable ? siteContent.cvFile : undefined} aria-disabled={!siteContent.cvAvailable} download>Download CV (PDF)</a></div>{!siteContent.cvAvailable && <PlaceholderNote>The authoritative CV PDF and its contents have not yet been supplied. The download remains disabled to avoid linking to a missing or outdated file.</PlaceholderNote>}<h2>Appointments</h2><p className="empty-state">Authoritative appointments to be supplied.</p><h2>Education</h2><p className="empty-state">Authoritative education history to be supplied.</p><h2>Publications</h2><p className="empty-state">Verified publication records will be rendered here from the shared publication data.</p><h2>Teaching</h2><p className="empty-state">Authoritative teaching record to be supplied.</p><h2>Awards and service</h2><p className="empty-state">Authoritative awards and service record to be supplied.</p></div></section></>;
}

