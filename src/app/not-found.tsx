import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
export default function NotFound() { return <section className="page-header shell"><p className="eyebrow">404 · Page not found</p><h1>This explanation has reached its limit.</h1><p className="page-intro">The page may have moved, or the address may be incomplete.</p><Link className="text-link" href="/">Return home <ArrowIcon/></Link></section>; }

