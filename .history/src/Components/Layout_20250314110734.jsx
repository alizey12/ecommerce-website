import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";

const Layout = () => {
  return (
    <div className="flex px-10 flex-col min-h-screen">
      <Header />
      <main className="flex-grow  bg-gray-100">
        <HeroPage />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
