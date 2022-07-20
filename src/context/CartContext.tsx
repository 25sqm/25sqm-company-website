import React, { createContext, useState } from "react";

export interface CartItem {
  id: number;
  productName: string;
  productDescription: string;
  productImage: string;
  quantity: number;
}

const initialState: any = [];

const CartContext = createContext(initialState);

export const CartContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (cartItem: CartItem) => {
    setCartItems([...cartItems, cartItem]);
  };

  const editQuantity = (id: number, quantity: number) => {
    // edit the quantity of the item in the cart
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const deleteCartItem = (id: number) => {
    setCartItems(cartItems.filter((item: CartItem) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, editQuantity, deleteCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
