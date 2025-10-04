"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePaymentSuccess = exports.confirmPayment = exports.createPaymentIntent = void 0;
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2020-08-27',
});
const createPaymentIntent = async (amount, currency) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        return paymentIntent;
    }
    catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        throw new Error(`Payment Intent creation failed: ${msg}`);
    }
};
exports.createPaymentIntent = createPaymentIntent;
const confirmPayment = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
        return paymentIntent;
    }
    catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        throw new Error(`Payment confirmation failed: ${msg}`);
    }
};
exports.confirmPayment = confirmPayment;
// handlePaymentSuccess should integrate with Order/User models in controllers
const handlePaymentSuccess = async (paymentIntentId, userId) => {
    try {
        // Implementation note: Query your Order and User models here. This service
        // is kept minimal to avoid direct coupling in scaffold.
        return { paymentIntentId, userId };
    }
    catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        throw new Error(`Handling payment success failed: ${msg}`);
    }
};
exports.handlePaymentSuccess = handlePaymentSuccess;
