import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    toggleMiniCart(state, action) {
      state.showMiniCart = action.payload;
    },
    setAddToCart(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItem.findIndex((idx) => idx.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity += quantity;
      } else {
        state.cartItem.push(action.payload);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItem.findIndex((idx) => idx.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {},
});

const { reducer, actions } = cartSlice;
export const { toggleMiniCart, removeFromCart, setQuantity, setAddToCart } = actions;
export default reducer;