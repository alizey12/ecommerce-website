import React from 'react'
import Header from "./Footer";
import Footer from './Header'
import HeroPage from "./HeroPage";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
       
      </main>
      <HeroPage />
      <Footer />
    </div>
  )
}

export default Layout
