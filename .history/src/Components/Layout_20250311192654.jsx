import React from 'react'
import Header from "./";
import Footer from './Components/Footer'
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
