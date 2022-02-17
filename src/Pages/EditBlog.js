import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setTimeout(() => {
        navigate("/");
      }, 500);
    });
  };

  return (
    <div className="create container">
      <h2>Edit blog</h2>
      {data && (
        <form>
          <label>Title:</label>
          <input
            type="text"
            required
            defaultValue={data?.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <label>Blog body:</label>
          {/* onChange={(e) => setTitle(e.target.value)} */}
          <textarea
            rows={7}
            required
            defaultValue={data?.body}
            onChange={(e) => setData({ ...data, body: e.target.value })}
          />
          <label>Blog long description:</label>
          {/* onChange={(e) => setTitle(e.target.value)} */}
          <textarea
            rows={7}
            required
            defaultValue={data?.long_description}
            onChange={(e) =>
              setData({ ...data, long_description: e.target.value })
            }
          />
          <label>Autor:</label>
          <select
            defaultValue={data?.author}
            onChange={(e) => setData({ ...data, author: e.target.value })}
          >
            <option defaultValue="mario">Mario</option>
            <option defaultValue="yoshi">Yoshi</option>
          </select>
          <button type="submit" onClick={handleEdit}>
            Edit blog
          </button>
        </form>
      )}
      <h2>{data?.title}</h2>
      <h2>{data?.body}</h2>
      <h2>{data?.long_description}</h2>
      <h2>{data?.author}</h2>
    </div>
  );
};

export default EditBlog;
