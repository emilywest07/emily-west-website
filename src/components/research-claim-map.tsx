"use client";

import { useEffect, useState } from "react";

type MapClaim = { id: string; mapTitle: string };

export function ResearchClaimMap({ claims, question }: { claims: MapClaim[]; question: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveId(visible.target.id);
    }, { rootMargin: "-22% 0px -55%", threshold: [0, 0.15, 0.35, 0.6] });
    claims.forEach((claim) => {
      const section = document.getElementById(claim.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [claims]);

  return <div className="concept-map">
    <div className="central-question"><span>Overarching question</span><strong>{question}</strong></div>
    <nav className="claim-branches" aria-label="Scientific claims organized around the overarching question">
      {claims.map((claim,index) => <a className={activeId === claim.id ? "is-current" : undefined} href={`#${claim.id}`} aria-current={activeId === claim.id ? "location" : undefined} key={claim.id}><span>Claim 0{index+1}</span><h3>{claim.mapTitle}</h3></a>)}
    </nav>
  </div>;
}
