import React from 'react'
import Header from "./Footer";
import Footer from './Header'
import {  } from "./";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
       <HeroPage />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
