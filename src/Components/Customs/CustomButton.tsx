import React from "react";

interface CustomButtonProps {
	children: string;
	onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onclick }) => {
	return (
		<button
			type="submit"
			onClick={onclick}
			className="bg-black w-full h-12 text-center text-white rounded-md my-5"
		>
			{children}
		</button>
	);
};

export default CustomButton;
