import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <ProjectCard title="Project 1" description="A web application that allows users to track their fitness goals." link="" />
            <ProjectCard title="Project 2" description="A web application that allows users to track their fitness goals." link="" />
            <ProjectCard title="Project 3" description="A web application that allows users to track their fitness goals." link="" />
        </div>
    );
};

export default Portfolio;