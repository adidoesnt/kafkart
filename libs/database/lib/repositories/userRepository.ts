import { db } from "@database/database";
import { usersTable } from "@database/schema";
import { eq } from "drizzle-orm";
import type { UserCreateAttributes } from "types/user";
import { logger } from "utils/lib/logger";

export const createUser = async (attributes: UserCreateAttributes) => {
	try {
		logger.debug("Creating user", { attributes });

		const users = await db
			.insert(usersTable)
			.values(attributes)
			.returning();
		const user = users?.shift();
		logger.info("User created", { user });

		return user;
	} catch (error) {
		logger.error("Error creating user", error);
		return null;
	}
};

export const getUserByUsername = async (username: string) => {
	try {
		const user = await db
			.selectDistinct()
			.from(usersTable)
			.where(eq(usersTable.username, username));

		logger.info("User fetched", { user });

		return user;
	} catch (error) {
		logger.error("Error fetching user", error);
		return null;
	}
};
