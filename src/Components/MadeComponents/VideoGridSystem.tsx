import React from "react";
import { Link } from "react-router-dom";

interface VideoGridSystemProps {
	img: string;
	id: number;
	title: string;
	brief: string;
	views: string;
	date: string;
	route: string;
}

const VideoGridSystem: React.FC<VideoGridSystemProps> = ({
	img,
	id,
	title,
	brief,
	views,
	date,
	route
}) => {


	const truncant = (str: string) => {
		if (str.length > 25) {
			return str.slice(0, 24) + "...";
		} else {
			return str;
		}
	};

	return (
		<div className="lg:col-span-3 cursor-pointer py-2 hover:shadow-md p-2 rounded-md">
			<Link to={`/${route}/${id}`}>
				<img src={img} alt="image1" className="h-36 w-full" />
				<div className="flex items-start pt-3">
					<img src={img} alt="image1" className="h-8 w-8 rounded-full" />
					<div className="pl-2">
						<h1 className=" font-semibold">{truncant(title)}</h1>
					</div>
				</div>
				<p className="py-2 text-gray-500 text-sm">{brief}</p>
				<div className="flex items-center justify-between">
					<p className="py-2 text-gray-500 text-sm">{`${views} views`}</p>
					<p className="py-2 text-gray-500 text-sm">{date}</p>
				</div>
			</Link>
		</div>
	);
};

export default VideoGridSystem;
