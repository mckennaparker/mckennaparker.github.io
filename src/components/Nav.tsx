function Nav({ current }: { current: string }) {
    return (
        <nav className="nav">
            <h3>McKenna Parker</h3>
            <div className="nav-links">
                <a href="#home" className={current === "Home" ? "active" : ""}><p>About</p></a>
                <a href="#projects" className={current === "Graphics" ? "active" : ""}><p>Computer Graphics</p></a>
                <a href="#design" className={current === "Design" ? "active" : ""}><p>UX/UI Design</p></a>
            </div>
        </nav>
    );
};

export default Nav;