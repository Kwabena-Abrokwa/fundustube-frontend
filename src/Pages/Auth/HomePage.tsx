import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import VideoGridSystem from "../../Components/MadeComponents/VideoGridSystem";
import axios from "axios";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	const [data, setdata] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8081/api/video/getAllVideos")
			.then(({ data }) => {
				console.log(data);
				document.title="Fund Us Vibes"
				setdata(data);
			});

		return () => {};
	}, []);

	return (
		<DashboardLayout>
			<section className="w-11/12 mx-auto py-8 -z-10">
				<div className="lg:grid lg:grid-cols-12 gap-1">
					{data &&
						data.map((item: any) => (
							<VideoGridSystem
								img={item.img}
								id={item.video_id}
								title={item.title}
								brief={item.brief}
								views={item.views.length}
								date={item.created_at}
								route={"video"}
							/>
						))}
				</div>
			</section>
		</DashboardLayout>
	);
};

export default HomePage;
