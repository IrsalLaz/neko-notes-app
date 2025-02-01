import ThemeContext from "../contexts/ThemeContext";
import { BsMoonStars, BsSun } from "react-icons/bs";

function ToggleTheme() {
	return (
		<ThemeContext.Consumer>
			{({ theme, toggleTheme }) => {
				return (
					<button className="button-icon" onClick={toggleTheme}>
						{theme === "light" ? <BsMoonStars /> : <BsSun />}
					</button>
				);
			}}
		</ThemeContext.Consumer>
	);
}

export default ToggleTheme;
