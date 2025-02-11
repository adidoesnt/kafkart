import Home from "@/App";
import { useAuth } from "@/context/auth";
import Login from "@/Login";
import { BrowserRouter, Route, Routes } from "react-router";

const AuthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

const UnauthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	);
};

export const Router = () => {
	const { user } = useAuth();

	return (
		<BrowserRouter>
			{user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
		</BrowserRouter>
	);
};
