import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";
import List from '../Pages/EcommerceListing'

const Layout = () => {
  return (
    <> 
    <Header />
    <div className="flex mx-24 bg-slate-100  flex-col ">
      <main className="flex-grow ">
        <HeroPage />
      </main>
    </div>
          <Footer />

    </>
  );
}

export default Layout;
