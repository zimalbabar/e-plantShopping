import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {

    // Add plant to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },


    // Remove plant from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },


    // Update quantity
    updateQuantity: (state, action) => {

      const { name, amount } = action.payload;

      const item = state.items.find(
        item => item.name === name
      );

      if (item) {
        item.quantity = amount;
      }

    }

  }
});


// Export actions
export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;


// Export reducer
export default cartSlice.reducer;
