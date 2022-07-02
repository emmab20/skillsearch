import { useState, useEffect } from "react";
import StudentList from "./studentList";

const Content = () => {
	const [students, setStudents] = useState([]);

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
