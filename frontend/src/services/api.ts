import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
});

// Example API call to get products
export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

// Example API call to get a single product by ID
export const fetchProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};

// Example API call to create an order
export const createOrder = async (orderData: any) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating order');
  }
};

// Example API call to get the user's cart
export const fetchCart = async () => {
  try {
    const response = await api.get('/cart');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching cart');
  }
};

// Example API call to update the user's cart
export const updateCart = async (cartData: any) => {
  try {
    const response = await api.put('/cart', cartData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating cart');
  }
};