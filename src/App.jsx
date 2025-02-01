import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddNote from "./pages/AddNote";
import NotFoundPage from "./pages/NotFoundPage";
import ArchivePage from "./pages/ArchivePage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import RegisterPage from "./pages/RegisterPage";
import ThemeContext from "./contexts/ThemeContext";
import LocaleContext from "./contexts/LocaleContext";
import LoadingContainer from "./components/LoadingContainer";

function App() {
	const [authedUser, setAuthedUser] = React.useState(null);
	const [initializing, setInitializing] = React.useState(true);

	// # Theme
	const [theme, setTheme] = React.useState(() => {
		const storedTheme = localStorage.getItem("themeValue");
		return storedTheme === "light" ? "light" : "dark";
	});

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			return prevTheme === "dark" ? "light" : "dark";
		});
	};

	React.useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("themeValue", theme);
	}, [theme]);

	const themeContextValue = React.useMemo(() => {
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	// #Locale
	const [locale, setLocale] = React.useState(() => {
		const storedLocale = localStorage.getItem("localeValue");
		return storedLocale === "id" ? "id" : "en";
	});

	const toggleLocale = () => {
		setLocale((prevLocale) => {
			return prevLocale === "id" ? "en" : "id";
		});
	};

	React.useEffect(() => {
		localStorage.setItem("localeValue", locale);
	}, [locale]);

	const localeContextValue = React.useMemo(() => {
		return {
			locale,
			toggleLocale,
		};
	}, [locale]);

	const onLoginSuccess = ({ accessToken }) => {
		putAccessToken(accessToken);
		getUserLogged().then(({ data }) => {
			setAuthedUser(data);
		});
	};

	const onLogout = () => {
		setAuthedUser(null);
		putAccessToken("");
	};

	// set effect for accessToken so it still logged in
	React.useEffect(() => {
		getUserLogged().then(({ data }) => {
			setAuthedUser(data);
			setInitializing(false);
		});
	}, []);

	if (initializing) {
		return <LoadingContainer />;
	}

	if (authedUser === null) {
		return (
			<div className="app-container">
				<header>
					<h1>
						<Link to={"/"}>Neko React Notes 📝</Link>
					</h1>
				</header>

				<main>
					<Routes>
						<Route
							path="/*"
							element={<LoginPage loginSuccess={onLoginSuccess} />}
						></Route>
						<Route path="/register" element={<RegisterPage />}></Route>
					</Routes>
				</main>
			</div>
		);
	}

	return (
		<LocaleContext.Provider value={localeContextValue}>
			<ThemeContext.Provider value={themeContextValue}>
				<div className="app-container">
					<header>
						<h1>
							<Link to={"/"}>Neko React Notes 📝</Link>
						</h1>

						<Navigation logout={onLogout} name={authedUser.name} />
					</header>

					<main>
						<Routes>
							<Route path="/" element={<HomePage />}></Route>
							<Route path="/archives" element={<ArchivePage />}></Route>
							<Route path="/notes/new" element={<AddNote />}></Route>
							<Route path="/notes/:id" element={<DetailPage />}></Route>
							<Route path="*" element={<NotFoundPage />}></Route>
						</Routes>
					</main>
				</div>
			</ThemeContext.Provider>
		</LocaleContext.Provider>
	);
}

export default App;
