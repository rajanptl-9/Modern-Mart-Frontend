import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import productReducer from '../features/product/productSlice';
import colorReducer from '../features/color/colorSlice';
import wishlistReducer from "../features/wishlist/wishlistSlice"
import contactReducer from "../features/contact/contactSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    user : userReducer,    
    product: productReducer,
    color: colorReducer,
    wishlist : wishlistReducer,
    contact:  contactReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
