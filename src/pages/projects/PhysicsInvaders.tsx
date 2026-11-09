import './CaseStudy.css'
import './ProjectPage.css'

function PhysicsInvaders() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <section className="project-header">
                    <div className="project-header-text">
                        <h3>The classic arcade game with physically-based components</h3>
                        <h1>Physics Invaders</h1>
                    </div>
                    <div className="project-header-image">
                        <img src="./projects/physicsInvaders.png" alt="An image of the Physics Invaders game" />
                    </div>
                </section>
                <section className="project-overview">
                    <div className="overview-item first-item">
                        <h3>Role</h3>
                        <p>Game Designer</p>
                    </div>
                    <div className="overview-item second-item">
                        <h3>Timeline</h3>
                        <p>September 2026</p>
                    </div>
                    <div className="overview-item">
                        <h3>Team</h3>
                        <p>Just me</p>
                    </div>
                    <div className="overview-item">
                        <h3>Skills</h3>
                        <ul className="skill-list">
                            <li className="tag-chip">Unity 6</li>
                            <li className="tag-chip">C#</li>
                            <li className="tag-chip">Game Design</li>
                            <li className="tag-chip">Documentation</li>
                        </ul>
                    </div>
                </section>
                <section className="project-problem">
                    <h2>The Problem</h2>
                    <p>I noticed during a film review session that my coaches were spending hours manually reviewing and annotating game footage. They were doing all the right things to prepare, but didn't have the right tools to streamline their process. Team review sessions suffered because information wasn't being presented efficiently.</p>
                </section>
                <section className="">
                    <h2></h2>
                    <p></p>
                </section>
            </div>
        </div>
    );
};

export default PhysicsInvaders;