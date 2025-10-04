"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await product_model_1.default.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};
exports.getAllProducts = getAllProducts;
// Get a single product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await product_model_1.default.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
};
exports.getProductById = getProductById;
// Create a new product
const createProduct = async (req, res) => {
    const newProduct = new product_model_1.default(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};
exports.createProduct = createProduct;
// Update a product by ID
const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await product_model_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating product', error });
    }
};
exports.updateProduct = updateProduct;
// Delete a product by ID
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await product_model_1.default.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};
exports.deleteProduct = deleteProduct;
