import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData: null,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSingupData(state, value) {
            state.signupData = value.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    }
});

export const { setSingupData, setToken, setLoading } = authSlice.actions;
export default authSlice.reducer;
