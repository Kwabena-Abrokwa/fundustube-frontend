import React from "react";

interface CustomSelectProps {
	value: string | number | readonly string[] | undefined;
	selectName?: string;
	handleChange?: React.ChangeEventHandler<HTMLSelectElement>;
	disabled?: boolean;
	id?: string;
	children: any;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	value,
	selectName,
	handleChange,
	disabled,
	id,
	children,
}) => {
	return (
		<select
			value={value}
			name={selectName}
			onChange={handleChange}
			disabled={disabled}
			id={id}
			className="w-full border rounded-md border-black h-11 outline-black px-4"
		>
			{children}
		</select>
	);
};

export default CustomSelect;
