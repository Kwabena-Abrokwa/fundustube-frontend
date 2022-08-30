import React from "react";

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
	return (
		<nav className="flex justify-between items-center py-2 px-3 bg-black fixed top-0 left-0 w-full h-20 z-50">
			<div className="text-white">Logo</div>
			<div>
				<input
					type={"search"}
					className="h-10 w-[35em] bg-gray-50 p-2 outline-none"
				/>
			</div>
			<div className="flex justify-between items-center  text-white">
				<p>Links</p>
				<p>Links</p>
				<p>Links</p>
			</div>
		</nav>
	);
};

export default NavigationBar;
