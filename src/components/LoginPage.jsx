import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { login as authLogin } from '../store/authSlice'
function LoginPage() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    console.log(email);
    console.log(password)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [error, setError] = useState("")
    const loginHandler = async(email , password)=>{
        let data = {
            email : email,
            password : password
        }
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/Home")
            }
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message)
        }
        
    }

  return (
    <div className="bg-slate-400 h-[100vh] w-[100vw] pt-16">
    <div className='w-2/4 flex shadow-lg backdrop-blur-3xl m-auto h-[70vh] border-2 rounded-md border-slate-50 '>
        <div className='w-1/2 h-full rounded-md'>
            <img className='object-fit h-full rounded w-full'
            src="https://images.pexels.com/photos/5435563/pexels-photo-5435563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className='w-1/2 h-full bg-login-view  rounded'>
                <div className='bg-orange-950 rounded-lg bg-opacity-40 h-3/4 w-3/4 m-auto mt-12'>
                    <div className='border-2 rounded-lg border-blue-100 h-full mt-5 pt-5'>
                    <form onSubmit={(e) => { e.preventDefault(); loginHandler(email , password); }}>
                        <div className='flex flex-col'>
                            <label className='ml-5 font-mono text-2xl text-slate-50' htmlFor="1"> Email: </label>
                        <input 
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        type="text" placeholder='example@bm.com'  id="1" className='w-10/12 m-auto text-md px-2 py-1 rounded border-2 border-slate-100font-mono'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='ml-5 font-mono text-2xl text-slate-50' htmlFor="1"> Password: </label>
                        <input 
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        type="text" placeholder='Enter your password'  id="1" className='w-10/12 m-auto text-md px-2 py-1 rounded border-2 border-slate-100font-mono'/>
                        </div>
                        <div className='w-full'>
                        <button type='submit' className='backdop-blur-lg w-8/12 border-2 rounded-md text-white bg-yellow-700 text-lg font-mono mx-9 my-5'>Login</button>
                        </div>

                    </form>
                    <div className="w-full text-white font-mono flex flex-col  items-center">
                    <div>First time here ? </div>
                    <div> <u>Sign Up </u></div>
                    </div>
                    </div>
                   
                </div>
        </div>
    </div>
    </div>
  )
}

export default LoginPage

