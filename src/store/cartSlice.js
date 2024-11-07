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

      // Verifica se o preço é uma string e faz o tratamento adequado
      let price = typeof newItem.price === 'string' 
        ? parseFloat(newItem.price.replace('R$', '').replace(',', '.'))
        : parseFloat(newItem.price);

      if (isNaN(price)) {
        console.error("Erro ao converter o preço do item:", newItem.price);
        return;
      }

      // Adiciona o item com um ID único gerado
      state.items.push({ ...newItem, id: Date.now() });
      state.totalAmount += price;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);
      if (itemToRemove) {
        state.items = state.items.filter(item => item.id !== id);

        let price = typeof itemToRemove.price === 'string' 
          ? parseFloat(itemToRemove.price.replace('R$', '').replace(',', '.'))
          : parseFloat(itemToRemove.price);

        if (!isNaN(price)) {
          state.totalAmount -= price;
        } else {
          console.error("Erro ao converter o preço do item removido:", itemToRemove.price);
        }
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
