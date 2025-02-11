import Home from "@/pages/Home";
import { useAuth } from "@/context/auth";
import Login from "@/pages/Login";
import { BrowserRouter, Route, Routes,  } from "react-router";
import Products from "@/pages/Products";
import NotFound from "@/pages/NotFound";

const AuthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

const UnauthenticatedRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export const Router = () => {
	const { isAuthenticated } = useAuth();

	return (
		<BrowserRouter>
			{isAuthenticated ? (
				<AuthenticatedRoutes />
			) : (
				<UnauthenticatedRoutes />
			)}
		</BrowserRouter>
	);
};
