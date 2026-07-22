import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';
import { projects } from '../data/projects.ts';
import { Link, Outlet, useLocation } from 'react-router'
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const SlickSlider = ((Slider as unknown as { default?: typeof Slider }).default ?? Slider) as typeof Slider;

function Portfolio() {
    const location = useLocation();
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

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const sectionId = location.hash.replace('#', '');
        const section = document.getElementById(sectionId);

        if (section) {
            const yOffset = sectionId === "ui-ux" ? -84 : -120;

            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [location.pathname, location.hash]);

    const graphicsProjects = projects.filter((project) => project.type === 'graphics' || !project.type);
    const gamesProjects = projects.filter((project) => project.type === 'games');
    const techArtProjects = projects.filter((project) => project.type === 'techart');
    const uxUiProjects = projects.filter((project) => project.type === 'web' || project.type === 'AI/ML');

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
                <div className="portfolio-nav">
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', hash: '#graphics' }}><p>Graphics</p></Link>
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', hash: '#games' }}><p>Games</p></Link>
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', hash: '#tech-art' }}><p>Tech Art</p></Link>
                    <Link className="portfolio-link" to={{ pathname: '/portfolio', hash: '#ui-ux' }}><p>UI/UX</p></Link>
                </div>
                <div className="project-sections">
                    <div id="graphics" className="project-section">
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
                    <div id="games" className="project-section">
                        <div className="section-text">
                            <h2>Game Development Projects</h2>
                            <h4 className="portfolio-intro">
                                A selection of recent projects across different game development domains such as programming and design.
                            </h4>
                        </div>
                        <SlickSlider {...settings} className="portfolio-slider">
                            {gamesProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </SlickSlider>
                    </div>
                    <div id="tech-art" className="project-section">
                        <div className="section-text">
                            <h2>Tech Art Projects</h2>
                            <h4 className="portfolio-intro">A selection of recent projects across tech art domains such as procedural and 3D modeling.</h4>
                        </div>
                        <SlickSlider {...settings} className="portfolio-slider">
                            {techArtProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </SlickSlider>
                    </div>
                    <div id="ui-ux" className="project-section">
                        <div className="section-text">
                            <h2>UI/UX Projects</h2>
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