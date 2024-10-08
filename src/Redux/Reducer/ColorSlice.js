import { createSlice } from "@reduxjs/toolkit";

export const colorSlice=createSlice({
    name:"color",
    initialState:{
        color:"green"
    },
    reducers:{
        changeclr:(state)=>{
           state.color= state.color==='green'?'blue':'green'
        }
    }
})
export const {changeclr}=colorSlice.actions
export default colorSlice.reducer