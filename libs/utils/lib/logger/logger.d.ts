declare module 'logger' {
    export enum LogLevel {
        INFO = "INFO",
        DEBUG = "DEBUG",
        WARN = "WARN",
        ERROR = "ERROR",
    }

    export interface Logger {
        info(message: string, ...metadata: any[]): void;
        debug(message: string, ...metadata: any[]): void;
        warn(message: string, ...metadata: any[]): void;
        error(message: string, ...metadata: any[]): void;
    }

    export const logger: Logger;
}
