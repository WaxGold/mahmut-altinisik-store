"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = {
    info: (...args) => console.log('[info]', ...args),
    error: (...args) => console.error('[error]', ...args),
    warn: (...args) => console.warn('[warn]', ...args),
};
exports.default = logger;
