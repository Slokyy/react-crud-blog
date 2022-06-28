import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Pages/EditBlog.css";

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
		<div className="edit container">
			<h2>Edit blog</h2>
			{data && (
				<form>
					<div className="form-group">
						<label>Title:</label>
						<input
							type="text"
							required
							defaultValue={data?.title}
							onChange={(e) => setData({ ...data, title: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Blog body:</label>
						{/* onChange={(e) => setTitle(e.target.value)} */}
						<textarea
							required
							defaultValue={data?.body}
							onChange={(e) => setData({ ...data, body: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label>Blog long description:</label>
						{/* onChange={(e) => setTitle(e.target.value)} */}
						<textarea
							required
							defaultValue={data?.long_description}
							onChange={(e) =>
								setData({ ...data, long_description: e.target.value })
							}
						/>
					</div>
					<div className="form-group">
						<label>Autor:</label>
						<select
							defaultValue={data?.author}
							onChange={(e) => setData({ ...data, author: e.target.value })}
						>
							<option defaultValue="mario">Mario</option>
							<option defaultValue="louigi">Louigi</option>
						</select>
					</div>

					<button type="submit" onClick={handleEdit}>
						Edit blog
					</button>
				</form>
			)}
		</div>
	);
};

export default EditBlog;
