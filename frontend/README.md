# Mahmut Altınışık E-Commerce Project

This is a full-stack e-commerce application for a t-shirt website named "Mahmut Altınışık". The project is structured into two main parts: the frontend and the backend.

## Frontend

The frontend is built using React with TypeScript, Vite, and TailwindCSS. It provides a responsive and user-friendly interface for browsing products, managing the cart, and completing purchases.

### Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd mahmut-altinisik-store/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

### Project Structure

- **src/**: Contains the main application code.
  - **components/**: Reusable components like Header, Footer, ProductCard, etc.
  - **pages/**: Different pages of the application such as Home, Product, Cart, and Checkout.
  - **hooks/**: Custom hooks for managing state, like useCart.
  - **services/**: API service for making requests to the backend.
  - **context/**: Context API for global state management.
  - **types/**: TypeScript types and interfaces.
  - **styles/**: Global CSS styles.

### Features

- View a list of products.
- View product details.
- Add products to the cart.
- Checkout process with payment handling.

## Backend

The backend is built using Node.js, Express, and TypeScript, with MongoDB as the database. It provides RESTful APIs for managing products, users, and orders.

### Setup

1. **Navigate to the backend directory:**
   ```bash
   cd mahmut-altinisik-store/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env` and fill in the required values.

4. **Run the server:**
   ```bash
   npm run dev
   ```

### Project Structure

- **src/**: Contains the main application code.
  - **controllers/**: Logic for handling requests.
  - **routes/**: API routes for authentication, products, and orders.
  - **models/**: Mongoose models for users, products, and orders.
  - **services/**: Business logic, such as payment processing.
  - **middleware/**: Middleware for authentication and error handling.
  - **utils/**: Utility functions, such as logging.
  - **config/**: Configuration files, including database connection.

### Features

- User authentication and management.
- CRUD operations for products.
- Order processing and payment handling.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.