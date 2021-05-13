import React from "react"
import { ToggleDarkMode } from '../../components/ToggleDarkMode'
import "../../styles/index.css";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <div className="min-h-screen dark:bg-gray-700 dark:text-gray-200">
        <div className="w-11/12 md:w-3/5 mx-auto relative">
          <nav className="absolute right-0 my-5">
            <ToggleDarkMode />
          </nav>
          <div className="py-16">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
