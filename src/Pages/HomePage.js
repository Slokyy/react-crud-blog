import React, { useEffect, useState } from 'react';
import BlogList from '../Components/BlogList';
import "../styles/Pages/HomePage.css";

const HomePage = () => {
  const [ blogs, setBlogs ] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          if(!res.ok) {
            setLoading(false);
            throw Error("Response not ok!")
          }
          return res.json();
        })
        .then((data) => {
          console.log(data)
          setBlogs(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(`Error message: ${err}`)
          setLoading(false);
        });
    }, 500)
  }, []);

  return (
      <section className="homepage">
        {loading && <div className="loading">Loading...</div>}
        {blogs?.length > 0 && (
          <div className="container">
            <BlogList blogs={blogs} />
          </div>
        )}
      </section>
  )
}

export default HomePage