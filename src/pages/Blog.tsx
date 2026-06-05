import './Blog.css'
import BlogCard from "../components/BlogCard";
import Footer from '../components/Footer.tsx';

function Blog() {
    return (
        <div className="blog">
            <div className="blog-content">
                <h1>Blog</h1>
                <div className="blog-list">
                    <BlogCard title="Blog Post 1" description="A web application that allows users to track their fitness goals." link="" />
                    <BlogCard title="Blog Post 2" description="A web application that allows users to track their fitness goals." link="" />
                    <BlogCard title="Blog Post 3" description="A web application that allows users to track their fitness goals." link="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;