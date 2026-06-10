import type { Project } from '../data/projects.ts'
import { formatDisplayDate } from '../data/content.ts'
import { NavLink } from 'react-router'

type ProjectCardProps = {
  project: Project
  className?: string
}

function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const previewImage = project.thumbnail ?? project.imageUrl

  return (
    <article className={`project-card ${className}`.trim()}>
      <NavLink className="project-card-link" to={project.link}>
        {previewImage ? (
          <img className="project-card-image" src={previewImage} alt={`${project.title} thumbnail`} />
        ) : (
          <div className="project-card-placeholder" aria-hidden="true">
            <span>No preview available</span>
          </div>
        )}
        <div className="project-card-body">
          <div className="project-card-meta">
            <span>{formatDisplayDate(project.date)}</span>
            <span>{project.id}</span>
          </div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
          <span className="card-cta">View Project</span>
        </div>
      </NavLink>
    </article>
  )
}

export default ProjectCard