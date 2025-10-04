"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getOrders = exports.createOrder = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
// Create a new order
const createOrder = async (req, res) => {
    try {
        const order = new order_model_1.default(req.body);
        await order.save();
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create order', error });
    }
};
exports.createOrder = createOrder;
// Get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await order_model_1.default.find();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve orders', error });
    }
};
exports.getOrders = getOrders;
// Get a single order by ID
const getOrderById = async (req, res) => {
    try {
        const order = await order_model_1.default.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve order', error });
    }
};
exports.getOrderById = getOrderById;
// Update an order by ID
const updateOrder = async (req, res) => {
    try {
        const order = await order_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update order', error });
    }
};
exports.updateOrder = updateOrder;
// Delete an order by ID
const deleteOrder = async (req, res) => {
    try {
        const order = await order_model_1.default.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete order', error });
    }
};
exports.deleteOrder = deleteOrder;
