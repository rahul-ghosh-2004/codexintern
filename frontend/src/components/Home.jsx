import React from 'react'
import { home_bg_image } from '../assets/index.js'

const Home = () => {
  return (

    <div class="relative h-[750px] overflow-hidden bg-indigo-900">
      <img src={home_bg_image} class="absolute object-cover w-full h-full" />
      <div class="absolute inset-0 bg-black opacity-25">
      </div>
      <div class="container relative z-10 flex items-center justify-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
        <div class="relative z-10 flex flex-col items-center justify-between w-full">
          <p class="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
            Want to learn something ?
          </p>
          <p class="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white">
          At CodexIntern, we offer a variety of internship training programs designed to elevate your skills and prepare you for a successful career in tech. Whether you're looking to dive into Front-End Development, explore the versatility of Python, or master Java, we have you covered!
          </p>
        </div>
      </div>
    </div>

  )
}

export default Home
