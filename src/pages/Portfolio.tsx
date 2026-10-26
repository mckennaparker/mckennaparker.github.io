import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from '../components/ProjectCard.tsx';
import './Portfolio.css';
import { projects } from '../data/projects.ts';
import { Outlet, useLocation } from 'react-router'
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const SlickSlider = ((Slider as unknown as { default?: typeof Slider }).default ?? Slider) as typeof Slider;

function Portfolio() {
    const graphicsProjects = projects.filter((project) => project.type === 'graphics' || !project.type);
    const gamesProjects = projects.filter((project) => project.type === 'games');
    const techArtProjects = projects.filter((project) => project.type === 'techart');
    const uxUiProjects = projects.filter((project) => project.type === 'web' || project.type === 'AI/ML');

    return (
        <div className="portfolio">
            <div className="portfolio-content">
                <div className="project-sections">
                    <div id="graphics" className="project-section">
                        <div className="section-text">
                            <h2>Graphics Projects</h2>
                            <h4 className="portfolio-intro">
                                A selection of recent projects across animation, procedural modeling, and graphics work.
                            </h4>
                        </div>
                        <div className="graphics-container container">
                            {graphicsProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </div>
                    </div>
                    <div id="games" className="project-section">
                        <div className="section-text">
                            <h2>Game Development Projects</h2>
                            <h4 className="portfolio-intro">
                                A selection of recent projects across different game development domains such as programming and design.
                            </h4>
                        </div>
                        <div className="games-container container">
                            {gamesProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </div>
                    </div>
                    <div id="tech-art" className="project-section">
                        <div className="section-text">
                            <h2>Tech Art Projects</h2>
                            <h4 className="portfolio-intro">A selection of recent projects across tech art domains such as procedural and 3D modeling.</h4>
                        </div>
                        <div className="tech-art-container container">
                            {techArtProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </div>
                    </div>
                    <div id="ui-ux" className="project-section">
                        <div className="section-text">
                            <h2>UI/UX Projects</h2>
                            <h4 className="portfolio-intro">
                                A selection of recent projects across user interface design, human-computer interaction, and web development.
                            </h4>
                        </div>
                        <div className="ui-ux-container container">
                            {uxUiProjects.map((project) => (
                                <ProjectCard key={project.id} className="project-card-portfolio" project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Portfolio;