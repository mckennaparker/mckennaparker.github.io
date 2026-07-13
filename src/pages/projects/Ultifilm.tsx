import './ProjectPage.css'
import Footer from '../../components/Footer'

function Ultifilm() {
    return (
        <div className="project-page">
            <div className="project-content content">
                <div className="project-header">
                    <div className="project-info">
                        <h1>Ultifilm</h1>
                        <p>A web application that streamlines the process of film review, annotation, and play making for ultimate frisbee coaches and players. This project was built with Khang Le and Gabriel Thiessen as a final project for CIS 4120: Human-Computer Interaction at UPenn during spring 2026.</p>
                    </div>
                    <div className="project-img">
                        <img className="project-hero-img" src="../projects/ultifilm.png" />
                    </div>
                </div>
                <div className="">
                    <h3>Process</h3>
                    <ol>
                        <li>Cook-Torrance BSDF and Lambertian BSDF</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Ultifilm;