import type { usersTable } from "@database/schema";

export type UserCreateAttributes = typeof usersTable.$inferInsert;
export type UserFindAttributes = typeof usersTable.$inferSelect;
