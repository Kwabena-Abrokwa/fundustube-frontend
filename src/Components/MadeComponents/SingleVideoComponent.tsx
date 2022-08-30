import React from "react";
import { FaRegHeart } from "react-icons/fa";

interface SingleVideoComponentProps {
	image1: string;
	image2: string;
	id: string | undefined;
}

const SingleVideoComponent: React.FC<SingleVideoComponentProps> = ({
	image1,
    image2,
	id,
}) => {
	return (
		<div className="lg:col-span-9 py-2 w-11/12 mx-auto">
			<img
				src={id === "1" ? image1 : image2}
				alt={"images1"}
				className={"h-[32em] w-full"}
			/>
			<div className="flex justify-between items-end pt-3">
				<div>
					<div className="">
						<h1 className="text-xl py-2 font-bold">
							Help me fund Inzema Senior High School
						</h1>
					</div>
					<p className="pt-2 text-justify text-gray-500">
						9,400 views - 29th August, 2020
					</p>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex justify-between items-center cursor-pointer mx-4">
						<FaRegHeart size={24} color={"black"} />
						<p className="mx-2">Like</p>
					</div>
					<div className="flex justify-between items-center cursor-pointer mx-4">
						<FaRegHeart size={24} color={"black"} />
						<p className="mx-2">Like</p>
					</div>
					<div className="flex justify-between items-center cursor-pointer mx-4">
						<FaRegHeart size={24} color={"black"} />
						<p className="ml-2">Like</p>
					</div>
				</div>
			</div>
			<div className="w-full border mt-10" />

			<div className="flex justify-between items-start pt-10">
				<div>
					<div className="flex items-center">
						<img
							src={image1}
							alt="image1"
							className="h-8 w-8 rounded-full"
						/>
						<div className="pl-2">
							<h1 className="text-md py-2 font-semibold">
								Inzema Senior High Project
							</h1>
						</div>
					</div>
					<p className="py-6 text-justify text-gray-500 max-w-[38em]">
						Two assure edward whence the was. Who worthy yet ten boy
						denote wonder. Weeks views her sight old tears sorry.
						Additions can suspected its concealed put furnished. Met the
						why particular devonshire decisively considered partiality.
						Certain it waiting no entered is. Passed her indeed uneasy shy
						polite appear denied. Oh less girl no walk. At he spot with
						five of view. Knowledge nay estimable questions repulsive
						daughters boy. Solicitude gay way unaffected expression for.
						His mistress ladyship required off horrible disposed rejoiced.
						Unpleasing pianoforte unreserved as oh he unpleasant.
					</p>
				</div>
				<div className="flex justify-between items-center ">
					<button className="bg-yellow-500 w-40 py-2 mr-4 font-semibold">Donate</button>
					<button className="bg-red-700 w-40 py-2 text-white font-semibold">Subscribe</button>
				</div>
			</div>
		</div>
	);
};

export default SingleVideoComponent;
