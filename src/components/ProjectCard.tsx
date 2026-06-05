type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  className?: string;
}

function ProjectCard({ title, description, link, className = '' }: ProjectCardProps) {
  return (
    <div className={`project-card ${className}`.trim()}>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;