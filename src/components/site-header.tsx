"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  ["Home", "/"], ["Research", "/research"], ["Scholarship", "/publications"],
  ["CV", "/cv"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="identity" href="/" aria-label="Emily A. West, home">
        <span className="identity-name">Emily A. West</span>
        <span className="identity-role">Assistant Professor of Political Science</span>
        <span className="identity-institution">University of Pittsburgh</span>
      </Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
        <span>{open ? "Close" : "Menu"}</span><span className="menu-mark" aria-hidden="true">{open ? "×" : "≡"}</span>
      </button>
      <nav id="primary-navigation" aria-label="Primary navigation" className={open ? "nav nav-open" : "nav"}>
        {navigation.map(([label, href]) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>;
        })}
      </nav>
    </div>
  </header>;
}
