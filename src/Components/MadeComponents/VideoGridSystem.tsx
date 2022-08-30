import React from "react";
import { Link } from "react-router-dom";

interface VideoGridSystemProps {
	img: string;
}

const VideoGridSystem: React.FC<VideoGridSystemProps> = ({ img }) => {
	return (
		<div className="lg:col-span-3 cursor-pointer py-2 hover:shadow-md p-2 rounded-md">
			<Link to={"/video/1"}>
				<img src={img} alt="image1" className="h-40 w-full" />
				<div className="flex items-center">
					<img src={img} alt="image1" className="h-8 w-8 rounded-full" />
					<div className="pl-2">
						<h1 className="text-md py-2 font-semibold">
							Inzema Senior High Project
						</h1>
					</div>
				</div>
				<p className="py-2 text-justify text-gray-500">
					Upcoming project for Inzema Senior High School
				</p>
			</Link>
		</div>
	);
};

export default VideoGridSystem;
