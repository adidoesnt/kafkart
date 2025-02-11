import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { logger } from "@/utils/logger";
import { FRONTEND_URL, PORT } from "@/utils/constants";
import { healthRouter, userRouter, productRouter } from "./routes";
import { connectToSolace } from "./utils/solace";

await connectToSolace();

const app = express();

app.use(json());
app.use(
	cors({
		origin: [FRONTEND_URL],
	}),
);
app.use(healthRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
	logger.info(`Server running on port ${PORT}`);
});
