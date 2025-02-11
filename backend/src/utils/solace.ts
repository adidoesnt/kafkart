import { Session, SessionEventCode, SolclientFactory } from "solclientjs";
import {
	SOLACE_HOST,
	SOLACE_PASSWORD,
	SOLACE_USERNAME,
	SOLACE_VPN_NAME,
	SOLACE_REQUEST_TIMEOUT,
	SOLACE_TOPIC,
} from "./constants";
import { logger } from "./logger";
import { productService, userService } from "@/services";

let session: Session | null = null;

export const connectToSolace = () => {
	return new Promise((resolve, reject) => {
		if (session) resolve(session);

		const sessionProps = {
			url: SOLACE_HOST,
			userName: SOLACE_USERNAME,
			password: SOLACE_PASSWORD,
			vpnName: SOLACE_VPN_NAME,
		};

		session = SolclientFactory.init().createSession(sessionProps);

		session.on(SessionEventCode.UP_NOTICE, () => {
			logger.info("Connected to Solace!");

			const topic = SolclientFactory.createTopicDestination(SOLACE_TOPIC);

			session!.subscribe(
				topic,
				true,
				"product-view-subscription",
				SOLACE_REQUEST_TIMEOUT,
			);

			resolve(session);
		});

		session.on(SessionEventCode.MESSAGE, async (message) => {
			const data = message.getBinaryAttachment();
			const parsedData = JSON.parse(data as string);

			logger.info("Received product view:", { data: parsedData });

			await productService.addProductView(parsedData.productId);
			await userService.addProductView(
				parsedData.userId,
				parsedData.productId,
			);
		});

		session.on(SessionEventCode.CONNECT_FAILED_ERROR, (err) => {
			console.error("Failed to connect to Solace.");
			reject(err);
		});

		session.connect();
	});
};
