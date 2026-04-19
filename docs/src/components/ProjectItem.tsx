import type { Project } from '../types';

interface Props {
  project: Project;
}

export default function ProjectItem({ project }: Props) {
  return (
    <div className="project-item">
      <div className="project-header">
        <span className="project-name">{project.name}</span>
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ArrowIcon />
            {project.link.label}
          </a>
        )}
      </div>
      <p
        className="project-description"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
      <div className="tech-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}