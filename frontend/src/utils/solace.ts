import {
	Session,
	SessionProperties,
	SolclientFactory,
	SessionEventCode,
} from "solclientjs";
import {
	SOLACE_HOST,
	SOLACE_PASSWORD,
	SOLACE_USERNAME,
	SOLACE_VPN_NAME,
} from "@/utils/constants";

let session: Session | null = null;

export const connectToSolace = (): Promise<Session> => {
	return new Promise((resolve, reject) => {
		if (session) resolve(session);

		const sessionProps: SessionProperties = {
			url: SOLACE_HOST,
			userName: SOLACE_USERNAME,
			password: SOLACE_PASSWORD,
			vpnName: SOLACE_VPN_NAME,
		};

		session = SolclientFactory.init().createSession(sessionProps);

		session.on(SessionEventCode.UP_NOTICE, () => {
			console.log("Connected to Solace!");
			resolve(session!);
		});

		session.on(SessionEventCode.CONNECT_FAILED_ERROR, (err) => {
			console.error("Failed to connect to Solace.");
			reject(err);
		});

		session.connect();
	});
};

export const publishProductView = async (userId: number, productId: number) => {
	try {
        const session = await connectToSolace();

		const message = SolclientFactory.createMessage();
		const body = { userId, productId, timestamp: Date.now() };

		message.setDestination(
			SolclientFactory.createTopicDestination("product/views"),
		);
		message.setBinaryAttachment(JSON.stringify(body));

		session.send(message);
		console.log("Product view published successfully.", body);
	} catch (error) {
		console.error("Error publishing product view:", error);
	}
};
