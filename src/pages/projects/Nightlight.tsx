import './ProjectPage.css'
import Footer from '../../components/Footer'

function Nightlight() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <div className="project-header">
                    <div className="project-info">
                        <h1>Nightlight</h1>
                        <p>This game was developed in collaboration with other college students for the UniJam 2026 Game Jam with a theme of "ancient."</p>
                    </div>
                    <div className="project-img">
                        <img className="project-hero-img" src="../projects/nightlight.webp" />
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

export default Nightlight;