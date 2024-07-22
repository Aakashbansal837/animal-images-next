// utils/logger.ts
interface Logger {
  info: (message: string, meta?: any) => void;
  warn: (message: string, meta?: any) => void;
  error: (message: string, meta?: any) => void;
  debug: (message: string, meta?: any) => void;
  // Add other custom functions if needed
}

let logger: Logger;

if (process.env.NODE_ENV === 'production') {
  logger = {
    info: (message: string, meta?: any) => {
      console.log(`INFO: ${message}`, meta);
    },
    warn: (message: string, meta?: any) => {
      console.warn(`WARN: ${message}`, meta);
    },
    error: (message: string, meta?: any) => {
      console.error(`ERROR: ${message}`, meta);
    },
    debug: (message: string, meta?: any) => {
      console.debug(`DEBUG: ${message}`, meta);
    },
    // Implement other functionalities
  };
} else {
  logger = {
    info: (message: string, meta?: any) => {
      console.log(`INFO: ${message}`, meta);
    },
    warn: (message: string, meta?: any) => {
      console.warn(`WARN: ${message}`, meta);
    },
    error: (message: string, meta?: any) => {
      console.error(`ERROR: ${message}`, meta);
    },
    debug: (message: string, meta?: any) => {
      console.debug(`DEBUG: ${message}`, meta);
    },
    // Implement other functionalities
  };
}

export default logger;
