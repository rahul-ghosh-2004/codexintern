import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { login_url } from '../../env.js'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()

    const [creadentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleUserName = (e) => {
        e.preventDefault()
        setCredentials((prev) => {
            return {
                ...prev,
                username: e.target.value
            }
        })
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setCredentials((prev) => {
            return {
                ...prev,
                password: e.target.value
            }
        })
    }

    const performLogin = async (e) => {
        e.preventDefault()
        setCredentials({username: "", password: ""})
        try {
            const response = await axios.post(login_url, creadentials, { withCredentials: true })
            toast.success("Login complete !!")
            setTimeout(() => {
                navigate("/dashboard")
            }, 200)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    // console.log(creadentials)

    return (
        <div className='h-[600px] w-full flex items-center justify-center flex-col gap-y-14'>
            <Toaster />
            <h2 className='text-xl font-bold text-slate-500'>
                Admin Login
            </h2>
            <form class="space-y-4 font-[sans-serif] w-96">
            <input type="email" placeholder="Enter Email" onChange={handleUserName} value={creadentials.username}
                class="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded" />

            <input type="password" placeholder="Enter Password" onChange={handlePassword} value={creadentials.password}
                class="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded" />

            <button onClick={performLogin}
                class="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        </form>
        </div>
    )
}

export default Login
