import { useState, useEffect } from "react";
import StudentList from "./studentList";

const Content = () => {
	const [students, setStudents] = useState([
		{
			id: "1",
			firstName: "John",
			lastName: "Doe",
			course: "MERN",
		},
		{
			id: "2",
			firstName: "Abby",
			lastName: "Doe",
			course: "Python",
		},
		{
			id: "3",
			firstName: "Ricky",
			lastName: "Doe",
			course: "MERN",
		},
		{
			id: "4",
			firstName: "Jack",
			lastName: "Doe",
			course: "Python",
		},
		{
			id: "5",
			firstName: "Daniel",
			lastName: "Doe",
			course: "Python",
		},
	]);

	const [searchText, setSearchText] = useState("");

	const deleteHandler = (id) => {
		const list = students.filter((student) => student.id != id);
		setStudents(list);
	};

	return (
		<div>
			<StudentList
				students={students}
				header="All current students"
				deleteHandler={deleteHandler}
			/>
			<br />
			<label>Search : </label>
			<input
				type="text"
				name="searchText"
				id="searchText"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			{searchText && (
				<StudentList
					students={students.filter(
						(student) =>
							student.course.toLowerCase() === searchText.toLowerCase()
					)}
					header={"Search Result - " + searchText}
                    deleteHandler={deleteHandler}
				/>
			)}
		</div>
	);
};

export default Content;
