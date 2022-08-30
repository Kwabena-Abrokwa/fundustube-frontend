import React from "react";
import DashboardLayout from "../../Components/LayoutComponent/DashboardLayout";
import img1 from "../../Assets/Images/img1.jpg";
import img2 from "../../Assets/Images/img2.jpg";
import VideoGridSystem from "../../Components/MadeComponents/VideoGridSystem";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
	return (
		<DashboardLayout>
			<section className="w-11/12 mx-auto pt-4 -z-10">
				<div className="lg:grid lg:grid-cols-12 gap-3">
					<VideoGridSystem img={img1} />
					<VideoGridSystem img={img2} />
					<VideoGridSystem img={img2} />
					<VideoGridSystem img={img1} />
					<VideoGridSystem img={img2} />
					<VideoGridSystem img={img1} />
					<VideoGridSystem img={img2} />
					<VideoGridSystem img={img1} />
					<VideoGridSystem img={img2} />
					<VideoGridSystem img={img1} />
					<VideoGridSystem img={img2} />
					<VideoGridSystem img={img1} />
				</div>
			</section>
		</DashboardLayout>
	);
};

export default HomePage;
