import { integer, pgTable, varchar, boolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	username: varchar({ length: 255 }).notNull().unique(),
	passwordHash: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	isAdmin: boolean().notNull().default(false),
});

export const productsTable = pgTable("products", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	description: varchar({ length: 255 }).notNull(),
	price: integer().notNull(),
	imageUrl: varchar({ length: 255 }).notNull(),
    stock: integer().notNull().default(0),
});

export const ordersTable = pgTable("orders", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	userId: integer().notNull(),
	productId: integer().notNull(),
	quantity: integer().notNull(),
	totalPrice: integer().notNull(),
});
