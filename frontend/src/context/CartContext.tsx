import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const updatedItems = [...state.items];

      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        updatedItems.push(action.payload);
      }

      const totalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);

      return { items: updatedItems, totalAmount };
    }
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const totalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { items: updatedItems, totalAmount };
    }
    case 'CLEAR_CART':
      return initialState;
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item => 
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      const totalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { items: updatedItems, totalAmount };
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};