import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlide";

export default configureStore({
    reducer: {
        auth: authReducer
    }
})