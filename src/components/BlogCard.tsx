function BlogCard({ title, description, link }: { title: string; description: string; link: string }) {
    return (
        <div className="blog-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Read More
            </a>
        </div>
    );
};

export default BlogCard;