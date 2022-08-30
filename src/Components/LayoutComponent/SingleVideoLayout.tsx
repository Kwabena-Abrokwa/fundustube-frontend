import React from "react";
import NavigationBar from "../HeaderComponent/NavigationBar";

interface SingleVideoLayoutProps {
	children: JSX.Element;
}

const SingleVideoLayout: React.FC<SingleVideoLayoutProps> = ({ children }) => {
	return (
		<main className="h-screen overflow-scroll">
			<NavigationBar />
			<div className="flex justify-center pt-20 h-screen fixed overflow-scroll">
				<div className="w-full h-screen">{children}</div>
			</div>
		</main>
	);
};

export default SingleVideoLayout;
