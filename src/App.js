import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Content from "./components/content";
import StudentDetails from "./components/studentdetails";
import StudentCreate from "./components/studentcreate";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes>
					<Route
						path="/create"
						element={<StudentCreate></StudentCreate>}
					></Route>
					<Route path="/list" element={<Content />}></Route>
					<Route
						path="/"
						element={
							<div>
								<h1>Welcome Page</h1>
							</div>
						}
					></Route>
					<Route
						path="/students/:id"
						element={<StudentDetails></StudentDetails>}
					></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
