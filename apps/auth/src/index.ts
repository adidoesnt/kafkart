import { Elysia } from "elysia";
import { CustomError, Status } from "utils/lib/types";
import { PORT } from "@constants";
import { logger } from "utils/lib/logger";
import { checkConnection } from "database/lib/database";
import { router } from "components/router";

const app = new Elysia().use(router).listen(PORT);

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
