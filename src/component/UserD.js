import React, { useEffect } from 'react'
import { fetchUserD } from '../Redux/Reducer/UserdSlice'
import { useDispatch, useSelector } from 'react-redux'

function UserD() {
    const users=useSelector((state)=> state.userd.usersDetails)
    const dispatch=useDispatch()
    console.log(users);
    

    useEffect(()=>{
        dispatch(fetchUserD())
    },[dispatch])

  return (
    <div>
        {
            users.map((user)=>(
                <h2 key={user.id}>{user.email}</h2>
            ))
        }
    </div>
  )
}

export default UserD