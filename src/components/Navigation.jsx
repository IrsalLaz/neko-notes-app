import React from "react";
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { BsMoonStars, BsSun, BsTranslate } from "react-icons/bs";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";

function Navigation({ logout, name }) {
	const { theme, toggleTheme } = React.useContext(ThemeContext);
	const { locale, toggleLocale } = React.useContext(LocaleContext);

	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to={"/archives"}>{locale === "id" ? "Arsip" : "Archive"}</Link>
				</li>
				<li>
					<button className="button-icon" onClick={toggleTheme}>
						{theme === "light" ? <BsMoonStars /> : <BsSun />}
					</button>
				</li>
				<li>
					<button className="button-icon" onClick={toggleLocale}>
						{locale === "id" ? "en" : "id"}
						<BsTranslate />
					</button>
				</li>
				<li>
					<button className="button-icon" onClick={logout}>
						{name} <BiLogOutCircle />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
