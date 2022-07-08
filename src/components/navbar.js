import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="navbar">
			<h1>Skillspire</h1>
			<div className="links">
				<Link to="/list">List</Link>
				<Link to="/create">Create New</Link>
			</div>
		</div>
	);
};

export default NavBar;
