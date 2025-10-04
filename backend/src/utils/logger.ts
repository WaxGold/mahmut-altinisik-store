const logger = {
  info: (...args: any[]) => console.log('[info]', ...args),
  error: (...args: any[]) => console.error('[error]', ...args),
  warn: (...args: any[]) => console.warn('[warn]', ...args),
};

export default logger;