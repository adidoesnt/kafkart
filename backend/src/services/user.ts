import { mockDb } from "@/utils/mockDb";
import { Status, type CustomError } from "@/utils/types";

export const login = async (username: string, password: string) => {
    const user = mockDb.users.find(user => user.username === username);

    if (!user) {
        const error: CustomError = new Error("User not found");
        error.status = Status.NOT_FOUND;
        throw error;
    }

    if (user.password !== password) {
        const error: CustomError = new Error("Invalid credentials");
        error.status = Status.UNAUTHORIZED;
        throw error;
    }

    return user;
};