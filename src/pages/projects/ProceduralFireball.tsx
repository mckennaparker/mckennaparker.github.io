import './ProjectPage.css'
import Footer from '../../components/Footer'

function ProceduralFireball() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <div className="project-header">
                    <div className="project-info">
                        <h1>Procedural Fireball</h1>
                        <p>Description coming soon...</p>
                    </div>
                    <div className="project-img">
                        <img className="project-hero-img" src="../projects/fireball.png" />
                    </div>
                </div>
                <div className="">
                    <h3>Process</h3>
                    <ol>
                        <li>Custom Ray-Tracing Engine</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProceduralFireball;