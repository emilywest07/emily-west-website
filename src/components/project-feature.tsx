import type { ResearchProject } from "@/content/types";
import { PlaceholderNote } from "./placeholder-note";

export function ProjectFeature({ project }: { project: ResearchProject }) {
  return <article className="project-feature" id={project.id}>
    <div className="project-feature-lead">
      <h3>{project.title}</h3>
      {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
    </div>
    {project.descriptionParagraphs ? <div className="project-description">{project.descriptionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : project.summary ? <p className="project-description">{project.summary}</p> : <PlaceholderNote>Approved project description, central claims, applications, and current stage will appear here.</PlaceholderNote>}
    {(project.status || project.links) && <footer className="project-footer">
      {project.status && <div className="project-status"><span>Status</span><strong>{project.status}</strong></div>}
      {project.links && <div className="project-actions">{project.links.map((link) => <a className={link.isPrimary ? "project-primary-action" : "project-secondary-action"} href={link.href} key={link.label} target={link.isExternal ? "_blank" : undefined} rel={link.isExternal ? "noopener noreferrer" : undefined}>{link.label}{link.isExternal && <span className="sr-only"> (opens in a new tab)</span>}</a>)}</div>}
    </footer>}
  </article>;
}
