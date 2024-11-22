import React from 'react'
import { useState } from 'react'
import { upload_intern_data } from '../../env.js'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const Intern = () => {
  const [details, setDetails] = useState({
    fullname: "",
    domain: "",
    startingDate: "",
    endingDate: "",
    certificateID: "",
    certificateURL: ""
  })

  const handleDataUpload = async (e) => {
    e.preventDefault()
    
    try {
      const rspn = await axios.post(upload_intern_data, details, { withCredentials: true })
      setDetails({
        fullname: "",
        domain: "",
        startingDate: "",
        endingDate: "",
        certificateID: "",
        certificateURL: ""
      })
      toast.success(rspn?.data?.message)
      // console.log(rspn)
    } catch (error) {
      // console.log(error)
      toast.error(error?.response?.data?.message)
    }
  }

  // console.log(data)

  const handleFullName = (e) => {
    e.preventDefault()
    setDetails((prev) => {
      return {
        ...prev,
        fullname: e.target.value
      }
    })
  }

  const handleDomain = (e) => {
    e.preventDefault()
    setDetails((prev) => {
      return {
        ...prev,
        domain: e.target.value
      }
    })
  }

  const handleStartingDate = (e) => {
    e.preventDefault()
    setDetails((prev) => {
      return {
        ...prev,
        startingDate: String(e.target.value)
      }
    })
  }

  const handleEndingDate = (e) => {
    e.preventDefault()
    setDetails((prev) => {
      return {
        ...prev,
        endingDate: String(e.target.value)
      }
    })
  }

  const handleCertificateID = (e) => {
    e.preventDefault()
    setDetails((prev) => {
      return {
        ...prev,
        certificateID: e.target.value
      }
    })
  }

  const handleCertificateURL = (e) => {
    e.preventDefault()
    setDetails((prev) => {
      return {
        ...prev,
        certificateURL: e.target.value
      }
    })
  }

  return (
    <div
      className='h-screen w-full flex items-center justify-start flex-col gap-y-5'
    >
      <Toaster />

      <p
        className='text-xl font-bold pt-10 pb-14'
      >
        Upload Intern's Details
      </p>

      <div className='flex gap-x-3'>
        <div className='flex items-start justify-center flex-col gap-y-2'>
          <label className='font-bold'>Full Name</label>
          <input type="text" placeholder='Enter full name' className='h-10 w-64 outline-none border-none rounded-md px-2' onChange={handleFullName} value={details.fullname}/>
        </div>

        <div className='flex items-start justify-center flex-col gap-y-2'>
          <label className='font-bold'>Internship Domain</label>
          {/* <input type="text" placeholder='Internship domain' className='h-10 w-64 outline-none border-none rounded-md px-2' /> */}
          <select name="" id="" className='h-10 w-64 outline-none border-none rounded-md px-2' onChange={handleDomain} value={details.domain}>
            <option value="">Select</option>
            <option value="Front-End Web Development">Front-End Web Development</option>
            <option value="Back-End Development">Back-End Development</option>
            <option value="Python Development">Python Development</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Full-Stack Development">Full-Stack Development</option>
            <option value="MongoDB Bootcamp">MongoDB Bootcamp</option>
          </select>
        </div>
        {/* <input type="text" placeholder='Internship Month' className='h-10 w-64 outline-none border-none rounded-md px-2'/> */}

        <div className='flex items-start justify-center flex-col gap-y-2'>
          <label className='font-bold'>Starting Date</label>
          <input type="date" name="" id="" className='h-10 outline-none border-none px-2 rounded-lg' onChange={handleStartingDate} value={details.startingDate}/>
        </div>
      </div>

      <div className='flex gap-x-3'>
        <div className='flex items-start justify-center flex-col gap-y-2'>
          <label className='font-bold'>Ending Date</label>
          <input type="date" name="" id="" className='h-10 outline-none border-none px-2 rounded-lg' onChange={handleEndingDate} value={details.endingDate}/>
        </div>

        <div className='flex items-start justify-center flex-col gap-y-2'>
          <label className='font-bold'>Certificate ID</label>
          <input type="text" placeholder='Certificate ID' className='h-10 w-64 outline-none border-none rounded-md px-2' onChange={handleCertificateID} value={details.certificateID}/>
        </div>

        <div className='flex items-start justify-center flex-col gap-y-2'>
          <label className='font-bold'>Certificate URL</label>
          <input type="text" placeholder='Certificate URL' className='h-10 w-64 outline-none border-none rounded-md px-2' onChange={handleCertificateURL} value={details.certificateURL}/>
        </div>
      </div>

      <button
        className='h-10 w-24 bg-slate-300 text-lg font-semibold rounded-md hover:bg-black hover:text-white mt-10'
        onClick={handleDataUpload}
      >upload</button>

    </div>
  )
}

export default Intern
