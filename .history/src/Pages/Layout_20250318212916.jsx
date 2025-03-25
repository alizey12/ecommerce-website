import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";
import  from "./ecommerceListing";

const Layout = () => {
  return (
    <> 
    <Header />
    <div className="flex mx-24 bg-slate-100  flex-col ">
      <main className="flex-grow ">
        <HeroPage />
      </main>
    </div>
    <ecommerceListing />
          <Footer />

    </>
  );
}

export default Layout;
