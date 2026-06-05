import Footer from '../components/Footer.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="portfolio-content">
                <h1>Portfolio</h1>
                <div className="project-section first-row">
                    <h2>Computer Graphics Projects</h2>
                    <div className="project-list">
                        <ProjectCard className="project-card-portfolio" title="Project 1" description="A web application that allows users to track their fitness goals." link="" />
                        <ProjectCard className="project-card-portfolio" title="Project 2" description="A web application that allows users to track their fitness goals." link="" />
                        <ProjectCard className="project-card-portfolio" title="Project 3" description="A web application that allows users to track their fitness goals." link="" />
                    </div>
                </div>
                <div className="project-section second-row">
                    <h2>UX/UI Design Projects</h2>
                    <div className="project-list">
                        <ProjectCard className="project-card-portfolio" title="Project 1" description="A web application that allows users to track their fitness goals." link="" />
                        <ProjectCard className="project-card-portfolio" title="Project 2" description="A web application that allows users to track their fitness goals." link="" />
                        <ProjectCard className="project-card-portfolio" title="Project 3" description="A web application that allows users to track their fitness goals." link="" />
                    </div>
                </div>
                <div className="project-section third-row">
                    <h2>Other Projects</h2>
                    <div className="project-list">
                        <ProjectCard className="project-card-portfolio" title="Project 1" description="A web application that allows users to track their fitness goals." link="" />
                        <ProjectCard className="project-card-portfolio" title="Project 2" description="A web application that allows users to track their fitness goals." link="" />
                        <ProjectCard className="project-card-portfolio" title="Project 3" description="A web application that allows users to track their fitness goals." link="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;