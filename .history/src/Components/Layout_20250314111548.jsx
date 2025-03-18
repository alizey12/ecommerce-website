import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";

const Layout = () => {
  return (
    <>
    <div className="flex px-10 flex-col min-h-screen">
      <Header />
      </div>
      <main className="flex-grow bg-slate-100 w-full">
        <HeroPage />
      </main>
      <Footer />
    
  );
}

export default Layout;
