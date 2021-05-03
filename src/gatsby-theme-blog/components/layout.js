import React from "react"
import { ToggleDarkMode } from '../../components/ToggleDarkMode'
import "../../styles/index.css";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <body className="min-h-screen dark:bg-gray-700 dark:text-gray-200">
        <ToggleDarkMode />
        {children}
      </body>
    </>
  )
}

export default Layout
