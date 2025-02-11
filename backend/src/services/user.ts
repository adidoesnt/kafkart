import { mockDb } from "@/utils/mockDb";
import { UserProductView } from "@/utils/mongodb/schema";
import { Status, type CustomError } from "@/utils/types";

export const login = async (username: string, password: string) => {
	const user = mockDb.users.find((user) => user.username === username);

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

export const addProductView = async (userId: number, productId: number) => {
	try {
		const user = await UserProductView.findOne({ userId });

		if (!user) {
			await UserProductView.create({
				userId,
				productViews: [
					{
						productId,
						timestamp: Date.now(),
					},
				],
			});
			return;
		}

		await UserProductView.findOneAndUpdate(
			{
				userId,
			},
			{
				$push: {
					productViews: {
						productId,
						timestamp: Date.now(),
					},
				},
			},
		);
	} catch (error) {
		console.error("Error adding product view:", error);
	}
};

export const getRecentProductViews = async (userId: number) => {
	try {
		const user = await UserProductView.findOne({ userId });

		if (!user) {
			return [];
		}

		return user.productViews
			.sort((a, b) => {
				const timestampA = Number(a.timestamp);
				const timestampB = Number(b.timestamp);
				return timestampB - timestampA;
			})
			.map((view) =>
				mockDb.products.find((p) => p.id === view.productId),
			).slice(0, 3);
	} catch (error) {
		console.error("Error getting recent product views:", error);
		return [];
	}
};
