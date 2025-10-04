"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../controllers/orderController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
// Create a new order
router.post('/', auth_1.authenticate, orderController_1.createOrder);
// Get order by ID
router.get('/:id', auth_1.authenticate, orderController_1.getOrderById);
// Get all orders (admin only)
router.get('/', auth_1.authenticate, orderController_1.getOrders);
exports.default = router;
