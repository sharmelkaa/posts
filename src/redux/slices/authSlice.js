import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            // login user
        },
        logout: (state, action) => {
            // logout user
        },
        registerUser: (state, action) => {
            // registration
        }
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer