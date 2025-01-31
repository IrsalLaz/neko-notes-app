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

function App() {
	const [authedUser, setAuthedUser] = React.useState(null);
	const [initializing, setInitializing] = React.useState(true);

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
		return (
			// TODO: improve this
			<div className="app-container">
				<main className="loading-page">
					<p>Loading...</p>
				</main>
			</div>
		);
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
	);
}

export default App;
