import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string || '', {
  apiVersion: '2020-08-27',
});

export const createPaymentIntent = async (amount: number, currency: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return paymentIntent;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Payment Intent creation failed: ${msg}`);
  }
};

export const confirmPayment = async (paymentIntentId: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    return paymentIntent;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Payment confirmation failed: ${msg}`);
  }
};

// handlePaymentSuccess should integrate with Order/User models in controllers
export const handlePaymentSuccess = async (paymentIntentId: string, userId: string) => {
  try {
    // Implementation note: Query your Order and User models here. This service
    // is kept minimal to avoid direct coupling in scaffold.
    return { paymentIntentId, userId };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(`Handling payment success failed: ${msg}`);
  }
};