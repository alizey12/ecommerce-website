import React from 'react'
import { useState } from "react";
const ListingSidebar = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);
     const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]); // State for selected features
  const initialCount = 4; // Number of features to show initially

  const features = [
    "Metallic",
    "Plastic cover",
    "8GB Ram",
    "Super power",
    "Large Memory",
    "Waterproof",
    "Wireless Charging",
  ];
    
      const brands = ["Samsung", "Apple", "Huawei", "Pocoo", "Lenovo", "Xiaomi", "OnePlus", "Google"];
    
      const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory", "Waterproof", "Wireless Charging"];
    
      const initialCount = 4;
    
      const handleCheckboxChange = (feature) => {
        if (selectedFeatures.includes(feature)) {
          setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
        } else {
          setSelectedFeatures([...selectedFeatures, feature]);
        }
      };
  return (
    <div>
      

{/* Sidebar Selections   */}

<aside className="w-1/6 ml-20 p-4 border-r hidden lg:block">
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
<hr/>
      {/* Brands Section */}
      <aside className="w-1/4 p-4 border-r hidden lg:block">
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Features</h3>
        <ul className="space-y-1 text-gray-600">
          {(showAllFeatures ? features : features.slice(0, initialCount)).map(
            (feature, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`feature-${index}`}
                  className="mr-2"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => handleCheckboxChange(feature)}
                />
                <label htmlFor={`feature-${index}`}>{feature}</label>
              </li>
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
<hr />
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
    <hr />

    </div>
  )
}

export default ListingSidebar
