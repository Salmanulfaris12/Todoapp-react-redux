import React from 'react'
import { increment,decrement } from '../Redux/Reducer/Reducer'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    // const color=count%2===0?"green":"blue"
  return (
    <div>
        <div>
            <h1>Redux Counter</h1>
            <p>Count:{count}</p>
        </div>
        <div style={{width:'100px',height:'100px', backgroundColor:`${count%2===0?"green":"blue"}`}} ></div>
        <div>
            <button onClick={()=>dispatch(increment(10))}>
                Add
            </button>
            <button onClick={()=>dispatch(decrement())}>
                Subtract 5
            </button>
        </div>
    </div>
  )
}

export default Counter