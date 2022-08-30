import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Auth/HomePage";
import SingleVideo from "./Pages/Auth/SingleVideo";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/video/:id" element={<SingleVideo />} />
			</Routes>
		</div>
	);
}

export default App;
