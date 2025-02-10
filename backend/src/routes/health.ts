import { Status } from "@/utils/types";
import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (_request, response) => {
	return response.status(Status.OK).send("Backend is healthy!");
});

export default healthRouter;
