import { db } from "@database/database";
import { usersTable } from "@database/schema";
import type { UserCreateAttributes } from "types/user";
import { logger } from "utils/lib/logger";

export const createUser = async (attributes: UserCreateAttributes) => {
	try {
		logger.debug("Creating user", { attributes });

		const users = await db.insert(usersTable).values(attributes).returning();
        const user = users?.shift();
		logger.info("User created", { user });

		return user;
	} catch (error) {
		logger.error("Error creating user", error);
		return null;
	}
};
