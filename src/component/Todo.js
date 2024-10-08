import React, { useState } from 'react'
import { addTodo,editTodo,deleteTodo,markasdone } from '../Redux/Reducer/Todoslice'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
    const [task,setTask]=useState("")
    const [editText,setEditText]=useState("")
    const [editId,setEditId]=useState(null)

    const todos=useSelector((state)=>state.todo)
    const dispatch=useDispatch()

    const handleAdd=()=>{
        if(task.trim()){
            dispatch(addTodo(task))
            setTask("")
        }
    }

    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }

    const handleEdit=(id,text)=>{
        setEditText(text)
        setEditId(id)
    }

    const handleEditSave=()=>{
        if(editText.trim()){
        dispatch(editTodo({id:editId,text:editText}))
        setEditId(null)
        setEditText("")
        }
    }

    const handleDone=(id)=>{
        dispatch(markasdone(id))
    }

    
  return (
    <div>
        <div>
            <input
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={handleAdd}>ADD</button>
        </div>
        <h2>PENDING TASKS</h2>
        <ul>
            {todos.filter((todo)=>!todo.completed).map((todo)=>(
                <li key={todo.id}>
                    {
                        editId===todo.id?(
                            <>
                                <input
                                type='text'
                                value={editText}
                                onChange={(e)=>setEditText(e.target.value)}
                                />
                                <button onClick={handleEditSave}>SAVE</button>
                            </>
                        ):
                        (
                            <>
                            {todo.text}
                            <button onClick={()=>handleEdit(todo.id,todo.text)}>EDIT</button>
                            <button onClick={()=>handleDelete(todo.id)}>DELETE</button>
                            <button onClick={()=>handleDone(todo.id)}>DONE</button>
                            </>
                        )
                    }
                </li>
            ))
            }
        </ul>
        <h2>COMPLETED TASKS</h2>
        <ul>
            {
                todos.filter((todo)=>todo.completed).map((todo)=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=>handleDelete(todo.id)}>DELETE</button>
                        <button onClick={()=>handleDone(todo.id)}>PENDING</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo