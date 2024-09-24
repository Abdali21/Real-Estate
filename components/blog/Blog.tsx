import { blogs } from "@/data/data";
import SectionHeading from "../helper/SectionHeading";
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <div className="pt-16 pb-16 bg-gray-100">
            <div className="w-[80%] mx-auto">
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                >
                    <SectionHeading
                        heading="Check Our Blogs"
                        heading2="Discover Fresh Perspectives"
                    />
                </div>
                <div 
                    data-aos="fade-up" 
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center"
                >
                    {blogs.map((blog, index) => (
                        <div 
                            key={blog.id} 
                            data-aos="zoom-in" 
                            data-aos-delay={`${(index + 1) * 100}`}
                        >
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
