import React from "react";
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";

function Navigation({ logout, name }) {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to={"/archives"}>Arsip</Link>
				</li>
				<li>
					<button className="button-logout" onClick={logout}>
						{name} <BiLogOutCircle />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
