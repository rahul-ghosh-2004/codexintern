import React from 'react'
import { current_admin_url, logout_url } from "../../env.js"
import { useEffect } from 'react'
import axios from 'axios'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { IoIosLogOut } from "react-icons/io";

const Dashboard = () => {
  const navigate = useNavigate()
    const fetchCurentUser = async () => {
        try {
            const response = await axios.get(current_admin_url, { withCredentials: true })
            // console.log(response)
            toast.success("Admin logged in!!")
        } catch (error) {
            // console.log(error)
            toast.error(error?.response?.data?.message)
            setTimeout(() => {
              navigate("/login")
            }, 500)
        }
    }

    const handleLogout = async (e) => {
      e.preventDefault()

      try {
        const rspn = await axios.get(logout_url, { withCredentials: true })
        // console.log(rspn)
        toast.success(rspn?.data?.message)
        setTimeout(() => {
          navigate("/login")
        }, 700)

      } catch (error) {
        // console.log(error?.response?.data?.message)
        toast.error(error?.response?.data?.message)
      }
    }

    useEffect(() => {
        fetchCurentUser()
    }, [])
  return (
    <div className='h-screen w-full bg-slate-200 flex items-center justify-center'>
      <Toaster />
      <div className='h-screen w-48 bg-slate-600 flex items-center flex-col justify-between pt-5'>
        <ul>
          <Link to={""}>
            <li className='text-white font-bold'>Upload Details</li>
          </Link>
        </ul>

        {/* <button
          className='mb-10 bg-white text-black'
        >Logout</button> */}
        <IoIosLogOut size={35} className='mb-5 cursor-pointer' onClick={handleLogout}/>
      </div>

      <div
        className='h-screen w-full bg-slate-400'
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
