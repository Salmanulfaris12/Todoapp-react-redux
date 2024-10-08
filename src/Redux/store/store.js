import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Reducer/Reducer'
import colorReducer from '../Reducer/ColorSlice'
import userReducer from '../Reducer/UserSlice'
import todoReducer from '../Reducer/Todoslice'
import usersdReducer from '../Reducer/UserdSlice'
import todoserverReducer from '../Reducer/TodoserverSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        colorChange:colorReducer,
        usersList:userReducer,
        todo:todoReducer,
        userd:usersdReducer,
        todoServer:todoserverReducer
    }
})