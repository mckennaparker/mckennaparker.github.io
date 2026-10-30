import { Outlet, NavLink } from 'react-router'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer.tsx'

function onClick() {
    var links = document.getElementById("nav-links");
    links?.classList.toggle("menu-open");
}

function Nav() {
    return (
        <div>
            <nav className="nav">
                <div className="nav-header">
                    <NavLink to="/" className="logo-link">
                        <h4 className="nav-header-title">McKenna Parker</h4>
                        <p className="nav-header-subtitle">Graphics @ UPenn</p>
                    </NavLink>
                </div>
                <div id="nav-links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active first-link" : "first-link main-link"} onClick={onClick}><p>About</p></NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active middle-link" : "middle-link main-link"} onClick={onClick}><p>Portfolio</p></NavLink>
                    <NavLink to="/portfolio/games" className="dropdown-link" onClick={onClick}><p>Game Dev</p></NavLink>
                    <NavLink to="/portfolio/tech-art" className="dropdown-link" onClick={onClick}><p>Tech Art</p></NavLink>
                    <NavLink to="/portfolio/design" className="dropdown-link" onClick={onClick}><p>Design</p></NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "active middle-link" : "middle-link main-link"} onClick={onClick}><p>Blog</p></NavLink>
                    <NavLink to="/resume" className={({ isActive }) => isActive ? "active last-link" : "last-link main-link"} onClick={onClick}><p>Resume</p></NavLink>
                </div>
                <Footer />
            </nav >
            <Outlet />
        </div >
    );
};

export default Nav;