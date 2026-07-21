import { useEffect, useState } from 'react';
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
    const [slidesToShow, setSlidesToShow] = useState(() => {
        if (typeof window === 'undefined') {
            return 3;
        }

        return window.innerWidth <= 800 ? 1 : window.innerWidth <= 1200 ? 2 : 3;
    });

    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(window.innerWidth <= 800 ? 1 : window.innerWidth <= 1200 ? 2 : 3);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const graphicsProjects = projects.filter((project) => project.type === 'graphics' || !project.type);
    const uxUiProjects = projects.filter((project) => project.type === 'web' || project.type === 'AI/ML');
    const artProjects = projects.filter((project) => project.type === 'art');

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
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
                    <div className="project-section">
                        <div className="section-text">

                        </div>
                        <SlickSlider>
                            {artProjects.map((project) => (
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