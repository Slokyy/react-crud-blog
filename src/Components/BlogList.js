import React from 'react'

const BlogList = ({blogs}) => {



  return (
    <>
    {blogs && (
      <>
      {blogs.map((blog, index) => {
        const { id, author, title, body } = blog;
        console.log(blog);
        return (
          <div key={id}>
            <h4>{title}</h4>
            <p>{author}</p>
            <p>{body}</p>
            <hr />
          </div>
        )
      })}
      </>
    )}
      
    </>
  )
}

export default BlogList