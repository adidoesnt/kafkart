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
	const { isAuthenticated } = useAuth();

	return (
		<BrowserRouter>
			{isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
		</BrowserRouter>
	);
};
