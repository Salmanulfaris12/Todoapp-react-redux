import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers=createAsyncThunk('user/fetchuser',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.data)
})

export const userSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        users:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
           state.loading=false
           state.error=action.error.message
        })

    }

})


export default userSlice.reducer
