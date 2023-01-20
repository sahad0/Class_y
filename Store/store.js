
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
            console.log(state.value);

          

            // console.log(JSON.stringify(action.payload)+"-----------> from store");

        }
    }
})

export const { loginController } = storeSlice.actions;

export default storeSlice.reducer;