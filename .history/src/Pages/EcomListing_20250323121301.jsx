import React, { useState } from "react";
// import { useState } from "react";
import { FaStar, FaRegHeart, FaFilter } from "react-icons/fa";
import { FiGrid, FiList } from "react-icons/fi";
import Header from './Header';
import Footer from './Footer'
const  EcomListing = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Data
  const categories = [
    "Mobile Accessory",
    "Electronics",
    "Smartphones",
    "Modern Tech",
    "Laptops",
    "Tablets",
    "Wearables",
    "Audio",
    "Cameras",
    "Gaming",
  ];

  const brands = ["Samsung", "Apple", "Huawei", "Pocoo", "Lenovo", "Xiaomi", "OnePlus", "Google"];

  const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory", "Waterproof", "Wireless Charging"];

  const initialCount = 4;

  return (
    <>
<Header />

{/* breadcrumb   */}
<nav class="flex m-6 px-16" aria-label="Breadcrumb">
<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
  <li class="inline-flex items-center">
    <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
      <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
      </svg>
      Home
    </a>
  </li>
  <li>
    <div class="flex items-center ">
      <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
      <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
    </div>
  </li>
  <li aria-current="page">
    <div class="flex items-center">
      <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
    </div>
  </li>
</ol>
</nav>


{/* Sidebar Selections   */}

    <aside className="w-1/5 p-4 border-r hidden lg:block">
      {/* Category Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Category</h3>
        <ul className="space-y-1 text-gray-600">
          {(showAllCategories ? categories : categories.slice(0, initialCount)).map(
            (category, index) => (
              <li key={index}>{category}</li>
            )
          )}
        </ul>
        {categories.length > initialCount && (
          <button
            className="text-blue-500 mt-2 hover:underline focus:outline-none"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? "See Less" : "See All"}
          </button>
        )}
      </div>

      {/* Brands Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Brands</h3>
        <ul className="space-y-1 text-gray-600">
          {(showAllBrands ? brands : brands.slice(0, initialCount)).map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ul>
        {brands.length > initialCount && (
          <button
            className="text-blue-500 mt-2 hover:underline focus:outline-none"
            onClick={() => setShowAllBrands(!showAllBrands)}
          >
            {showAllBrands ? "See Less" : "See All"}
          </button>
        )}
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Features</h3>
        <ul className="space-y-1 text-gray-600">
          {(showAllFeatures ? features : features.slice(0, initialCount)).map(
            (feature, index) => (
              <li key={index}>{feature}</li>
            )
          )}
        </ul>
        {features.length > initialCount && (
          <button
            className="text-blue-500 mt-2 hover:underline focus:outline-none"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
          >
            {showAllFeatures ? "See Less" : "See All"}
          </button>
        )}
      </div>
    </aside>



    <Footer />
    </>
  );
};

export default EcomListing ;