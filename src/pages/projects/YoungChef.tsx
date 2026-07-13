import './ProjectPage.css'
import Footer from '../../components/Footer'

function YoungChef() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <div className="project-header">
                    <div className="project-info">
                        <h1>Young Chef</h1>
                        <p>A mobile application created for young adults grocery shopping and cooking for themselves for the first time.</p>
                    </div>
                    <div className="project-img">
                        <img style={{ border: "2px solid #8FB8D8" }} className="project-hero-img" src="../projects/youngChef.gif" />
                    </div>
                </div>
                <div className="">
                    <h3>Process</h3>
                    <ol>
                        <li>User Research</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default YoungChef;