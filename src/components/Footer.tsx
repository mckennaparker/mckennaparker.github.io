import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

function Footer() {
    const copyEmailToClipboard = async (email: string): Promise<void> => {
        try {
            await navigator.clipboard.writeText(email);
            alert('Email copied to clipboard!');
        } catch (error) {
            console.error('Failed to copy email address. Please try again.');
        }
    };

    return (
        <div className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/mckenna-parker" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareLinkedin} size="2x" />
                </a>
                <a href="https://github.com/mckennaparker" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                </a>
                <a href="mailto:mckennaparker@example.com" onClick={(e) => {
                    e.preventDefault();
                    copyEmailToClipboard('mckennarparker@gmail.com');
                }}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFile} size="2x" />
                </a>
            </div>
            <p>© 2026 McKenna Parker. All rights reserved.</p>
        </div>
    );
};

export default Footer;