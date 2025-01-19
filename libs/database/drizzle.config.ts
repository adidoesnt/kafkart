import { defineConfig } from "drizzle-kit";
import { DB_URL } from "@constants";

export default defineConfig({
	out: "./drizzle",
	schema: "./lib/database/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: DB_URL,
	},
});
