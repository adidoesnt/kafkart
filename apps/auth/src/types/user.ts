import { t } from "elysia";

export const CreateUserRequestBodySchema = t.Object({
	username: t.String(),
	password: t.String(),
	email: t.String(),
});

export type CreateUserSchema = {
	username: string;
	password: string;
	email: string;
};
