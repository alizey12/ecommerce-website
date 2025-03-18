import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";

const Layout = () => {
  return (
    <div className="flex  bg-black  flex-col min-h-screen">
      <Header className="" />
      <main className="flex-grow w-full">
        <HeroPage />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
