import express from 'express';
import { createOrder, getOrderById, getOrders } from '../controllers/orderController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Create a new order
router.post('/', authenticate, createOrder);

// Get order by ID
router.get('/:id', authenticate, getOrderById);

// Get all orders (admin only)
router.get('/', authenticate, getOrders);

export default router;