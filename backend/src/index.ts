import express from "express";
import { json } from "body-parser";
import { logger } from "@/utils/logger"
import { PORT } from "@/utils/constants";
import healthRouter from "./routes/health";

const app = express();

app.use(json());
app.use(healthRouter);

app.listen(PORT, () => {
	logger.info(`Server running on port ${PORT}`);
});
