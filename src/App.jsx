import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AddNote from "./pages/AddNote";

function App() {
	return (
		<div className="app-container">
			<header>
				<h1>React Notes</h1>
				<Navigation />
			</header>

			<main>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/addNote" element={<AddNote />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
