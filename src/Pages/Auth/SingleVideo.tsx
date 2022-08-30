import React from "react";
import SingleVideoLayout from "../../Components/LayoutComponent/SingleVideoLayout";
import img1 from "../../Assets/Images/img1.jpg";
import VideoGridSystem from "../../Components/MadeComponents/VideoGridSystem";
import { FaRegHeart } from "react-icons/fa";

interface SingleVideoProps {}

const SingleVideo: React.FC<SingleVideoProps> = () => {
	return (
		<SingleVideoLayout>
			<section className="px-3 -z-10">
				<div className="lg:grid lg:grid-cols-12 gap-3">
					<div className="lg:col-span-9 py-2 w-11/12 mx-auto">
						<img
							src={img1}
							alt={"images1"}
							className={"h-[35em] w-full"}
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
										src={img1}
										alt="image1"
										className="h-8 w-8 rounded-full"
									/>
									<div className="pl-2">
										<h1 className="text-md py-2 font-semibold">
											Inzema Senior High Project
										</h1>
									</div>
								</div>
								<p className="py-6 text-justify text-gray-500 max-w-[40em]">
									Two assure edward whence the was. Who worthy yet ten
									boy denote wonder. Weeks views her sight old tears
									sorry. Additions can suspected its concealed put
									furnished. Met the why particular devonshire
									decisively considered partiality. Certain it waiting
									no entered is. Passed her indeed uneasy shy polite
									appear denied. Oh less girl no walk. At he spot with
									five of view. Knowledge nay estimable questions
									repulsive daughters boy. Solicitude gay way
									unaffected expression for. His mistress ladyship
									required off horrible disposed rejoiced. Unpleasing
									pianoforte unreserved as oh he unpleasant.
								</p>
							</div>
							<div className="flex justify-between items-center text-white">
								<button className="bg-blue-600 w-32 py-2 mr-4">
									Donate
								</button>
								<button className="bg-red-700 w-32 py-2">
									Subscribe
								</button>
							</div>
						</div>
					</div>
					<div className="lg:col-span-3 cursor-pointer py-2">
						<VideoGridSystem img={img1} />
						<VideoGridSystem img={img1} />
						<VideoGridSystem img={img1} />
						<VideoGridSystem img={img1} />
					</div>
				</div>
			</section>
		</SingleVideoLayout>
	);
};

export default SingleVideo;
