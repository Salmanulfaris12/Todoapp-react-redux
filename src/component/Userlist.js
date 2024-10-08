import React, { useEffect } from 'react'
import { fetchUsers } from '../Redux/Reducer/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

function Userlist() {
    const users=useSelector((state)=>state.usersList.users)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    })
  return (
    <div>
        {
            users.map((user)=>(
                <div>
                    {user.name}
                </div>
            ))
        }
    </div>
  )
}

export default Userlist