import React from "react";
import AsideBar from "../HeaderComponent/AsideBar";
import NavigationBar from "../HeaderComponent/NavigationBar";

interface DashboardLayoutProps {
	children: JSX.Element;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	return (
		<main className="h-screen overflow-scroll">
			<NavigationBar />
			<div className="flex justify-center pt-20 h-screen fixed overflow-scroll">
				<div className="w-1/6 left-0 top-0  relative">
					<AsideBar />
				</div>
				<div className="w-full h-screen">{children}</div>
			</div>
		</main>
	);
};

export default DashboardLayout;
