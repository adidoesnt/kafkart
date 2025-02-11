import { productService } from "@/services";
import { Status } from "@/utils/types";
import { Router } from "express";

const productRouter = Router();

productRouter.get("/featured", async (req, res) => {
	// TODO: Implement featured products logic
	return res.status(Status.OK).json([]);
});

productRouter.get("/", async (req, res) => {
	try {
        const products = await productService.getProducts();
        return res.status(Status.OK).json(products);
	} catch (e) {
		return res.status(Status.INTERNAL_SERVER_ERROR).send(e);
	}
});

export default productRouter;
