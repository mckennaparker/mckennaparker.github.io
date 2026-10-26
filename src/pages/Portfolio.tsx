import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';
import { projects, type Project } from '../data/projects.ts';
import { useParams } from 'react-router';

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
        id: 'ui-ux',
        title: 'UI/UX Projects',
        description: 'A selection of recent projects across user interface design, human-computer interaction, and web development.',
        projects: projects.filter(
            (project) => project.type === 'web' || project.type === 'AI/ML'
        ),
    },
} satisfies Record<string, Omit<ProjectSectionProps, 'projects'> & { projects: Project[] }>;

function Portfolio() {
    const { category } = useParams();
    const selectedSection = category
        ? categorySections[category as keyof typeof categorySections]
        : undefined;

    const graphicsProjects = projects.filter((project) => project.type === 'graphics' || !project.type);

    return (
        <div className="portfolio">
            <div className="portfolio-content">
                {selectedSection ? (
                    <ProjectSection {...selectedSection} />
                ) : (
                    <div className="project-sections">
                        <ProjectSection
                            id="graphics"
                            title="Graphics Projects"
                            description="A selection of recent projects across animation, procedural modeling, and graphics work."
                            projects={graphicsProjects}
                        />
                        <ProjectSection {...categorySections.games} />
                        <ProjectSection {...categorySections['tech-art']} />
                        <ProjectSection {...categorySections.design} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;