import useGetRequest from "./useGetRequest";
import { useParams, useNavigate } from "react-router-dom";

const StudentDetails = () => {
	const { id } = useParams();
	const {
		data: student,
		isLoading,
		errorMessage,
	} = useGetRequest("/students/" + id);
	const navigate = useNavigate();

	const deleteStudent = () => {
		fetch("/students/" + id, { method: "DELETE" }).then(() => {
			navigate("/list");
		});
	};

	return (
		<div>
			{isLoading && <div>Loading... Please wait.</div>}
			{errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
			{student && (
				<article>
					<h2>
						{student.firstName} {student.lastName}
					</h2>
					<p>Enrolled to {student.course}</p>
					<button onClick={deleteStudent} style={{ color: "red" }}>
						Delete
					</button>
				</article>
			)}
		</div>
	);
};

export default StudentDetails;
