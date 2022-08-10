import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentCreate = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [course, setCourse] = useState("python");
	const navigate = useNavigate();

	const createStudent = (e) => {
		e.preventDefault();

		const student = {
			firstName: firstName,
			lastName: lastName,
			course: course,
		};

		fetch("/students/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(student),
		}).then(() => {
			navigate("/list");
		});
	};

	return (
		<div className="create">
			<h2>Create new student</h2>

			<form action="">
				<label>First Name</label>
				<input
					type="text"
					required
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<label>Last Name</label>
				<input
					type="text"
					required
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				></input>
				<label>Course</label>
				<select value={course} onChange={(e) => setCourse(e.target.value)}>
					<option value="python">PYTHON</option>
					<option value="MERN">MERN</option>
					<option value="sql">SQL</option>
					<option value="java">JAVA</option>
				</select>
				<button onClick={createStudent} style={{ backgroundColor: "blue" }}>
					Add Student
				</button>
			</form>
		</div>
	);
};

export default StudentCreate;
