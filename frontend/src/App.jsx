import React from 'react'
import { Home, Header, Footer } from "./components/xo.js"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App
