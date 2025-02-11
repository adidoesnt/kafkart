// Node
export const NODE_ENV = process.env.NODE_ENV ?? "dev";

// Server
export const { PORT = 3000 } = process.env;

// Database
export const { DEFAULT_USER_PASSWORD } = process.env;

// CORS
export const { FRONTEND_URL = "http://localhost:5173" } = process.env;

// Solace
export const {
	SOLACE_HOST = "ws://localhost:8008",
	SOLACE_VPN_NAME = "default",
	SOLACE_USERNAME = "backend_user",
	SOLACE_PASSWORD = "password",
	SOLACE_TOPIC = "product/views",
} = process.env;

export const SOLACE_REQUEST_TIMEOUT = Number(
	process.env.SOLACE_REQUEST_TIMEOUT ?? "10000",
);
