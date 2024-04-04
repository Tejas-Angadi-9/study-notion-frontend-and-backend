import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../slices/authSlice"
import profileSlice from "../slices/profileSlice.js"
import cartSlice from "../slices/cartSlice"

export const store = configureStore({
    //* Write all the slices here
    reducer: {
        auth: authSlice,
        profile: profileSlice,
        cart: cartSlice
    }
})

export default store;