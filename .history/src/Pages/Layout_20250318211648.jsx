import React from "react";
import { Outlet } from "react-router-dom"; // Important for nested routing
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <> 
      <Header />
      <div className="flex mx-24 bg-slate-100 flex-col">
        <main className="flex-grow">
          <Outlet /> {/* This renders the current page component */}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
