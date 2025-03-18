import React from 'react';
import Header from "./Header";  // ✅ Correct import
import Footer from "./Footer";  // ✅ Correct import
import HeroPage from "./HeroPage";

const Layout = () => {
  return (
    <div className="flex px-10 bg-gra flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroPage />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
