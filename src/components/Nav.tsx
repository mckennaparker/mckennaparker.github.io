import { Outlet, NavLink } from 'react-router'

function Nav() {
    return (
        <div>
            <nav className="nav">
                <h3>McKenna Parker</h3>
                <div className="nav-links">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}><p>About</p></NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}><p>Portfolio</p></NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}><p>Blog</p></NavLink>
                    <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}><p>Resume</p></NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Nav;