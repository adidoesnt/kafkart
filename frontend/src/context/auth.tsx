/* eslint-disable react-refresh/only-export-components */
import { userApiClient } from "@/utils/apiClient";
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

type User = {
	id: number;
	username: string;
	email: string;
	profileImageUrl: string;
	admin: boolean;
};

type AuthContextType = {
	user: User | null;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
	isAuthenticated: boolean;
	isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const isAuthenticated = useMemo(() => !!user, [user]);
	const isAdmin = useMemo(() => user?.admin ?? false, [user]);

	const login = useCallback(
		async (username: string, password: string) => {
			try {
				const response = await userApiClient.post("/login", {
					username,
					password,
				});
				const fetchedUser = response.data;
				setUser(fetchedUser);
			} catch (error) {
				console.error("Login failed:", error);
			}
		},
		[setUser],
	);

	const logout = useCallback(() => {
		setUser(null);
	}, [setUser]);

	const authContext = {
		user,
		login,
		logout,
		isAuthenticated,
		isAdmin,
	};

	return (
		<AuthContext.Provider value={authContext}>
			{children}
		</AuthContext.Provider>
	);
};
