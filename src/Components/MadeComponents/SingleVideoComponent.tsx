import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegAngry, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import CustomButton from "../Customs/CustomButton";

const SingleVideoComponent: React.FC = () => {
	const [data, setdata] = useState([]);
	const [likesCount, setLikesCount] = useState(0);
	const [dislikesCount, setDislikesCount] = useState(0);
	const [displayDonate, setdisplayDonate] = useState(false);
	const [loader, setloader] = useState(true);
	const { id } = useParams();
	const user_id = localStorage.getItem("user_id");
	const navigate = useNavigate();

	useEffect(() => {
		setloader(true);
		axios
			.get(`http://localhost:8081/api/video/getStreamingVideos/${id}`)
			.then(({ data }) => {
				setdata(data);
				setloader(false);
				setLikesCount(data[0].likes.length);
				setDislikesCount(data[0].dislikes.length);
				document.title = data.map((item: any) => item.title);
			});

		return () => {};
	}, [id]);

	const handleLike = (id: string) => {
		if (!user_id) {
			navigate("/signup");
			return null;
		}

		axios
			.post(`http://localhost:8081/api/video/dislikeAction/${id}`, {
				user_id: user_id,
			})
			.then(({ data }) => {
				setLikesCount(data);
			});
	};

	const handleDislike = (id: string) => {
		if (!user_id) {
			navigate("/signup");
			return null;
		}

		axios
			.post(`http://localhost:8081/api/video/likeAction/${id}`, {
				user_id: user_id,
			})
			.then(({ data }) => {
				setDislikesCount(data);
			});
	};

	const handleDonateOpen = () => {
		if (!user_id) {
			navigate("/signup");
			return null;
		}
		setdisplayDonate(true);
	};

	const handleDonateClose = () => {
		if (!user_id) {
			navigate("/signup");
			return null;
		}
		setdisplayDonate(false);
	};

	const handleSubcribe = () => {
		if (!user_id) {
			navigate("/signup");
			return null;
		}
	};

	const handleUnsubcribe = () => {
		if (!user_id) {
			navigate("/signup");
			return null;
		}
	};

	const trancant = (str: string | null) => {
		if (str && str.length > 160) {
			return str.slice(0, 160) + "...";
		} else {
			return str;
		}
	};

	return (
		<div className="w-4/5">
			{displayDonate ? (
				<div className="fixed w-screen h-screen bg-[#00000070] top-0 left-0 z-50">
					{" "}
					<div
						className="bg-white p-20 w-3/6 mx-auto mt-40 h-96"
						onClick={handleDonateClose}
					>
						Close
					</div>
				</div>
			) : null}
			{data &&
				data.map((item: any) => (
					<div className="w-11/12 mx-auto">
						{loader ? (
							<>
								<div>Please wait</div>
							</>
						) : (
							<video className={"h-[35em] w-full"} controls autoPlay>
								<source
									src={`http://localhost:8081/api/video/stream/${item.video_id}`}
									type="video/mp4"
								/>
							</video>
						)}
						<div
							className="flex justify-between items-end pt-3"
							itemType=""
						>
							<div>
								<div className="">
									<h1 className="text-xl py-2 font-bold">
										{item.title}
									</h1>
								</div>
								<p className="pt-2 text-justify text-gray-500">
									{item.views.length} views - {item.created_at}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="flex justify-between items-center cursor-pointer mx-4"
									onClick={() => handleLike(item.video_id)}
								>
									<p className="mx-2">{likesCount}</p>
									<FaRegHeart size={24} color={"black"} />
									<p className="mx-1">Like</p>
								</button>
								<button
									className="flex justify-between items-center cursor-pointer mx-4"
									onClick={() => handleDislike(item.video_id)}
								>
									<p className="mx-2">{dislikesCount}</p>
									<FaRegAngry size={24} color={"black"} />
									<p className="mx-1">Dislike</p>
								</button>
								<button className="flex justify-between items-center cursor-pointer mx-4">
									<FaRegShareSquare size={24} color={"black"} />
									<p className="ml-2">Share</p>
								</button>
							</div>
						</div>

						<div className="w-full border mt-5" />
						<div className="flex w-full border p-1 border-black rounded-md mt-5 bg-white">
							<div
								className="p-2 border bg-yellow-500 rounded-md"
								style={{
									width: item.donation_reached * 100,
								}}
							>
								<p className="text-center overflow-hidden">
									Donated GHS {item.donation_reached.toFixed(2)} -{" "}
									{(
										(item.donation_reached / item.donation_target) *
										100
									).toFixed(2)}
									%
								</p>
							</div>
							<div
								className="bg-white p-2"
								style={{
									width:
										(item.donation_target - item.donation_reached) *
										100,
								}}
							>
								<p className="text-center overflow-hidden">
									Remaining GHS{" "}
									{(
										item.donation_target - item.donation_reached
									).toFixed(2)}{" "}
									{(
										(item.donation_reached / item.donation_target) *
											100 -
										100
									).toFixed(2)}
									%
								</p>
							</div>
						</div>

						<div className="w-full border mt-5" />
						<div className="flex justify-between items-start pt-10">
							<div>
								<div className="flex items-center">
									<img
										src={`../${item.img}`}
										alt="image1"
										className="h-10 w-10 rounded-full"
									/>
									<div className="pl-2">
										<h1 className="text-md font-semibold">
											{item.owner}
										</h1>
										<p className="text-sm">
											{item.subscription.length} Subscribed
										</p>
									</div>
								</div>
								<p className="pt-10 text-justify text-gray-500 pb-6">
									{trancant(item.content)}
								</p>
							</div>
							<div className="flex justify-between items-center ">
								<button
									className="bg-yellow-500 w-40 py-2 mr-4 font-semibold"
									onClick={handleDonateOpen}
								>
									Donate
								</button>
								<button
									className="bg-red-700 w-40 py-2 text-white font-semibold"
									onClick={
										item.subscription.includes(user_id && user_id)
											? handleSubcribe
											: handleUnsubcribe
									}
								>
									{item.subscription.includes(user_id && user_id)
										? "Unsubscribe"
										: "Subscribe"}
								</button>
							</div>
						</div>
						<div className="w-full pb-6">
							<h1 className="text-2xl pb-4">Write a comment here</h1>
							<textarea
								className="w-full border border-black rounded-md p-2"
								rows={5}
							/>
							<div className="flex justify-between items-center">
								<div className="w-4/5 flex items-center">
									<img
										src={require("../../Assets/Images/img1.jpg")}
										alt={"Profile"}
										className="w-10 h-10 rounded-full"
									/>
									<p className="pl-3">
										Comment as {user_id}
									</p>
								</div>
								<div className="w-1/5">
									<CustomButton>Comment</CustomButton>
								</div>
							</div>
						</div>

						<div>
							<h1 className="text-2xl underline pb-4">Comments</h1>
							{item.comments.map((comment: any) => (
								<div className="py-3">
									<div className="flex items-start">
										<img
											src={`../${comment.user_profile}`}
											alt={"Profile"}
											className="w-10 h-10 rounded-full"
										/>
										<div className="pl-3">
											<p className="text-lg font-semibold">
												{comment.username}
											</p>
											<p className="text-sm text-gray-600">
												{comment.comment}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
		</div>
	);
};

export default SingleVideoComponent;
