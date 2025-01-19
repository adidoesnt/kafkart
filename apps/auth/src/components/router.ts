import Elysia from "elysia";
import { swagger } from "@elysiajs/swagger";
import { userPlugin, healthPlugin } from "./plugins";

export const router = new Elysia({
	prefix: "/api",
})
	.use(healthPlugin())
	.use(swagger())
	.use(userPlugin());
