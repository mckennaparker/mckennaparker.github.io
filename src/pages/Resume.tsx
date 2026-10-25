import './Resume.css'

function Resume() {
    return (
        <div className="resume-page">
            <div className="resume-content content">
                <a href="McKennaParkerResume.pdf" download="McKennaParkerResume.pdf"><button className="btn-primary btn btn-downlaod">Download Resume</button></a>
                <iframe className="resume-frame" src="McKennaParkerResume.pdf" />
            </div>
        </div>
    );
};

export default Resume;