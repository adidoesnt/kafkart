import { CustomError, Status } from "utils/lib/types";
import { CreateUserRequestBodySchema, LoginUserRequestBodySchema } from "@defs/user";
import { userService } from "components/services";
import Elysia from "elysia";

export const userPlugin = () =>
	new Elysia({
		prefix: "/user",
	}).post(
		"/",
		async ({ body, set, error }) => {
			try {
				const user = await userService.signup(body);

				set.status = Status.CREATED;
				return user;
			} catch (e) {
				return error(
					(e as CustomError).status as number,
					(e as CustomError).message,
				);
			}
		},
		{
			body: CreateUserRequestBodySchema,
		},
	).post("/login", async ({ body, set, error }) => {
		try {
			const user = await userService.login(body.username, body.password);

			set.status = Status.OK;
			return user;
		} catch (e) {
			return error(
				(e as CustomError).status as number,
				(e as CustomError).message,
			);
		}
	}, {
		body: LoginUserRequestBodySchema,
	});
