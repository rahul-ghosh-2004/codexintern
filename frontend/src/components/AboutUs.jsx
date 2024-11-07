import React from 'react'
import { group_image, ISO } from '../assets/index.js'

const AboutUs = () => {
  return (
    <div class="py-24 bg-white">
      

      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <img src={ISO} alt="image" loading="lazy" width="" height="100px" />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Codexintern registered under MSME and also ISO certified</h2>
            <p class="mt-6 text-gray-600">At Codexintern, we are dedicated to transforming tech enthusiasts into industry-ready professionals. As a pioneering IT consultancy and training firm, we provide top-notch training and internships in web and app development, covering full-stack, frontend, and backend domains.</p>
            <p class="mt-4 text-gray-600"> Our mission is to deliver affordable, quality content and hands-on experience through live classes, real-world projects, and mentorship. Whether you're a beginner or advancing your skills, Codexintern is your gateway to a successful tech career.</p>
            <p class="mt-4 text-gray-600">
            It is registered MSME <b>(UDYAM Registration No: UDYAM-WB-10-0127565)</b> and an ISO 9001:2015 certified organization <b>(Certificate ID: QMS/0B04/1124)</b>, we uphold the highest standards in educational quality and operational excellence. Our ISO certification reflects our dedication to maintaining and continuously improving our offerings. Anyone interested in verifying our ISO certification’s authenticity can do so at <b className='underline'><a href="https://uasl.uk.com/certifiedorganization/" target='_blank'>https://uasl.uk.com/certifiedorganization/</a></b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
