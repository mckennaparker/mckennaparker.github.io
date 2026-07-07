import { Outlet, NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function onClick() {
    var links = document.getElementById("nav-links");
    links?.classList.toggle("menu-open");
}

function Nav() {
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
            <Outlet />
        </div>
    );
};

export default Nav;