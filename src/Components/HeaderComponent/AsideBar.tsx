import React from "react";
import { useLocation } from "react-router-dom";

interface AsideBarProps {}

const AsideBar: React.FC<AsideBarProps> = () => {
	const { pathname } = useLocation();

	return (
		<aside className="bg-gray-100 h-screen flex-row justify-center items-center fixed overflow-scroll w-1/6 pt-10">
			{pathname === "/channel" ? (
				<>
					<h1 className="text-center text-xl py-5 cursor-pointer">
						Channel
					</h1>
					<h1 className="text-center text-xl py-5 cursor-pointer">
						Channel Request
					</h1>
				</>
			) : (
				<>
					<h1 className="text-center text-xl py-5 cursor-pointer">
						All videos
					</h1>
					<h1 className="text-center text-xl py-5 cursor-pointer">
						School Projects
					</h1>
					<h1 className="text-center text-xl py-5 cursor-pointer">
						Church Projects
					</h1>
					<h1 className="text-center text-xl py-5 cursor-pointer">
						Inspiring Videos
					</h1>
				</>
			)}
		</aside>
	);
};

export default AsideBar;
