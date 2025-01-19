import { drizzle } from "drizzle-orm/node-postgres";
import { DB_URL } from "@constants";
import { logger } from "utils/lib/logger";

export const db = drizzle(DB_URL);

export const checkConnection = async () => {
	try {
        logger.debug("Connecting to database...");
		await db.execute("SELECT 1");

        logger.info("Connected to database");
		return true;
	} catch (error) {
		logger.error("Error connecting to database", error);
		return false;
	}
};
