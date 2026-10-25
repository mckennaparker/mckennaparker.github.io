import './Blog.css'
import BlogCard from "../components/BlogCard";
import { blogPosts } from '../data/blogs';
import { Outlet } from 'react-router'

function Blog() {
    return (
        <div className="blog">
            <div className="blog-content">
                <h1>Blog</h1>
                <div className="blog-list">
                    {blogPosts.map((blog) => (
                        <BlogCard key={blog.url} blog={blog} />
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Blog;