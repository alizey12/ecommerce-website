import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import icons

const ListingSidebar = () => {
  // State for showing/hiding sections
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // State for selected brands and features
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

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

  const initialCount = 4; // Number of items to show initially

  // Handle checkbox change for brands
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Handle checkbox change for features
  const handleFeatureChange = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  return (
    <div>
      {/* Sidebar Selections */}
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
        <hr />

        {/* Brands Section */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowAllBrands(!showAllBrands)}
          >
            <h3 className="text-lg font-bold">Brands</h3>
            {showAllBrands ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
          </div>

          {showAllBrands && (
            <ul className="space-y-1 text-gray-600 mt-2">
              {brands.map((brand, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${index}`}
                    className="mr-2"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  <label htmlFor={`brand-${index}`}>{brand}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr />

        {/* Features Section */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
          >
            <h3 className="text-lg font-bold">Features</h3>
            {showAllFeatures ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
          </div>

          {showAllFeatures && (
            <ul className="space-y-1 text-gray-600 mt-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`feature-${index}`}
                    className="mr-2"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                  />
                  <label htmlFor={`feature-${index}`}>{feature}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr />
      </aside>
    </div>
  );
};

export default ListingSidebar;