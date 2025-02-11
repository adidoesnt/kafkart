import { navigation } from "@/config.json";
import { Link } from "react-router";

export const Header = () => {
	return (
		<div className="flex w-full h-fit justify-between items-center bg-gray-800 p-4 rounded-lg">
			<h1 className="text-2xl font-bold">
				<Link to="/">KafkaRT</Link>
			</h1>
			<div className="flex w-full justify-end items-center gap-8">
				{navigation.map(({ name, path }) => (
					<Link className="hover:text-gray-400" key={name} to={path}>
						{name}
					</Link>
				))}
			</div>
		</div>
	);
};
