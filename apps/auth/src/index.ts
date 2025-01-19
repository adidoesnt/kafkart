import { Elysia } from "elysia";
import { CustomError } from "@auth/types/error";
import { Status } from "@auth/types/status";
import { PORT } from "@auth/constants";

const app = new Elysia().get("/", () => "Hello Elysia").listen(PORT);

try {
	const { hostname, port } = app?.server ?? {};

	if (!hostname || !port) {
		throw new CustomError(
			"Unable to start server",
			Status.INTERNAL_SERVER_ERROR,
		);
	}

	console.log(
		`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
	);
} catch (error) {
	console.error(error);
	process.exit(1);
}
