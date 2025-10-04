"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Route for user registration
router.post('/register', authController_1.registerUser);
// Route for user login
router.post('/login', authController_1.loginUser);
exports.default = router;
