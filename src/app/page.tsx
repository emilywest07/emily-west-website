import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { HeroVisual } from "@/components/hero-visual";
import { siteContent } from "@/content/site";

export default function Home() {
  return <section className="hero"><div className="shell hero-grid"><div><h1>{siteContent.heroQuestion}</h1><p className="hero-intro">{siteContent.heroIntroduction}</p><div className="hero-links"><Link className="text-link" href="/research">Explore the research <ArrowIcon/></Link><Link className="text-link" href="/publications">Scholarship <ArrowIcon/></Link></div></div><HeroVisual/></div></section>;
}
