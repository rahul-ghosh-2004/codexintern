import React from 'react'
import { Button } from './ui/button'
import axios from 'axios'

function TempPay() {
    const handlePay = async (e) => {
        e.preventDefault()

        await axios.post("https://cxi-backend.vercel.app/api/v1/payment/order")
        .then(response => {
            console.log(response?.data?.data?.instrumentResponse?.redirectInfo?.url)
            window.location.href = response?.data?.data?.instrumentResponse?.redirectInfo?.url;
        }).catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
      <Button onClick={handlePay}>Pay</Button>
    </div>
  )
}

export default TempPay
