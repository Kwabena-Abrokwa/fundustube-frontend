import React from "react";

interface AsideBarProps {}

const AsideBar: React.FC<AsideBarProps> = () => {
	return (
		<aside className="bg-gray-100 h-screen flex-row justify-center items-center fixed overflow-scroll w-1/6 pt-10">
			<h1 className="text-center text-xl py-5 cursor-pointer">All videos</h1>
			<h1 className="text-center text-xl py-5 cursor-pointer">
				School Projects
			</h1>
			<h1 className="text-center text-xl py-5 cursor-pointer">
				Church Projects
			</h1>
			<h1 className="text-center text-xl py-5 cursor-pointer">
				Inspiring Videos
			</h1>
		</aside>
	);
};

export default AsideBar;
