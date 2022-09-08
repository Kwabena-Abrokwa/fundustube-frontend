import React from "react";
import { Link } from "react-router-dom";

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	return (
		<nav className="flex justify-between items-center py-2 px-3 bg-black fixed top-0 left-0 w-full h-20 z-10">
			<Link to={"/"}>
				<p className="px-4 cursor-pointer text-white text-xl">Logo</p>
			</Link>
			<div>
				<input
					type={"search"}
					className="h-10 w-[45em] bg-gray-50 p-2 outline-none"
					placeholder="Search"
				/>
			</div>
			<div className="flex justify-between items-center text-white">
				<Link to={"/"}>
					<p className="px-4 cursor-pointer">About</p>
				</Link>
				<Link to={"/"}>
					<p className="px-4 cursor-pointer">Contact</p>
				</Link>
				<Link to={"/login"}>
					<p className="px-4 cursor-pointer">Login</p>
				</Link>
				<Link to={"/signup"}>
					<p className="px-4 cursor-pointer">Signup</p>
				</Link>
			</div>
		</nav>
	);
};

export default NavigationBar;
