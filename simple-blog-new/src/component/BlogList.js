import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import './BlogList.css'; 
import blogData from './blogData.json'; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <Blog key={blog.id} title={blog.title} content={blog.content} author={blog.author} image={blog.image} />
      ))}
    </div>
  );
};

export default BlogList;




