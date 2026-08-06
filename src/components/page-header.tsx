export function PageHeader({ eyebrow, title, introduction, headlineClassName }: { eyebrow: string; title: string; introduction: string | string[]; headlineClassName?: string }) {
  return <header className="page-header shell"><p className="eyebrow">{eyebrow}</p><h1 className={headlineClassName}>{title}</h1>{Array.isArray(introduction) ? <div className="page-intro">{introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : <p className="page-intro">{introduction}</p>}</header>;
}
