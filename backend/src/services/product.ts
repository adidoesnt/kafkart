import { mockDb } from "@/utils/mockDb";
import { Product } from "@/utils/mongodb/schema";

export const getProducts = async () => {
	return mockDb.products;
};

export const getFeaturedProducts = async () => {
	try {
        const products = await Product.find().sort({ views: -1 }).limit(3);
        return products;
    } catch (error) {
        console.error("Error fetching featured products:", error);
        return [];
    }
};

export const addProductView = async (productId: number) => {
	try {
		const product = await Product.findOne({ productId });

		if (!product) {
			await Product.create({ productId, views: 1 });
			return;
		}

		await Product.findOneAndUpdate({ productId }, { $inc: { views: 1 } });
	} catch (error) {
		console.error("Error adding product view:", error);
	}
};
