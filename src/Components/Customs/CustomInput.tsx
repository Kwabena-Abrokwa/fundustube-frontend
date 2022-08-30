import React from "react";

interface CustomInputProps {
	type: React.HTMLInputTypeAttribute;
	value: string | number | readonly string[] | undefined;
	name: string;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
	id?: string;
	placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
	type,
	value,
	name,
	handleChange,
	disabled,
	id,
	placeholder,
}) => {
	return (
		<>
			<input
				type={type}
				value={value}
				name={name}
				onChange={handleChange}
				disabled={disabled}
				id={id}
				placeholder={placeholder}
				className="w-full border rounded-md border-black h-11 outline-black px-4"
			/>
		</>
	);
};

export default CustomInput;
