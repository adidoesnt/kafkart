import Elysia from "elysia";

export const healthPlugin = () =>
	new Elysia({
		prefix: "/health",
	}).get("/", () => "OK");
