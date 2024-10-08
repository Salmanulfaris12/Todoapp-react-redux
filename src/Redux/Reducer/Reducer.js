import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
            state.value +=action.payload
        },
        decrement:(state)=>{
            state.value -=5
        }
    }
})

export const{increment,decrement}=counterSlice.actions
export default counterSlice.reducer