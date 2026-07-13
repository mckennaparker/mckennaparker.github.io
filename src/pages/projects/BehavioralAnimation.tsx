import './ProjectPage.css'
import Footer from '../../components/Footer'

function BehavioralAnimation() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <div className="project-header">
                    <div className="project-info">
                        <h1>Behavioral Animation Simulation</h1>
                        <p>Description coming soon...</p>
                    </div>
                    <div className="project-img">
                        <img className="project-hero-img" src="../projects/behavioralAnimation.png" />
                    </div>
                </div>
                <div className="project-">
                    <h3>Process</h3>
                    <ol>
                        <li>Simple following behavior</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BehavioralAnimation;