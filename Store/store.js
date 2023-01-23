
import { createSlice } from "@reduxjs/toolkit";


const val = {
       token:"",
       user:{},
}


const storeSlice = createSlice({
    name: "store",
    initialState: { value: val },
    reducers: {
        loginController: (state, action) => {
             
            const {token,user} = action.payload;
            state.value = {...state.value,token,user};

          


        },
        logoutController : (state,action) => {
            const temp = {token:"",user:{}};
            state.value = temp;

        }
    }
})

export const { loginController ,logoutController} = storeSlice.actions;

export default storeSlice.reducer;