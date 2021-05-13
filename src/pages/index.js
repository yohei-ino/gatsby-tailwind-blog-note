import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="h-full w-full mx-auto my-0 p-2">
          <div>
            <div className="flex justify-center items-center my-5">
              <Link className="px-2" to="/">Home</Link>
              <Link className="px-2" to="/about">About</Link>
              <Link className="px-2" to="/blog">Blog</Link>
            </div>
            <p>Hello World!</p>
          </div>
        </div>
      </main >
    </Layout >
  )
}
