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

export const login = async (username: string, password: string) => {
	try {
		const user = await userRepository.getUserByUsername(username);

		if (!user) {
			throw new CustomError("User not found", Status.UNAUTHORIZED);
		}

		const isValidPassword = await Bun.password.verify(
			password,
			user.passwordHash,
		);

		if (!isValidPassword)
			throw new CustomError("Invalid credentials", Status.UNAUTHORIZED);

		return user;
	} catch (error) {
		logger.error("Error logging in user", error);

		throw new CustomError(
			"Error logging in user",
			Status.INTERNAL_SERVER_ERROR,
		);
	}
};
