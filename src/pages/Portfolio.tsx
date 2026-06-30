import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from '../components/Footer.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';
import { projects } from '../data/projects.ts';
import { Outlet } from 'react-router'
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const SlickSlider = ((Slider as unknown as { default?: typeof Slider }).default ?? Slider) as typeof Slider;

function Portfolio() {
    const graphicsProjects = projects.filter((project) => project.type === 'graphics' || !project.type);
    const uxUiProjects = projects.filter((project) => project.type === 'web' || project.type === 'AI/ML');

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoPlay: true,
        appendDots: (dots: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined) => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                }}
            >
                <ul style={{ margin: "-10px" }}> {dots} </ul>
            </div>
        )
    }

    return (
        <div className="portfolio">
            <div className="portfolio-content">
                <div className="project-sections">
                    <div className="project-section">
                        <div className="section-text">
                            <h2>Graphics Projects</h2>
                            <h4 className="portfolio-intro">
                                A selection of recent projects across animation, procedural modeling, and graphics work.
                            </h4>
                        </div>
                        <SlickSlider {...settings} className="portfolio-slider">
                            {graphicsProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </SlickSlider>
                    </div>
                    <div className="project-section">
                        <div className="section-text">
                            <h2>UX/UI Projects</h2>
                            <h4 className="portfolio-intro">
                                A selection of recent projects across user interface design, human-computer interaction, and web development.
                            </h4>
                        </div>
                        <SlickSlider {...settings} className="portfolio-slider">
                            {uxUiProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </SlickSlider>
                    </div>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div>
    );
};

export default Portfolio;