import React from "react"
import Layout from "../components/layout";
import { ToggleDarkMode } from '../components/ToggleDarkMode'
import "../styles/index.css";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="flex">
          <p>Hello World!</p>
        </div>
      </main>
    </Layout>
  )
}
