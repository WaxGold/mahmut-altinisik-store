# Mahmut Altınışık E-Commerce Backend

## Overview
This is the backend for the Mahmut Altınışık e-commerce application, built using Node.js, Express, and TypeScript. The backend serves as the API for the frontend application, handling user authentication, product management, and order processing.

## Technologies Used
- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- Stripe (for payment processing)

## Project Structure
```
backend
├── src
│   ├── controllers        # Contains request handlers for different routes
│   ├── models             # Mongoose models for MongoDB collections
│   ├── routes             # Express routes for API endpoints
│   ├── middleware         # Custom middleware for authentication and error handling
│   ├── services           # Business logic and external service integrations
│   ├── utils              # Utility functions
│   ├── config             # Configuration files (e.g., database connection)
│   ├── app.ts             # Initializes the Express application
│   └── server.ts          # Entry point for the application
├── .env.example           # Example environment variables
├── package.json           # Backend dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── nodemon.json           # Nodemon configuration for development
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd mahmut-altinisik-store/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   - Copy `.env.example` to `.env` and fill in the required values (e.g., MongoDB connection string, Stripe API keys).

4. **Run the Application**
   ```bash
   npm run dev
   ```

5. **API Endpoints**
   - Authentication: `/api/auth`
   - Products: `/api/products`
   - Orders: `/api/orders`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.