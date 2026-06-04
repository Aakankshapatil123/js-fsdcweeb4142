import { createSlice } from "@reduxjs/toolkit";
import { setEmail, setPassword } from "./registerSlice";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: "",
        password: ""
    },

    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },

        setPassword: (state, action) => {
            state.password = action.payload;
        }
    }
})

// export action
export const {email, password} = loginSlice.actions;

// export selector 
export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;

// export reducer
export default loginSlice.reducer;