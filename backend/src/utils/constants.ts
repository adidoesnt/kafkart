// Node
export const NODE_ENV = process.env.NODE_ENV ?? "dev";

// Server
export const { PORT = 3000 } = process.env;

// Database
export const { DEFAULT_USER_PASSWORD } = process.env;

// CORS
export const { FRONTEND_URL = "http://localhost:5173" } = process.env;
