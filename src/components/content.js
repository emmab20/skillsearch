import { useState, useEffect } from "react";

import StudentList from "./studentList";
import useGetRequest from "./useGetRequest";

const Content = () => {
	const [searchText, setSearchText] = useState("");

	const {
		data: students,
		isLoading,
		errorMessage,
	} = useGetRequest("http://localhost:7000/students/");

	const deleteHandler = (id) => {
		const list = students.filter((student) => student.id !== id);
	};

	return (
		<div>
			{isLoading && <div>Loading... Please wait.</div>}
			{errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
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
