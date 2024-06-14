import React from 'react';
import './Blog.css'; 

const Blog = ({ title, content, author, image }) => {
  return (
    <div className="blog-card">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + image} alt={title} />
      </div>
      <div className="blog-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
};

export default Blog;





