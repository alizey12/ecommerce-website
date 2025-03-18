import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";

const Layout = () => {
  return (
    <> 
    <Header />
    <div className="flex mx-20 bg-black  flex-col ">
      <main className="flex-grow ">
        <HeroPage />
      </main>
    </div>
          <Footer />

    </>
  );
}

export default Layout;
