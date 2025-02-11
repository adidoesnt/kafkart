import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
	productId: { type: Number, required: true },
	views: { type: Number, default: 0 },
});

export const Product = mongoose.model("ProductView", ProductSchema);

export const UserProductViewSchema = new mongoose.Schema({
	userId: { type: Number, required: true },
	productViews: [
		{
			productId: { type: Number, required: true },
			timestamp: { type: Date, default: Date.now },
		},
	],
});

export const UserProductView = mongoose.model(
	"UserProductView",
	UserProductViewSchema,
);
