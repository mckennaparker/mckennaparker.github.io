import './CaseStudy.css'
import './ProjectPage.css'

function Ultifilm() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <section className="project-header">
                    <div className="project-header-text">
                        <h3 className="ultifilm-h3">Analyze the past and level up for the future with</h3>
                        <h1 className="ultifilm-h1">Ultifilm</h1>
                    </div>
                    <div className="project-header-image">
                        <iframe src="https://www.youtube.com/embed/EwxmUnOsBbE?si=hNHDL6JEJOmcFToV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </section>
                <section className="project-overview">
                    <div className="overview-item first-item">
                        <h3 className="ultifilm-h3">Role</h3>
                        <p>Product Designer &</p>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="overview-item second-item">
                        <h3 className="ultifilm-h3">Timeline</h3>
                        <p>January - May 2026</p>
                    </div>
                    <div className="overview-item">
                        <h3 className="ultifilm-h3">Team</h3>
                        <p>1 Product Designer</p>
                        <p>1 Backend Developer</p>
                        <p>2 Frontend Developers</p>
                    </div>
                    <div className="overview-item">
                        <h3 className="ultifilm-h3">Skills</h3>
                        <ul className="skill-list">
                            <li className="tag-chip">Prototyping</li>
                            <li className="tag-chip">Figma</li>
                            <li className="tag-chip">TypeScript</li>
                            <li className="tag-chip">React</li>
                        </ul>
                    </div>
                </section>
                <section className="project-problem">
                    <h2 className="ultifilm-h2">The Problem</h2>
                    <p>I noticed during a film review session that my coaches were spending hours manually reviewing and annotating game footage. They were doing all the right things to prepare, but didn't have the right tools to streamline their process. Team review sessions suffered because information wasn't being presented efficiently.</p>
                </section>
                <section className="">
                    <h2 className="ultifilm-h2"></h2>
                    <p></p>
                </section>
            </div>
        </div>
    );
};

export default Ultifilm;