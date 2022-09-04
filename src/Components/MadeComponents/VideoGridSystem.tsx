import React from "react";
import { Link } from "react-router-dom";

interface VideoGridSystemProps {
	img: string;
	id: number;
}

const VideoGridSystem: React.FC<VideoGridSystemProps> = ({ img, id }) => {
	return (
		<div className="lg:col-span-3 cursor-pointer py-2 hover:shadow-md p-2 rounded-md">
			<Link to={`/video/${id}`}>
				<img src={img} alt="image1" className="h-36 w-full" />
				<div className="flex items-center">
					<img src={img} alt="image1" className="h-8 w-8 rounded-full" />
					<div className="pl-2">
						<h1 className="py-2 font-semibold">
							Mpass Senior High Project
						</h1>
					</div>
				</div>
				<p className="py-2 text-gray-500 text-sm">
					Upcoming project for Inzema Senior High Schools
				</p>
				<div className="flex items-center justify-between">
					<p className="py-2 text-gray-500 text-sm">2M views</p>
					<p className="py-2 text-gray-500 text-sm">5 weeks ago</p>
				</div>
			</Link>
		</div>
	);
};

export default VideoGridSystem;
