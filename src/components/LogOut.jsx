import React from 'react'
import {logout} from '../store/authSlice'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'
function LogOut() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate('/')
        })
    }
  return (
    <button 
    onClick={logoutHandler}
    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Log-Out
</span>
</button>
  )
}

export default LogOut