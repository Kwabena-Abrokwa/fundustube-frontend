import React from "react";
import SingleVideoLayout from "../../Components/LayoutComponent/SingleVideoLayout";
import img1 from "../../Assets/Images/img1.jpg";
import img2 from "../../Assets/Images/img2.jpg";
import VideoGridSystem from "../../Components/MadeComponents/VideoGridSystem";
import { useParams } from "react-router-dom";
import SingleVideoComponent from "../../Components/MadeComponents/SingleVideoComponent";

interface SingleVideoProps {}

const SingleVideo: React.FC<SingleVideoProps> = () => {
	const { id } = useParams();

	return (
		<SingleVideoLayout>
			<section className="px-3 -z-10">
				<div className="lg:grid lg:grid-cols-12 gap-3">
					<SingleVideoComponent id={id} image1={img1} image2={img2} />
					<div className="lg:col-span-3 cursor-pointer py-2">
						<h1 className="text-xl font-bold px-2 py-3">Related Videos</h1>
						<VideoGridSystem img={img1} id={1} />
						<VideoGridSystem img={img2} id={2} />
						<VideoGridSystem img={img1} id={1} />
						<VideoGridSystem img={img2} id={2} />
					</div>
				</div>
			</section>
		</SingleVideoLayout>
	);
};

export default SingleVideo;
