import type { Metadata } from "next";

export const metadata: Metadata = { title: "CV", description: "Download Emily A. West’s current curriculum vitae." };

const cvUrl = "https://www.dropbox.com/scl/fi/n1j5mof71zw37qve3pdn1/West_CurrentCV.pdf?rlkey=qoahnytgdl7pz89nyryw998h6&e=1&dl=0";

export default function CvPage() {
  return <section className="cv-download-page"><div className="shell cv-download-content"><p className="eyebrow">Curriculum Vitae</p><h1>Academic Record</h1><p>Download the current curriculum vitae.</p><a className="button-link" href={cvUrl} target="_blank" rel="noopener noreferrer">Download CV (PDF)<span className="sr-only"> (opens in a new tab)</span></a></div></section>;
}
