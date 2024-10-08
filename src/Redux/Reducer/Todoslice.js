import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({
                id:new Date().getTime(),
                text:action.payload,
                completed:false
            })
        },
        deleteTodo:(state,action)=>{
           return state.filter((todo)=>todo.id!==action.payload)
        },
        editTodo:(state,action)=>{
            const {id,text}=action.payload
            const todo=state.find((todo)=>todo.id===id)
            if(todo){
                todo.text=text
            }

        },
        markasdone:(state,action)=>{
            const todo=state.find((todo)=>todo.id===action.payload)
            if(todo){
                todo.completed=!todo.completed
            }
        }

    }
})

export const {addTodo,deleteTodo,editTodo,markasdone}=todoSlice.actions
export default todoSlice.reducer
