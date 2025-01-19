import chalk from "chalk";
import { NODE_ENV } from "../constants";

enum LogLevel {
	INFO = "INFO",
	DEBUG = "DEBUG",
	WARN = "WARN",
	ERROR = "ERROR",
}

const colourMap = {
	[LogLevel.INFO]: chalk.blue,
	[LogLevel.DEBUG]: chalk.cyan,
	[LogLevel.WARN]: chalk.yellow,
	[LogLevel.ERROR]: chalk.red,
};

const log = (message: string, logLevel: LogLevel, ...metadata: any[]) => {
	const colourFn = colourMap[logLevel];
	const timestamp =
		NODE_ENV === "dev"
			? new Date().toLocaleString()
			: new Date().toISOString();
	const preamble = colourFn(`[${timestamp}] [${logLevel}]`);

	switch (logLevel) {
		case LogLevel.INFO:
			console.info(preamble, message, ...metadata);
			break;
		case LogLevel.DEBUG:
			console.debug(preamble, message, ...metadata);
			break;
		case LogLevel.WARN:
			console.warn(preamble, message, ...metadata);
			break;
		case LogLevel.ERROR:
			console.error(preamble, message, ...metadata);
			break;
	}
};

export const logger = {
	info: (message: string, ...metadata: any[]) =>
		log(message, LogLevel.INFO, ...metadata),
	debug: (message: string, ...metadata: any[]) =>
		log(message, LogLevel.DEBUG, ...metadata),
	warn: (message: string, ...metadata: any[]) =>
		log(message, LogLevel.WARN, ...metadata),
	error: (message: string, ...metadata: any[]) =>
		log(message, LogLevel.ERROR, ...metadata),
};
