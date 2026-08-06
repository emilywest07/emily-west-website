import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PlaceholderNote } from "@/components/placeholder-note";

export const metadata: Metadata = {
  title: "Additional Publications",
  description: "An archive of Emily A. West’s broader published and ongoing scholarship.",
};

export default function AdditionalPublicationsPage() {
  return <>
    <PageHeader
      eyebrow="Scholarly archive"
      title="Additional Publications"
      introduction="These publications span political behavior, democratic representation, social identity, discrimination, and collaborative research. While they fall outside the central explanatory frameworks research program, they have informed its development and reflect broader scholarly contributions."
    />
    <section className="page-section">
      <div className="narrow additional-publications-placeholder">
        <PlaceholderNote>Authoritative publication records and their organization will be supplied here.</PlaceholderNote>
        <div aria-hidden="true" className="archive-placeholder-lines"><span/><span/><span/></div>
      </div>
    </section>
  </>;
}
