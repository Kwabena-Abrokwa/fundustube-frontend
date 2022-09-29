import React, { useState, useEffect } from "react";
import CustomButton from "../../Components/Customs/CustomButton";
import CustomInput from "../../Components/Customs/CustomInput";
import { Link } from "react-router-dom";
import axios from "axios";

import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import CustomSelect from "../../Components/Customs/CustomSelect";
import VideoGridSystem from "../../Components/MadeComponents/VideoGridSystem";

interface ChannelPageProps {}

const ChannelPage: React.FC<ChannelPageProps> = ({}) => {
	const number = 2;
	const [data, setdata] = useState({
		email: "",
		username: "",
		password: "",
	});
	const [confirmPassword, setconfirmPassword] = useState("");

	const [loader, setloader] = useState<Boolean>(false);
	const [message, setmessage] = useState<string>("");
	const [color, setcolor] = useState("red");
	const [displayAddVideo, setdisplayAddVideo] = useState(false);
	const [project, setproject] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8081/api/video/getAllVideos")
			.then(({ data }) => {
				console.log(data);
				document.title = "Fund Us Vibes";
				setproject(data);
			});

		return () => {};
	}, []);

	const handleChange = (event: any): void => {
		setdata({
			...data,
			[event.target.name]: event.target.value,
		});
	};

	const handleSignUp = async (e: any) => {
		e.preventDefault();
		setloader(true);
		if (data.username === "" || data.password === "") {
			setloader(false);
			setmessage("All fields are required");
			return null;
		}
		if (data.password !== confirmPassword) {
			setloader(false);
			setmessage("Password does not match");
			return null;
		}
		await axios
			.post(`/create-account`, data)
			.then(({ data }) => {
				if (data.status) {
					setloader(false);
					localStorage.setItem("user_id", data.data.user_id);
					localStorage.setItem("username", data.data.username);
					localStorage.setItem("email", data.data.email);
					localStorage.setItem("profile", data.data.profile);
					localStorage.setItem("token", data.data.token);
					window.history.back();
				} else {
					setmessage(data.message);
					setcolor("red");
					setloader(false);
				}
			})
			.catch((err) => {
				console.log(err);
				setloader(false);
				setmessage(err.response.data.message);
				setcolor("red");
			});
	};

	return (
		<DashboardLayout>
			<>
				{displayAddVideo ? (
					<div className="fixed w-screen h-screen bg-[#00000070] top-0 left-0 z-50">
						{" "}
						<div className="bg-white w-2/6 mx-auto mt-36 overflow-scroll h-[480px]">
							<div
								className="  "
								onClick={() => setdisplayAddVideo(false)}
							>
								<h1>Close</h1>
							</div>

							<div className="w-full p-2 my-5">
								<form className="w-11/12  mx-auto ">
									<div className="my-8">
										<label className="text-md font-semibold">
											Project Title
										</label>
										<CustomInput
											type={"email"}
											value={""}
											name={"email"}
											handleChange={() => {}}
											placeholder={"Example: kwabena@gmail.com"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Brief on project
										</label>
										<CustomInput
											type={"text"}
											value={""}
											name={"username"}
											handleChange={() => {}}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Project Category
										</label>
										<CustomSelect value={""}>
											<option value="Environment Project">
												Environment Project
											</option>
											<option value="School Project">
												School Project
											</option>
										</CustomSelect>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Project Description
										</label>
										<CustomInput
											type={"text"}
											value={""}
											name={"username"}
											handleChange={() => {}}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Donation Target Amount
										</label>
										<CustomInput
											type={"number"}
											value={""}
											name={"username"}
											handleChange={() => {}}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Video Cover
										</label>
										<CustomInput
											type={"file"}
											value={""}
											name={"username"}
											handleChange={() => {}}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Upload Video Here
										</label>
										<CustomInput
											type={"file"}
											value={""}
											name={"username"}
											handleChange={() => {}}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									{message && (
										<div
											className="text-center p-4 my-8 rounded-lg w-full"
											style={{ backgroundColor: color }}
										>
											<p className="text-white">{message}</p>
										</div>
									)}
									<CustomButton>
										{loader ? "Please wait..." : "Add project"}
									</CustomButton>
								</form>
							</div>
						</div>
					</div>
				) : null}

				{number < 1 ? (
					<section>
						<div className="lg:w-3/6 mx-auto mt-1">
							<div className="logo w-20 mx-auto"></div>
							<div className="title text-center py-6">
								<h3 className="text-xl font-medium">
									Request for a channel with FundUsTube
								</h3>
							</div>
							<div className="w-full p-2 my-5">
								<form
									className="w-11/12 lg:w-5/6 mx-auto"
									onSubmit={handleSignUp}
								>
									<div className="my-8">
										<label className="text-md font-semibold">
											Channel Name
										</label>
										<CustomInput
											type={"text"}
											value={data.email}
											name={"email"}
											handleChange={handleChange}
											placeholder={"Example: kwabena@gmail.com"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Owner Name
										</label>
										<CustomInput
											type={"text"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Owner Identification
										</label>
										<CustomInput
											type={"file"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Owner Address
										</label>
										<CustomInput
											type={"username"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Owner Proof of Address
										</label>
										<CustomInput
											type={"file"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Organization Name
										</label>
										<CustomInput
											type={"text"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Business Certificate
										</label>
										<CustomInput
											type={"file"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Business Form 3
										</label>
										<CustomInput
											type={"file"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Business Location
										</label>
										<CustomInput
											type={"text"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Business Account Type
										</label>
										<CustomSelect
											value={data.username}
											handleChange={handleChange}
										>
											<>
												<option value="Mobile Money">
													Mobile Money
												</option>
												<option value="Bank Account">
													Bank Account
												</option>
											</>
										</CustomSelect>
									</div>
									<div className="my-8">
										<label className="text-md font-semibold">
											Business Account Number
										</label>
										<CustomInput
											type={"text"}
											value={data.username}
											name={"username"}
											handleChange={handleChange}
											placeholder={"Example: kwabena__"}
										/>
									</div>
									{message && (
										<div
											className="text-center p-4 my-8 rounded-lg w-full"
											style={{ backgroundColor: color }}
										>
											<p className="text-white">{message}</p>
										</div>
									)}
									<CustomButton>
										{loader ? "Please wait..." : "Submit request"}
									</CustomButton>
								</form>
							</div>
						</div>
					</section>
				) : (
					<div className="w-11/12 mx-auto">
						<div className="flex justify-between items-center">
							<div className="w-48">
								<CustomButton onclick={() => setdisplayAddVideo(true)}>
									Create a new project
								</CustomButton>
							</div>
							<div>Ghs 200.00</div>
						</div>
						<div>
							<h3 className="text-3xl py-6">Your projects</h3>
							<div className="lg:grid lg:grid-cols-12 gap-1">
								{project &&
									project.map((item: any) => (
										<VideoGridSystem
											img={item.img}
											id={item.video_id}
											title={item.title}
											brief={item.brief}
											views={item.views.length}
											date={item.created_at}
											route={"analytics"}
										/>
									))}
							</div>
						</div>
					</div>
				)}
			</>
		</DashboardLayout>
	);
};

export default ChannelPage;
