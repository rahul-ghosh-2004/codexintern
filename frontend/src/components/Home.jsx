import React from 'react'
import {
  home_bg_image,
  buildYourBusiness,
  curriculam,
  handsOnExperience,
  mentorship,
  training,
  search,
  profile,
  review
} from '../assets/index.js'
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { Link } from "react-router-dom"


const Home = () => {
  return (

    <div>
      {/* Main */}
      <section className="overflow-hidden">
        <div className="absolute z-[-1] top-[13rem] left-[-8rem] ">
          <svg
            width="323"
            height="323"
            viewBox="0 0 323 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_51)">
              <circle
                cx="161.5"
                cy="161.5"
                r="161.5"
                fill="#DCF0FF"
                fillOpacity="0.25"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2_51"
                x="-12"
                y="-12"
                width="347"
                height="347"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_51"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_51"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="hidden md:block absolute z-[-1] top-[30rem] left-[50rem] w-[10rem] ">
          <svg
            width="100%"
            viewBox="0 0 323 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_51)">
              <circle
                cx="161.5"
                cy="161.5"
                r="161.5"
                fill="#DCF0FF"
                fillOpacity="0.25"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2_51"
                x="-12"
                y="-12"
                width="347"
                height="347"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_51"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_51"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="hidden lg:block absolute z-[-1] top-[12rem] right-[10rem] w-[10rem] ">
          <svg
            width="100%"
            viewBox="0 0 323 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_51)">
              <circle
                cx="161.5"
                cy="161.5"
                r="161.5"
                fill="#DCF0FF"
                fillOpacity="0.25"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2_51"
                x="-12"
                y="-12"
                width="347"
                height="347"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_51"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_51"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#7C76BB]">
              How to <span className="text-[#FF87B0]">level up</span> your Skills
            </h1>
            <p className="mt-6 mb-8 text-md sm:mb-12 lg:max-w-md xl:max-w-lg">
              Enhance your skills with Codexintern’s expert-led training programs and real-world projects. Equip yourself with the knowledge and experience needed to excel in today’s tech industry.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to={"/trainings"}
                className="px-8 py-3 text-lg font-semibold rounded text-white bg-[#7C76BB]"
              >
                Get Started
              </Link>
              <Link
                to={"contact"}
                className="px-8 py-3 text-gray-800 bg-white text-lg font-semibold border rounded border-[#7C76BB] hover:text-[#7C76BB] duration-300 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={buildYourBusiness}
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Icons */}
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <h2 className="text-3xl font-bold">Technologies we teach our students</h2>
        <div className="flex flex-wrap justify-center gap-y-5 gap-x-5 lg:justify-between container mx-auto shadow-md rounded-xl p-7 ">
          <IoLogoJavascript size={30} />
          <FaPython size={30} />
          <FaReact size={30} />
          <RiTailwindCssFill size={30} />
          <FaNodeJs size={30} />
          <SiExpress size={30} />
          <SiMongodb size={30} />
          <SiMysql size={30} />
          <BiLogoPostgresql size={30} />
          <SiPandas size={30} />
          <SiNumpy size={30} />
          <SiFlask size={30} />
          <SiSelenium size={30} />
          <SiTensorflow size={30} />
          <SiKeras size={30} />
        </div>
      </div>

      {/* Features */}
      <div className="relative overflow-hidden">
        {/* <div className="overflow-hidden w-full h-full">
          <img src="/Ellipse 9.svg" className="hidden lg:block absolute top-[19rem] right-[-10rem]" />
          <img src="/Ellipse 9.svg" className="hidden lg:block absolute z-[-1] top-0 left-[3rem] w-[15rem]" />
          <img src="/Ellipse 9.svg" className="hidden lg:block absolute top-[39rem] left-[3rem]" />
          <img src="/Ellipse 9.svg" className="hidden lg:block absolute z-[-1] top-[46rem] right-[10rem] w-[15rem]" />
        </div> */}

        <section className="p-4 lg:p-8">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
              <div className="flex items-center justify-center flex-1">
                <img src={curriculam} alt="" />
              </div>
              <div className="flex flex-col justify-center flex-1 px-6 py-12">
                <h2 className="text-3xl font-bold">Industry-Relevant Curriculum</h2>
                <p className="my-6">
                  Codexintern provides a carefully crafted curriculum designed to match the latest industry standards. It covers essential technologies and tools to ensure that students gain the practical knowledge required for real-world projects.
                </p>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
              <div className="flex items-center justify-center flex-1">
                <img src={handsOnExperience} alt="" />
              </div>
              <div className="flex flex-col justify-center flex-1 px-6 py-12">
                <h2 className="text-3xl font-bold">Hands-on Project Experience</h2>
                <p className="my-6">
                  Each training program includes project-based learning, allowing students to work on real-world applications. This hands-on experience ensures students can apply theoretical concepts and enhance their practical skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
              <div className="flex items-center justify-center flex-1">
                <img src={mentorship} alt="" />
              </div>
              <div className="flex flex-col justify-center flex-1 px-6 py-12">
                <h2 className="text-3xl font-bold">Expert Mentorship and Guidance</h2>
                <p className="my-6">
                  Students receive guidance from experienced industry professionals who provide personalized mentorship. This helps students navigate challenges, refine their skills, and get valuable insights into career development.
                </p>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
              <div className="flex items-center justify-center flex-1">
                <img src={training} alt="" />
              </div>
              <div className="flex flex-col justify-center flex-1 px-6 py-12">
                <h2 className="text-3xl font-bold">Training and Internship Programs</h2>
                <p className="my-6">
                  Codexintern offers a combination of training and internship programs, providing students with the opportunity to gain practical experience in real-world environments. These programs bridge the gap between academic learning and industry requirements, helping students build a strong portfolio for their careers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services */}
      <div className="container mx-auto my-3 w-full text-center flex flex-col justify-center items-center">
        <div>
          <h1 className="text-5xl text-[#7C76BB]">Our main services</h1>
          <p className="max-w-xl mt-5">
          Codexintern offers hands-on Training, Internships, and Bootcamps, teaching job-ready tech skills in areas like backend, frontend, and AI. With real-world projects, mentorship, and certifications, it’s perfect for building career-ready expertise.
          </p>
        </div>
        <div className="container mx-auto w-full flex flex-wrap p-2 items-center justify-center">
          <div className="w-[350px] my-2 mx-2 bg-[rgba(39, 163, 255, 0.16)] min-h-[450px]" style={{ background: 'rgba(39, 163, 255, 0.16)', boxShadow: '0px 14px 37px -10px rgba(179, 179, 179, 0.17)', borderRadius: '34px' }}>
            <img src={search} alt="Search Icon" />
            <div className="container px-[20px] w-full flex justify-center items-center text-left">
              Codexintern offers hands-on training programs in backend, frontend, full-stack development, and more. Students gain practical skills through live classes, projects, and internships, preparing them for successful careers in tech.
            </div>
            <Link to={"/trainings"}>
              <button className="p-2 my-4 rounded-xl border-2 border-black/70">Training</button>
            </Link>
          </div>

          <div className="w-[350px] my-2 mx-2 bg-[rgba(39, 163, 255, 0.16)] min-h-[450px]" style={{ background: 'rgba(39, 163, 255, 0.16)', boxShadow: '0px 14px 37px -10px rgba(179, 179, 179, 0.17)', borderRadius: '34px' }}>
            <img src={search} alt="Search Icon" />
            <div className="container px-[20px] w-full flex justify-center items-center text-left">
              Codexintern offers hands-on internships in frontend, backend, and full-stack development, providing real-world experience and mentorship to help interns build their skills and prepare for tech careers.
            </div>
            <Link to={"/internships"}>
              <button className="p-2 my-4 rounded-xl border-2 border-black/70">Internship</button>
            </Link>
          </div>

          <div className="w-[350px] my-2 mx-2 bg-[rgba(39, 163, 255, 0.16)] min-h-[450px]" style={{ background: 'rgba(39, 163, 255, 0.16)', boxShadow: '0px 14px 37px -10px rgba(179, 179, 179, 0.17)', borderRadius: '34px' }}>
            <img src={search} alt="Search Icon" />
            <div className="container px-[20px] w-full flex justify-center items-center text-left">
              Codexintern's upcoming Bootcamp offers intensive training in web development, AI/ML, and more. Through expert-led sessions, practical assignments, and hands-on projects, you'll gain job-ready skills in no time.
            </div>
            <Link to={"#"}>
              <button className="p-2 my-4 rounded-xl border-2 border-black/70">Bootcamp</button>
            </Link>
          </div>


        </div>
      </div>

      {/* Testimonials */}
      <div className="container flex items-center justify-center flex-col my-5 mx-auto">
        <h1 className="text-[#7C76BB] text-4xl font-bold">Reviews</h1>
        <div>
          {/*  */}
          <section>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                  <img src={review} alt="Awards" />
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md">
                        <p>
                        Joining Codexintern has been one of the best decisions in my learning journey! The training sessions are packed with real-world insights, and the projects truly challenge you to apply what you learn. From backend essentials to advanced web development techniques, this program gives you all the tools you need to succeed!
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img src={profile} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                          <div>
                            <p className="text-lg font-semibold">Sunil Thakur</p>
                            <p className="text-sm">Front-End Intern</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md">
                        <p>
                        Codexintern's internship program has been an eye-opener! The hands-on experience with industry-relevant projects and one-on-one guidance is unmatched. Not only did I learn new skills, but I also gained confidence to take on bigger challenges in my tech career!
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img src={profile} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                          <div>
                            <p className="text-lg font-semibold">Abhishek Kumar</p>
                            <p className="text-sm">Python Intern</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md">
                        <p>
                        A fantastic platform for college students looking to boost their skills! Codexintern combines practical training with an internship experience that makes you feel like a real developer. I completed my backend training here and am now much more job-ready – thank you, Codexintern!
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img src={profile} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                          <div>
                            <p className="text-lg font-semibold">Pabitra Pramanik</p>
                            <p className="text-sm">Back-End Trainee</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md">
                        <p>
                        The best part of Codexintern is the exceptional mentorship and support. I learned so much about Node.js, MongoDB, and API development in the backend program. The instructors make sure every concept is crystal clear, and the certificates are great for showcasing my new technical skills. Highly recommend!
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img src={profile} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                          <div>
                            <p className="text-lg font-semibold">Sunita Patra</p>
                            <p className="text-sm">Back-End Trainee</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>


    </div>

  )
}

export default Home
