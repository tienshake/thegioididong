import { createSlide } from "@reduxjs/toolkit"

const authSlice = createSlide({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        }
    },
    reducer: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        }
    }
})

export const {
    loginStart,
    loginFailed,
    loginSuccess
} = authSlice.action;

export default authSlice.reducer;