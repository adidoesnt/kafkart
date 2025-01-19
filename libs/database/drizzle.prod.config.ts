import { defineConfig } from "drizzle-kit";
import { DB_URL } from "@constants";

export default defineConfig({
	out: "./drizzle/migrations/prod",
	schema: "./lib/database/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: DB_URL,
	},
});
