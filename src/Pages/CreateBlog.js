import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pages/FormBlog.css";

const CreateBlog = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("mario");
	const [body, setBody] = useState("");
	const [long_description, setLongDescription] = useState("");
	const navigate = useNavigate();
	const [isPosting, setIsPosting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author, long_description };
		console.log("blog:", blog);
		setIsPosting(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(blog),
		})
			.then(() => setIsPosting(false))
			.then(() => {
				setTimeout(() => {
					navigate("/");
				}, 1000);
			});
	};

	return (
		<div className="form-blog container">
			<h2>Add new Dev Blog</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Title:</label>
					<input
						type="text"
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Blog body:</label>
					<textarea
						rows={7}
						required
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Longer Description:</label>
					<textarea
						rows={7}
						required
						value={long_description}
						onChange={(e) => setLongDescription(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Author:</label>
					<select value={author} onChange={(e) => setAuthor(e.target.value)}>
						<option value="Mario">Mario</option>
						<option value="Louigi">Louigi</option>
					</select>
				</div>

				{!isPosting && <button type="submit">Dodaj blog</button>}
				{isPosting && <button type="submit">Blog se dodaje...</button>}
			</form>
		</div>
	);
};

export default CreateBlog;
