import React, { useEffect, useState } from "react";
import SingleVideoLayout from "../../Components/LayoutComponent/SingleVideoLayout";
import VideoGridSystem from "../../Components/MadeComponents/VideoGridSystem";
import { useParams } from "react-router-dom";
import SingleVideoComponent from "../../Components/MadeComponents/SingleVideoComponent";
import axios from "axios";

interface SingleVideoProps {}

const SingleVideo: React.FC<SingleVideoProps> = () => {
	const { id } = useParams();
	const [data, setdata] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8081/api/video/getAllVideos")
			.then(({ data }) => {
				console.log(data);

				setdata(data);
			});

		return () => {};
	}, [id]);

	return (
		<SingleVideoLayout>
			<section className="px-3 -z-10 w-full overflow-y-scroll pb-80">
				<div className="lg:flex w-full">
					<SingleVideoComponent />
					<div className="lg:w-1/5 cursor-pointer py-2">
						<h1 className="text-xl font-bold px-2 py-3">
							Related Videos
							{data &&
								data.map((item: any) => (
									<VideoGridSystem
										img={`../${item.img}`}
										id={item.video_id}
										title={item.title}
										brief={item.brief}
										views={item.views.length}
										date={item.created_at}
									/>
								))}
						</h1>
					</div>
				</div>
			</section>
		</SingleVideoLayout>
	);
};

export default SingleVideo;
