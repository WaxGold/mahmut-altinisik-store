"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
// Route to get all products
router.get('/', productController_1.getAllProducts);
// Route to get a product by ID
router.get('/:id', productController_1.getProductById);
// Route to create a new product
router.post('/', productController_1.createProduct);
// Route to update a product by ID
router.put('/:id', productController_1.updateProduct);
// Route to delete a product by ID
router.delete('/:id', productController_1.deleteProduct);
exports.default = router;
