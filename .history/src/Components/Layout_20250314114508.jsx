import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";

const Layout = () => {
  return (
    <Header />
    <div className="flex mx-10 bg-black  flex-col min-h-screen">
      
      <main className="flex-grow ">
        <HeroPage />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
