import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailNote from "./pages/DetailNote";
import AddNote from "./pages/AddNote";

function App() {
	return (
		<div className="app-container">
			<header>
				<h1>
					<Link to={"/"}>React Notes 📝</Link>
				</h1>

				<Navigation />
			</header>

			<main>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/notes/new" element={<AddNote />}></Route>
					<Route path="/notes/:id" element={<DetailNote />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
