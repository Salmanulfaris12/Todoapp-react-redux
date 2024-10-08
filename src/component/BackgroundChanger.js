import React from 'react'
import { changeclr } from '../Redux/Reducer/ColorSlice'
import { useDispatch, useSelector } from 'react-redux'

const BackgroundChanger = () => {
    const color=useSelector((state)=>state.colorChange.color) 
    const dispatch=useDispatch()
  return (
    <>
        <div style={{width:'500px',height:'300px',backgroundColor:'whitesmoke'}} >
            <div style={{width: '100px',height:'100px', backgroundColor:color}} ></div>
            <button onClick={()=>dispatch(changeclr())}>Change</button>
        </div>
    </>
  )
}

export default BackgroundChanger