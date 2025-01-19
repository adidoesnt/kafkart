import { logger } from "utils/lib/logger";
import { userRepository } from "database/lib/repositories";
import { CustomError, Status } from "utils/lib/types";
import { CreateUserSchema } from "@defs/user";

export const signup = async (attributes: CreateUserSchema) => {
	try {
		const { password, ...rest } = attributes;
		logger.debug("Creating user", { attributes: rest });

		const passwordHash = await Bun.password.hash(password);
		const user = await userRepository.createUser({ passwordHash, ...rest });

		logger.info("User created", { user });
        return user;
	} catch (error) {
		logger.error("Error creating user", error);

		throw new CustomError(
			"Error creating user",
			Status.INTERNAL_SERVER_ERROR,
		);
	}
};
