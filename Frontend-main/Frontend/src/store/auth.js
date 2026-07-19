import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialAutState = {
    isLoggedIn:localStorage.getItem("token")?true:false,
    role:localStorage.getItem("role")||"user",
}
 const authSlice = createSlice({
    name:"auth",
    initialState:initialAutState,
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn =false;
            state.role = "user";
            localStorage.removeItem("id")
            localStorage.removeItem("token")
            localStorage.removeItem("role")
        },
        changeRole(state,action){
            const role = action.payload;
            state.role = role;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;
