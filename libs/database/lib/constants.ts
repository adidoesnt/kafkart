const NODE_ENV = process.env.NODE_ENV ?? "dev";
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_PORT = Number(process.env.DB_PORT ?? 5432);
const DB_USER = process.env.DB_USER ?? "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD ?? "";
const DB_NAME = process.env.DB_NAME ?? "postgres";

export const DB_URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
