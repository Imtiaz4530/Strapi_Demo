"use client";
import { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "@/context/CategoryContext";

const Blogs = ({ blogs }) => {
  const { category } = useContext(CategoryContext);

  const filterBlogs = blogs.data.filter((blog) => {
    return blog.attributes.categories.data.some(
      (cat) => cat.attributes.Title === category
    );
  });

  console.log(filterBlogs);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filterBlogs?.map((blog) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
