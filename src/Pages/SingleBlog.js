import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Pages/SingleBlog.css";
import message from "../ImportantNotes.txt";

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const [important, setImportant] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
          setLoading(false);
        })
        .catch((err) => console.log(`Error message: ${err}`));
    }, 500);
  }, []);

  useEffect(() => {
    fetch(message)
      .then((res) => res.text())
      .then((text) => setImportant(text));
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTimeout(() => {
        navigate("/");
      }, 500);
    });
  };

  // pokusao object destructuring ali blog undefined
  // Da li treba async ili zbog timeouta imam problem

 /*  const { title, author, long_description, body } = blog */



  return (
    <div className="single-blog container">
      {loading && <div className="loading">Loading...</div>}
      {!loading && blog && blog.id == id && (
        <div className="single-blog-page">
          <h1>
            {blog.title}{" "}
            <span>
              {" "}
              by{" "}
              <span
                className="single-blog-page-author"
                onClick={() => {
                  alert("I don't do anything but check the console! :)");
                  console.log(`${important}`);
                }}
              >
                {blog.author}
              </span>
            </span>
          </h1>
          <p>{blog.body}</p>
          <p>{blog.long_description}</p>

          <div className="single-blog-page-options flex">
            <button onClick={() => navigate(`/edit-blog/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
      {!loading && Object.keys(blog).length === 0 && <h1>No blog data</h1>}
    </div>
  );
};

export default SingleBlog;
