import type { BlogPost } from '../data/blogs'
import { formatDisplayDate } from '../data/content'
import { NavLink } from 'react-router'

type BlogCardProps = {
    blog: BlogPost
    className?: string
}

function BlogCard({ blog, className = '' }: BlogCardProps) {
    return (
        <article className={`blog-card ${className}`.trim()}>
            <NavLink className="blog-card-link" to={blog.url}>
                <div className="blog-card-body">
                    <div className="blog-card-meta">
                        <span>{formatDisplayDate(blog.date)}  ·  {blog.author}</span>
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
            </NavLink>
        </article>
    )
}

export default BlogCard