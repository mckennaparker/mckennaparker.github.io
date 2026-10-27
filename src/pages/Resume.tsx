import './Resume.css'

function Resume() {
    return (
        <div className="resume-page">
            <div className="resume-content content">
                <iframe className="resume-frame" src="McKennaParkerResume.pdf" />
            </div>
        </div>
    );
};

export default Resume;