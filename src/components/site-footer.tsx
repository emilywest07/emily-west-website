import Link from "next/link";
import { siteContent } from "@/content/site";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div><p className="footer-name">{siteContent.name}</p><p className="muted small">{siteContent.title}<br/>{siteContent.affiliation}</p></div>
      <nav aria-label="Footer navigation"><Link href="/research">Research</Link><Link href="/publications">Scholarship</Link><Link href="/cv">CV</Link><Link href="/contact">Contact</Link></nav>
      <p className="muted small footer-copy">© {new Date().getFullYear()} Emily A. West</p>
    </div>
  </footer>;
}
