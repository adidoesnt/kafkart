import { productService } from "@/services";
import { Status } from "@/utils/types";
import { Router } from "express";

const productRouter = Router();

productRouter.get("/featured", async (_req, res) => {
	try {
		const featuredProducts = await productService.getFeaturedProducts();
		return res.status(Status.OK).json(featuredProducts);
	} catch (e) {
		return res.status(Status.INTERNAL_SERVER_ERROR).send(e);
	}
});

productRouter.get("/", async (_req, res) => {
	try {
		const products = await productService.getProducts();
		return res.status(Status.OK).json(products);
	} catch (e) {
		return res.status(Status.INTERNAL_SERVER_ERROR).send(e);
	}
});

export default productRouter;
