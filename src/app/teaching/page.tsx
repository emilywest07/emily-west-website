import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PlaceholderNote } from "@/components/placeholder-note";
import { siteContent } from "@/content/site";

export const metadata: Metadata = { title: "Teaching", description: "Teaching, courses, mentoring, and student resources." };
export default function TeachingPage() {
  return <><PageHeader eyebrow="Teaching" title="Teaching and mentorship" introduction="Courses, teaching commitments, and public resources will be collected here."/><section className="page-section"><div className="narrow prose"><p className="eyebrow">Approach</p><h2>Teaching philosophy</h2><PlaceholderNote>Approved teaching philosophy will appear here.</PlaceholderNote><h2>Courses</h2>{siteContent.courses.length ? <ul>{siteContent.courses.map((course) => <li key={course.title}><strong>{course.title}</strong>{course.term && ` · ${course.term}`}{course.description && <p>{course.description}</p>}</li>)}</ul> : <p className="empty-state">Verified course information has not yet been supplied.</p>}<h2>Mentoring and advising</h2><PlaceholderNote>Approved mentoring, advising, and student-resource information will appear here.</PlaceholderNote></div></section></>;
}

