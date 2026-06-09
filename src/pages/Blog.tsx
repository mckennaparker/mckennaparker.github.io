import './Blog.css'
import BlogCard from "../components/BlogCard";
import Footer from '../components/Footer.tsx';
import { blogPosts } from '../data/blogs';

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
            <Footer />
        </div>
    );
};

export default Blog;