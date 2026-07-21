import './Resume.css'
import Footer from '../components/Footer'

function Resume() {
    return (
        <div className="resume-page">
            <div className="resume-content content">
                <iframe className="resume-frame" src="McKennaParkerResume.pdf" />
            </div>
            <Footer />
        </div>
    );
};

export default Resume;