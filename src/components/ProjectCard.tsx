function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="project-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;