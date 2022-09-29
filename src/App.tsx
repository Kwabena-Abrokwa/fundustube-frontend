import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChannelAnalytics from "./Pages/Auth/ChannelAnalytics";
import ChannelPage from "./Pages/Auth/ChannelPage";
import HomePage from "./Pages/Auth/HomePage";
import ProfilePage from "./Pages/Auth/ProfilePage";
import SingleVideo from "./Pages/Auth/SingleVideo";
import Login from "./Pages/Guest/Login";
import Signup from "./Pages/Guest/Signup";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/video/:id" element={<SingleVideo />} />
				<Route path="/analytics/:id" element={<ChannelAnalytics />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/channel" element={<ChannelPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
