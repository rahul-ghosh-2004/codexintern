import React from 'react'
import { useState } from 'react'
import { find_data } from '../../env.js'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const Verify = () => {
    const [certificateID, setCertificateID] = useState("")
    const [details, setDetails] = useState({
        fullname: "",
        domain: "",
        startingDate: "",
        endingDate: "",
        certificateID: "",
        certificateURL: ""
    })

    // console.log(certificateID)

    const handleID = (e) => {
        e.preventDefault()
        setCertificateID(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const rspn = await axios.post(find_data, {certificateID}, { withCredentials: true })
            setCertificateID("")
            // console.log(rspn?.data)
            toast.success(rspn?.data?.message)
            const internData = rspn?.data?.data
            setDetails({
                fullname: internData.fullname,
                domain: internData.domain,
                startingDate: internData.startingDate,
                endingDate: internData.endingDate,
                certificateID: internData.certificateID,
                certificateURL: internData.certificateURL
            })
        } catch (error) {
            // console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div
            className='h-[610px] w-full bg-slate-200 flex items-center flex-col'
        >
            <Toaster />

            <form className="max-w-md mx-auto mt-10">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" onChange={handleID} value={certificateID} className="block w-80 p-4 ps-10 text-sm text-gray-900 border-none outline-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Certificate ID" required />
                    <button type="submit" onClick={handleSubmit} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <p className='mt-5 text-slate-500'>
                Verify your certificate by providing SID or certificate ID
            </p>

            {
                details.fullname === "" ? (
                    <p className='mt-10 text-slate-500'>No record found !</p>
                ) : (
                    <div className='h-96 w-auto pb-5 mt-10 flex items-baseline justify-center flex-col gap-x-28'>

                        <div className='flex items-center justify-center flex-wrap gap-x-5'>
                            <div className='flex items-start justify-center flex-col gap-y-1 mt-3 flex-wrap'>
                                <label className='text-sm font-bold'>Full Name</label>
                                <input type="text" value={details.fullname} className='text-sm h-10 w-64 px-5 border-none outline-none rounded-md' readOnly />
                            </div>
                            <div className='flex items-start justify-center flex-col gap-y-1 mt-3'>
                                <label className='text-sm font-bold'>Domain</label>
                                <input type="text" value={details.domain} className='text-sm h-10 w-64 px-5 border-none outline-none rounded-md' readOnly />
                            </div>
                            <div className='flex items-start justify-center flex-col gap-y-1 mt-3'>
                                <label className='text-sm font-bold'>Starting Date</label>
                                <input type="text" value={details.startingDate} className='text-sm h-10 w-64 px-5 border-none outline-none rounded-md' readOnly />
                            </div>
                        </div>

                        <div className='flex items-center justify-center flex-wrap gap-x-5'>
                            <div className='flex items-start justify-center flex-col gap-y-1 mt-3'>
                                <label className='text-sm font-bold'>Ending Date</label>
                                <input type="text" value={details.endingDate} className='text-sm h-10 w-64 px-5 border-none outline-none rounded-md' readOnly />
                            </div>
                            <div className='flex items-start justify-center flex-col gap-y-1 mt-3'>
                                <label className='text-sm font-bold'>Certificate ID</label>
                                <input type="text" value={details.certificateID} className='text-sm h-10 w-64 px-5 border-none outline-none rounded-md' readOnly />
                            </div>
                            <div className='flex items-start justify-center flex-col gap-y-1 mt-3'>
                                <label className='text-sm font-bold'>Certificate URL</label>
                                <input type="text" value={details.certificateURL} className='text-sm h-10 w-64 px-5 border-none outline-none rounded-md' readOnly />
                            </div>
                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default Verify
