import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Components/BlogList.css";

const BlogList = ({blogs, handleDelete}) => {

  const navigate = useNavigate();

  /* console.log(handleDelete) */

  return (
    <>
    {blogs && (
      <>
      {blogs.map((blog, index) => {
        const { id, author, title, body } = blog;
        return (
          <div key={id} className="blog-list flex">
            <h3 onClick={() => navigate(`/blogs/${id}`)}>{title} <span>by {author}</span></h3>
            
            <p>{body}</p>
            <button onClick={() => handleDelete(id)}>Delete this blog</button>
          </div>
        )
      })}
      </>
    )}
      
    </>
  )
}

export default BlogList