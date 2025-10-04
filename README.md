# Mahmut Altınışık E-Commerce Project

## Overview
This project is a full-stack e-commerce application for a t-shirt website named "Mahmut Altınışık". It utilizes modern technologies including React with Vite, TypeScript, TailwindCSS for the frontend, and Node.js with Express, TypeScript for the backend, along with MongoDB as the database.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
The frontend is built using React and Vite, providing a fast and responsive user interface. The structure includes:
- **Pages**: Components for different views such as Home, Product, Cart, and Checkout.
- **Components**: Reusable UI components like Header, Footer, ProductCard, and CartItem.
- **Hooks**: Custom hooks for managing state, such as the cart state.
- **Services**: API service for making requests to the backend.
- **Context**: Context API for global state management.
- **Styles**: TailwindCSS for styling and global CSS.

### Backend
The backend is built using Node.js and Express, providing a RESTful API for the frontend to interact with. The structure includes:
- **Controllers**: Functions to handle requests related to authentication, products, and orders.
- **Routes**: API endpoints for authentication, products, and orders.
- **Models**: Mongoose models for users, products, and orders.
- **Services**: Payment processing service.
- **Middleware**: Authentication and error handling middleware.
- **Utils**: Utility functions for logging and database configuration.

## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables by copying `.env.example` to `.env` and configuring it.
4. Start the server:
   ```
   npm run dev
   ```

## Features
- User authentication (registration and login).
- Product listing and details.
- Shopping cart functionality.
- Checkout process with payment integration.

## Technologies Used
- **Frontend**: React, Vite, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, TypeScript, MongoDB
- **Others**: Stripe for payment processing

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.