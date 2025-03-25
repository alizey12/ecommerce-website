import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; 

const ListingSidebar = () => {
  // State for toggling sections
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);

  // State for "See All" functionality
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Data
  const categories = ["Mobile Accessory", "Electronics", "Smartphones", "Modern Tech", "Laptops", "Tablets", "Wearables", "Audio", "Cameras", "Gaming"];
  const brands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo", "Xiaomi", "OnePlus", "Google"];
  const features = ["Metallic", "Plastic Cover", "8GB RAM", "Super Power", "Large Memory", "Waterproof", "Wireless Charging"];
  const initialCount = 4; // Number of items to show initially

  // Handle section toggle (closes the section & hides "See All")
  const toggleSection = (section) => {
    switch (section) {
      case "categories":
        setIsCategoriesOpen(!isCategoriesOpen);
        setShowAllCategories(false); // Hide "See All"
        break;
      case "brands":
        setIsBrandsOpen(!isBrandsOpen);
        setShowAllBrands(false); // Hide "See All"
        break;
      case "features":
        setIsFeaturesOpen(!isFeaturesOpen);
        setShowAllFeatures(false); // Hide "See All"
        break;
      default:
        break;
    }
  };

  return (
    <aside className="w-1/6 ml-20 p-4 border-r hidden lg:block">
      {/* 📌 Category Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("categories")}>
          <h3 className="text-lg font-bold">Category</h3>
          {isCategoriesOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isCategoriesOpen && (
          <>
            <ul className="space-y-1 text-gray-600 mt-2">
              {(showAllCategories ? categories : categories.slice(0, initialCount)).map((category, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-500">
                  {category}
                </li>
              ))}
            </ul>
            {categories.length > initialCount && (
              <button className="text-blue-500 mt-2 hover:underline focus:outline-none" onClick={() => setShowAllCategories(!showAllCategories)}>
                {showAllCategories ? "See Less" : "See All"}
              </button>
            )}
          </>
        )}
      </div>
      <hr />

      {/* 📌 Brands Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("brands")}>
          <h3 className="text-lg font-bold">Brands</h3>
          {isBrandsOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isBrandsOpen && (
          <>
            <ul className="space-y-1 text-gray-600 mt-2">
              {(showAllBrands ? brands : brands.slice(0, initialCount)).map((brand, index) => (
                <li key={index}>{brand}</li>
              ))}
            </ul>
            {brands.length > initialCount && (
              <button className="text-blue-500 mt-2 hover:underline focus:outline-none" onClick={() => setShowAllBrands(!showAllBrands)}>
                {showAllBrands ? "See Less" : "See All"}
              </button>
            )}
          </>
        )}
      </div>
      <hr />

      {/* 📌 Features Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("features")}>
          <h3 className="text-lg font-bold">Features</h3>
          {isFeaturesOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isFeaturesOpen && (
          <>
            <ul className="space-y-1 text-gray-600 mt-2">
              {(showAllFeatures ? features : features.slice(0, initialCount)).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {features.length > initialCount && (
              <button className="text-blue-500 mt-2 hover:underline focus:outline-none" onClick={() => setShowAllFeatures(!showAllFeatures)}>
                {showAllFeatures ? "See Less" : "See All"}
              </button>
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export default ListingSidebar;
