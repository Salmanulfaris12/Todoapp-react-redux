import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserD=createAsyncThunk('userd/fetchUserD',()=>{
    return axios.get("https://jsonplaceholder.typicode.com/usersvhvhg")
    .then(res=>res.data)
    .catch(err=>console.log(err)
    )
    
})

export const userdSlice= createSlice({
    name:"userd",
    initialState:{
        loading:false,
        usersDetails:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserD.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchUserD.fulfilled,(state,action)=>{
            state.loading=false
            state.usersDetails=action.payload
        })
        .addCase(fetchUserD.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default userdSlice.reducer