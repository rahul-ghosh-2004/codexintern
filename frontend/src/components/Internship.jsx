import React from 'react'
import { 
  frontend,
  backend,
  fullstack,
  python,
  aiml,
  java 
} from '../assets/index.js'

const Internship = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-wrap gap-x-5 gap-y-5 py-10'>
      <article className="w-96 overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
        <img
          alt=""
          src={frontend}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <a href="https://forms.gle/iLHGuhHfjgx9hnbA7" target='_blank'>
            <h3 className="mt-0.5 text-lg font-bold text-gray-900">Front-End Internship</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            "Kickstart your Front-End journey with Codexintern! 🚀
            Master HTML, CSS, JavaScript, and React to build stunning, responsive web apps.
            Get hands-on experience, real-world projects, and certificates to showcase your skills!"
          </p>
        </div>
      </article>

      <article className="w-96 overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
        <img
          alt=""
          src={backend}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <a href="https://forms.gle/xJVc9aHyVbkUQNk4A" target='_blank'>
            <h3 className="mt-0.5 text-lg font-bold text-gray-900">Back-End Internship</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            "Level up your Backend skills with Codexintern's intensive program! 🔥
            Learn Node.js, Express, MongoDB, and JWT for secure, scalable web applications.
            Gain practical experience, build a real-world project, and earn certificates to boost your portfolio!"
          </p>
        </div>
      </article>

      <article className="w-96 overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
        <img
          alt=""
          src={fullstack}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <a href="https://forms.gle/jVp2GBfWt27msdxC9" target='_blank'>
            <h3 className="mt-0.5 text-lg font-bold text-gray-900">Full Stack Internship</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            "Become a Full-Stack Developer with Codexintern's all-in-one program! 🌐
            Master both Front-End and Backend with HTML, CSS, JavaScript, React, Node.js, and MongoDB.
            Build complete projects, enhance your skills, and earn certifications to stand out in the tech world!"
          </p>
        </div>
      </article>

      <article className="w-96 overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
        <img
          alt=""
          src={python}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <a href="https://forms.gle/xxo8njV3svv1sLyh6" target='_blank'>
            <h3 className="mt-0.5 text-lg font-bold text-gray-900">Python Internship</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            "Step into the world of Python programming with Codexintern's hands-on internship! 🐍
            Master core Python, data handling, web development with Django, and automation techniques.
            Build projects, solve real-world problems, and earn certifications to kickstart your coding career!"
          </p>
        </div>
      </article>

      <article className="w-96 overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
        <img
          alt=""
          src={aiml}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <a href="https://forms.gle/zmNzBp9h8MZnWceq7" target='_blank'>
            <h3 className="mt-0.5 text-lg font-bold text-gray-900">AI/ML Internship</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            "Dive into AI & ML with Codexintern's specialized internship! 🤖
            Learn Python for Machine Learning, data preprocessing, model building, and AI algorithms.
            Gain hands-on experience, work on real projects, and earn certificates to lead in the world of AI!"
          </p>
        </div>
      </article>

      <article className="w-96 overflow-hidden rounded-lg shadow-2xl transition hover:shadow-lg">
        <img
          alt=""
          src={java}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <a href="https://forms.gle/nweY9RBFS18EpuDP7" target='_blank'>
            <h3 className="mt-0.5 text-lg font-bold text-gray-900">Java Internship</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            "Master Java with Codexintern’s immersive internship program! ☕
            Learn core Java, OOP principles, data structures, and backend development with Spring Boot.
            Build real-world projects, enhance your coding expertise, and earn certificates to power your career!"
          </p>
        </div>
      </article>
    </div>
  )
}

export default Internship
