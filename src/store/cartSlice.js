// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push({ ...newItem, id: Date.now() }); // Cada item terá um ID único com base no timestamp
      state.totalAmount += parseFloat(newItem.price.replace('R$', '').replace(',', '.'));
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);
      if (itemToRemove) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalAmount -= parseFloat(itemToRemove.price.replace('R$', '').replace(',', '.'));
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    }
  }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
