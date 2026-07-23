import { Outlet, NavLink, useLocation } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function onClick() {
    var links = document.getElementById("nav-links");
    links?.classList.toggle("menu-open");
}

function Nav() {
    const location = useLocation();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

            if (totalScroll > 0) {
                const currentScroll = window.scrollY;
                setScrollProgress((currentScroll / totalScroll) * 100);
            } else {
                setScrollProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <div>
            <nav className="nav">
                <NavLink to="/" className="logo-link"><h3>McKenna Parker</h3></NavLink>
                <div id="nav-links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active first-link" : "first-link"} onClick={onClick}><p>About</p></NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active middle-link" : "middle-link"} onClick={onClick}><p>Portfolio</p></NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "active middle-link" : "middle-link"} onClick={onClick}><p>Blog</p></NavLink>
                    <NavLink to="/resume" className={({ isActive }) => isActive ? "active last-link" : "last-link"} onClick={onClick}><p>Resume</p></NavLink>
                </div>
                <div className="menu">
                    <button onClick={onClick} aria-label="Toggle menu" style={{ background: "none", border: "none", padding: "0", cursor: "pointer", color: "inherit" }}>
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </button>
                </div>
            </nav>
            <div className="scroll-bar" style={{ width: `${scrollProgress}%` }}></div>
            <Outlet />
        </div>
    );
};

export default Nav;