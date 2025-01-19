import { Elysia } from "elysia";
import { CustomError } from "types/error";
import { Status } from "@defs/status";
import { PORT } from "@constants";
import { logger } from "utils/lib/logger";
import { checkConnection } from "database/lib/database";

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT);

try {
	const { hostname, port } = app?.server ?? {};

	if (!hostname || !port) {
		throw new CustomError(
			"Unable to start server",
			Status.INTERNAL_SERVER_ERROR,
		);
	}

	const connectedToDb = await checkConnection();
	if (!connectedToDb) {
		throw new CustomError(
			"Unable to connect to database",
			Status.INTERNAL_SERVER_ERROR,
		);
	}

	logger.info(
		`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
	);
} catch (error) {
	logger.error("Error starting server", error);
	process.exit(1);
}
