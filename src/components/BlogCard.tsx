import type { BlogPost } from '../data/blogs'
import { formatDisplayDate } from '../data/content'

type BlogCardProps = {
    blog: BlogPost
    className?: string
}

function BlogCard({ blog, className = '' }: BlogCardProps) {
    return (
        <article className={`blog-card ${className}`.trim()}>
            <a className="blog-card-link" href={blog.url}>
                <div className="blog-card-body">
                    <div className="blog-card-meta">
                        <span>{formatDisplayDate(blog.date)}</span>
                        <span>{blog.author}</span>
                    </div>
                    <h2>{blog.title}</h2>
                    <p>{blog.snippet}</p>
                    <div className="tag-list">
                        {blog.tags.map((tag) => (
                            <span key={tag} className="tag-chip">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span className="card-cta">Read More</span>
                </div>
            </a>
        </article>
    )
}

export default BlogCard