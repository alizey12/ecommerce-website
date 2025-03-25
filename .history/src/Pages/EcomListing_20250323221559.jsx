import { FaStar, FaRegHeart, FaFilter } from "react-icons/fa";
import React, { useState } from "react";

import { FiGrid, FiList } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import ListingSidebar from "../Components/ListingSidebar";
import ProductListing from "../Components/ProductsListing";
import productsByCategory from "../Pages/Products";

const EcomListing = () => {
  const [view, setView] = useState("grid");

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <nav className="flex m-6 px-20" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-1 text-gray-400">/</span>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Products
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex bg-orange-200 mx-20">
        <ListingSidebar />
        <div>
        <div className="flex items-center justify-between bg-white p-4 border-b shadow-sm">
      <p className="text-lg font-medium">
        12,911 items in <span className="font-bold">Mobile accessory</span>
      </p>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="hidden" checked readOnly />
          <span className="w-5 h-5 flex items-center justify-center border rounded bg-blue-600 text-white">✔</span>
          Verified only
        </label>
        <select className="border px-3 py-1 rounded-md focus:outline-none">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest Arrivals</option>
        </select>
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 border rounded ${view === "grid" ? "bg-gray-200" : ""}`}
          >
            <FaTh />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 border rounded ${view === "list" ? "bg-gray-200" : ""}`}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
    <ProductListing className="col-span-3" products={productsByCategory.allProducts} />

        </div>
      </div>

      <Footer />
    </>
  );
};

export default EcomListing;
