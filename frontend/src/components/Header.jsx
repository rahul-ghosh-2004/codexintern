import React from 'react'
import { logo } from '../assets/index.js'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [displayStyle, setDisplayStyle] = useState("none")

  const handleClick = () => {
    if (displayStyle === "block") {
      setDisplayStyle("none")
    } else {
      setDisplayStyle("block")
    }
  }

  return (
    <header class='flex shadow-md py-2 sm:px-10 font-[sans-serif] min-h-[50px] tracking-wide relative z-50 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-200 via-neutral-200 to-stone-100'>
      <div class='flex flex-wrap items-center gap-5 w-full'>
        <NavLink to={"/"}><img src={logo} alt="logo"
          class='h-12 max-lg:mr-5' />
        </NavLink>

        <div id="collapseMenu"
          class={`max-lg:hidden lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`} style={{display: displayStyle}}>

          <button id="toggleClose" class={`lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            class='lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li class='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src={logo} alt="logo" class='w-40' />
              </a>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'>
              <NavLink to={"/"}
                class='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'>Home</NavLink>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'><NavLink to={"internships"}
              class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Internship Program</NavLink>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'><NavLink to={"trainings"}
              class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Training Program</NavLink>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'><NavLink to={"verify"}
              class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Verify Certificate</NavLink>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'><NavLink to={"about"}
              class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>About Us</NavLink>
            </li>
            <li class='max-lg:border-b max-lg:py-3 px-3'><NavLink to={"contact"}
              class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Contact Us</NavLink>
            </li>
            {/* <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Contact</a>
            </li> */}
          </ul>
        </div>

        <div class='flex items-center max-lg:ml-auto space-x-6'>
          {/* <button
            class='px-4 py-2 text-[15px] rounded font-semibold text-[#007bff] border-2 border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent hover:text-white'>Sign
            up</button> */}

          <button id="toggleOpen" class={`lg:hidden`} onClick={handleClick}>
            <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                cliprule-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
