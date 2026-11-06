import './CaseStudy.css'
import './ProjectPage.css'

function Ultifilm() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <section className="project-header">
                    <div className="project-header-text">
                        <h3>Analyze the past and level up for the future with</h3>
                        <h1>Ultifilm</h1>
                    </div>
                    <div className="project-header-image">
                        <iframe src="https://www.youtube.com/embed/EwxmUnOsBbE?si=hNHDL6JEJOmcFToV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </section>
                <section className="project-overview">
                    <div className="overview-item first-item">
                        <h3>Role</h3>
                        <p>Product Designer</p>
                    </div>
                    <div className="overview-item second-item">
                        <h3>Timeline</h3>
                        <p>January - May 2026</p>
                    </div>
                    <div className="overview-item">
                        <h3>Skills</h3>
                        <ul className="skill-list">
                            <li className="tag-chip">UI/UX Design</li>
                            <li className="tag-chip">Prototyping</li>
                            <li className="tag-chip">Figma</li>
                            <li className="tag-chip">Web Development</li>
                            <li className="tag-chip">TypeScript</li>
                            <li className="tag-chip">React</li>
                        </ul>
                    </div>
                </section>
                <section className="project-problem">
                    <h2>The Problem</h2>
                    <ul>
                        <li><span>No broadcast deal means coaches work from raw sideline footage</span></li>
                        <li><span>Film review becomes hours of unstructured scrubbing</span></li>
                        <li><span>Plays are drawn up on whiteboards, disconnected from game footage</span></li>
                        <li><span>Frame-by-frame player tracking is manual or non-existent</span></li>
                    </ul>
                    <h2>The Solution</h2>
                    <p>Ultifilm is a web-based film and play diagramming tool for Ultimate Frisbee players and coaches to...</p>
                    <ul>
                        <li><span>Annotate match footage</span></li>
                        <li><span>Mark up key moments</span></li>
                        <li><span>Build visual play diagrams</span></li>
                    </ul>
                </section>
            </div >
        </div >
    );
};

export default Ultifilm;