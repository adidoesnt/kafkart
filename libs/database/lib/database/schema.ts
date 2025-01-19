import { integer, pgTable, varchar, boolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	username: varchar({ length: 255 }).notNull().unique(),
	passwordHash: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	isAdmin: boolean().notNull().default(false),
});
