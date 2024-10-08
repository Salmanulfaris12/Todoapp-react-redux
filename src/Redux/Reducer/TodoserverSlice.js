import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodo=createAsyncThunk('todo/fetchTodo',async()=>{
   const res=await axios.get("http://localhost:3000/todos")
   console.log(res.data);
   return res.data
})
 export const addTodo=createAsyncThunk('todo/addTodo',async(task)=>{
    const res=await axios.post("http://localhost:3000/todos",{text:task,completed:false})
    return res.data
 })
 export const deleteTodo=createAsyncThunk('todo/deleteTodo',async(id)=>{
    const res=await axios.delete(`http://localhost:3000/todos/${id}`)
    console.log("delete===",id);
    return id
 })
 export const doneTodo=createAsyncThunk('todo/doneTodo',async(id)=>{
    const res=await axios.patch(`http://localhost:3000/todos/${id}`,{completed:true})
    console.log("done====",res.data);
    return res.data
 })
 export const editTodo=createAsyncThunk('todo/editTodo',async({id,text})=>{
    const res=await axios.patch(`http://localhost:3000/todos/${id}`,{text})
    console.log("edit====",res.data);
    return res.data
 })
// export const doneTodo = createAsyncThunk('todo/doneTodo', async (id, { getState }) => {
//     const todo = getState().todo.find((item) => item.id === id);  // Get the current todo state
//     const res = await axios.patch(`http://localhost:3000/todos/${id}`, { completed: !todo.completed });
//     return res.data;  // Return the updated todo
// });


export const todoserverSlice=createSlice({
    name:"todo",
    initialState:[],
    extraReducers:(builder)=>{
        builder
            .addCase(fetchTodo.pending,()=>console.log("pending...."))
            .addCase(fetchTodo.fulfilled,(state,action)=>{
                console.log("jiun",action.payload);
                return action.payload
                
            })
            .addCase(fetchTodo.rejected,()=>console.log("error occured"))

            // --------------add todo---------------

            .addCase(addTodo.pending,()=>console.log("pending...."))
            .addCase(addTodo.fulfilled,(state,action)=>{
                state.push(action.payload)
            })
            .addCase(addTodo.rejected,()=>console.log("error occured"))
            // ---------------delete Todo----------------
            .addCase(deleteTodo.pending,()=>console.log("pending...."))
            .addCase(deleteTodo.fulfilled,(state,action)=>{
                return state.filter((item)=>item.id!==action.payload)
            })
            .addCase(deleteTodo.rejected,()=>console.log("error occured"))
            // ----------------done Todo----------------
            .addCase(doneTodo.pending,()=>console.log("pending...."))
            .addCase(doneTodo.fulfilled, (state, action) => {
                const todo = state.find((item) => item.id === action.payload.id);
                if (todo) {
                    todo.completed = action.payload.completed;  // Update completed status
                }
            })
            .addCase(doneTodo.rejected,()=>console.log("error occured"))
            // ----------------edit todo-----------------
            .addCase(editTodo.pending,()=>console.log("pending...."))
            .addCase(editTodo.fulfilled,(state,action)=>{
                const todo=state.find((item)=>item.id===action.payload.id)
                if(todo){
                    todo.text=action.payload.text
                }
            })
            .addCase(editTodo.rejected,()=>console.log("error occured"))
    }
    
})

export default todoserverSlice.reducer

