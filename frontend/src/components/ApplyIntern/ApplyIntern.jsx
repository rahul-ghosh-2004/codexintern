import React from 'react'
import axios from "axios"
import { apply_intern } from '../../../env.js'
import toast, { Toaster } from 'react-hot-toast'

function ApplyIntern() {
    const [inputData, setInputData] = React.useState({
        fullname: "",
        email: "",
        mobile: "",
        gender: "",
        domain: "",
        college: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const data = await axios.post(apply_intern, inputData, { withCredentials: true })
            toast.success("Application submitted successfully!")
            // console.log(data)
            setInputData({fullname: "",
              email: "",
              mobile: "",
              gender: "",
              domain: "",
              college: ""})
        } catch (error) {
            toast.error(error.response.data.message)
            // console.log(error.response.data.message)
        }
    }

    console.log(inputData)
  return (
      <div className="w-full h-screen flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333]">
        <Toaster />
      <div>
        <label className="mb-2 text-sm block">Full Name</label>
        <input type='text' placeholder='Enter full name'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" 
          onChange={(e) => setInputData((prev) => ({...prev, fullname: e.target.value}))}  value={inputData.fullname}
        />
      </div>
      <div>
        <label className="mb-2 text-sm block">Email</label>
        <input type='text' placeholder='Enter email'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({...prev, email: e.target.value}))} value={inputData.email}/>
      </div>
      <div>
        <label className="mb-2 text-sm block">Gender</label>
        <select name="gender" id="" className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({...prev, gender: e.target.value}))} value={inputData.gender}>
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
      </div>
      <div>
        <label className="mb-2 text-sm block">WhatsApp Number</label>
        <input type='text' placeholder='Enter your whatsapp number'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({...prev, mobile: e.target.value}))} value={inputData.mobile}/>
      </div>
      <div>
        <label className="mb-2 text-sm block">Internship Domain</label>
        <select name="gender" id="" className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({...prev, domain: e.target.value}))} value={inputData.domain}>
            <option value="">Select internship domain</option>
            <option value="Basic Web Development">Basic Web Development</option>
            <option value="Front-End Development">Front-End Development</option>
            <option value="Back-End Development">Back-End Development</option>
            <option value="Python Development">Python Development</option>
        </select>
      </div>
      <div>
        <label className="mb-2 text-sm block">College Name</label>
        <input type='text' placeholder='Enter your college name'
          className="px-4 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500" onChange={(e) => setInputData((prev) => ({...prev, college: e.target.value}))} value={inputData.college}/>
      </div>
      

      <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
      <button type="button"
        className="px-5 py-2 rounded-lg text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300" onClick={handleSubmit}>Apply</button>
    </div>
    </div>
  )
}

export default ApplyIntern
