import React from "react";
import { Link } from "react-router-dom";

interface TableComponentProps {}

const TableComponent: React.FC<TableComponentProps> = () => {
	return (
		<>
			<tr className="hover:bg-gray-100 dark:hover:bg-gray-200">
				<td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap">
					<Link to={`/employee-profile/`}></Link>
				</td>
				<td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap ">
					<Link to={`/employee-profile/`}>
						<img
							src={`../../../../server/uploads/`}
							alt="Employee Profile"
							className="w-16 h-16 rounded-full"
						/>
					</Link>
				</td>
				<td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap">
					<Link to={`/employee-profile/`}>{}</Link>
				</td>
				<td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap">
					<Link to={`/employee-profile/`}>{}</Link>
				</td>
				<td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap">
					<Link to={`/employee-profile/`}>{}</Link>
				</td>
				<td className="py-4 px-6 text-sm font-medium text-black whitespace-nowrap">
					<Link to={`/employee-profile/`}>{}</Link>
				</td>
			</tr>
		</>
	);
};

export default TableComponent;
