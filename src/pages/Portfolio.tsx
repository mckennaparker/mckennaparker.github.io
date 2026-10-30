import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';
import { projects, type Project } from '../data/projects.ts';
import { useParams, NavLink } from 'react-router';

type ProjectSectionProps = {
    id: string;
    title: string;
    description: string;
    projects: Project[];
};

function ProjectSection({ id, title, description, projects }: ProjectSectionProps) {
    return (
        <div id={id} className="project-section">
            <div className="section-text">
                <h2>{title}</h2>
                <h4 className="portfolio-intro">{description}</h4>
            </div>
            <div className="container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                ))}
            </div>
        </div>
    );
}

const categorySections = {
    games: {
        id: 'games',
        title: 'Game Development Projects',
        description: 'A selection of recent projects across different game development domains such as programming and design.',
        projects: projects.filter((project) => project.type === 'games'),
    },
    'tech-art': {
        id: 'tech-art',
        title: 'Tech Art Projects',
        description: 'A selection of recent projects across tech art domains such as procedural and 3D modeling.',
        projects: projects.filter((project) => project.type === 'techart'),
    },
    design: {
        id: 'design',
        title: 'Design Projects',
        description: 'A selection of recent projects across user interface design, human-computer interaction, and web development.',
        projects: projects.filter(
            (project) => project.type === 'design'
        ),
    },
} satisfies Record<string, Omit<ProjectSectionProps, 'projects'> & { projects: Project[] }>;

function Portfolio() {
    const { category } = useParams();
    const selectedSection = category
        ? categorySections[category as keyof typeof categorySections]
        : undefined;

    return (
        <div className="portfolio">
            <div className="portfolio-content">
                {selectedSection ? (
                    <ProjectSection {...selectedSection} />
                ) : (
                    <div className="portfolio-main">
                        <div className="portfolio-main-about">
                            <h2>Portfolio</h2>
                            <p>Throughout my time at Penn, both inside and outside of the classroom, I've enjoyed honing my technical and design skills, often developing projects that utilize both skillsets. The buttons below will take you to portfolio pages showcasing projects exemplifying my work within that area.</p>
                        </div>
                        <div className="portfolio-main-buttons">
                            <NavLink to="/portfolio/games"><button className="btn btn-primary">Game Development</button></NavLink>
                            <NavLink to="/portfolio/tech-art"><button className="btn btn-primary">Technical Art</button></NavLink>
                            <NavLink to="/portfolio/design"><button className="btn btn-primary">Interface and Experience Design</button></NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;