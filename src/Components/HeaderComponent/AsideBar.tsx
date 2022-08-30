import React from "react";

interface AsideBarProps {}

const AsideBar: React.FC<AsideBarProps> = () => {
	return (
		<aside className="bg-gray-600 h-screen text-white flex-row justify-center items-center fixed overflow-scroll w-1/6">
			<h1>Hello</h1>
			<h1>Hello</h1>
		</aside>
	);
};

export default AsideBar;
