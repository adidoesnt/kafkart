import { userService } from "@/services";
import { CustomError, Status } from "@/utils/types";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body ?? {};

		if (!username || !password) {
			const error: CustomError = new Error(
				"Missing username or password",
			);
			error.status = Status.BAD_REQUEST;
			throw error;
		}

		const user = await userService.login(username, password);
		return res.status(Status.OK).json(user);
	} catch (e) {
		const error = e as CustomError;
		return res
			.status(error.status ?? Status.INTERNAL_SERVER_ERROR)
			.send(error.message ?? "Internal server error");
	}
});

userRouter.get("/recent-product-views", async (req, res) => {
	try {
		const { userId } = req.query;

		if (!userId) {
			const error: CustomError = new Error(
				"Missing userId query parameter",
			);
			error.status = Status.BAD_REQUEST;
			throw error;
		}

		const numericUserId = Number(userId);
		if (isNaN(numericUserId)) {
			const error: CustomError = new Error(
				"Invalid userId query parameter",
			);
			error.status = Status.BAD_REQUEST;
			throw error;
		}

		const productViews =
			await userService.getRecentProductViews(numericUserId);
		return res.status(Status.OK).json(productViews);
	} catch (e) {
		const error = e as CustomError;
		return res
			.status(error.status ?? Status.INTERNAL_SERVER_ERROR)
			.send(error.message ?? "Internal server error");
	}
});

export default userRouter;
