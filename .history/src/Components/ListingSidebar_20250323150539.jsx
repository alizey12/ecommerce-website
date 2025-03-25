import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ListingSidebar = () => {
  // Toggle states for each section
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);
  const [isConditionOpen, setIsConditionOpen] = useState(true);
  const [isRatingsOpen, setIsRatingsOpen] = useState(true);

  // State for "See All" functionality
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Price range state
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(400);

  // Data
  const categories = [
    "Mobile Accessory", "Electronics", "Smartphones", "Modern Tech",
    "Laptops", "Tablets", "Wearables", "Audio", "Cameras", "Gaming"
  ];
  const brands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo", "Xiaomi", "OnePlus", "Google"];
  const features = ["Metallic", "Plastic Cover", "8GB RAM", "Super Power", "Large Memory", "Waterproof", "Wireless Charging"];
  const conditions = ["Any", "Refurbished", "Brand New", "Old Items"];
  const ratings = [5, 4, 3, 2]; // Ratings from 5 to 2 stars
  const initialCount = 4; // Number of items to show initially

  // Handle section toggle
  const toggleSection = (section) => {
    switch (section) {
      case "categories":
        setIsCategoriesOpen(!isCategoriesOpen);
        setShowAllCategories(false);
        break;
      case "brands":
        setIsBrandsOpen(!isBrandsOpen);
        setShowAllBrands(false);
        break;
      case "features":
        setIsFeaturesOpen(!isFeaturesOpen);
        setShowAllFeatures(false);
        break;
      case "price":
        setIsPriceRangeOpen(!isPriceRangeOpen);
        break;
      case "condition":
        setIsConditionOpen(!isConditionOpen);
        break;
      case "ratings":
        setIsRatingsOpen(!isRatingsOpen);
        break;
      default:
        break;
    }
  };

  // Update the range track style
  useEffect(() => {
    const minPercent = (minValue / 400) * 100;
    const maxPercent = (maxValue / 400) * 100;
    const rangeTrack = document.getElementById("rangeTrack");

    if (rangeTrack) {
      rangeTrack.style.left = `${minPercent}%`;
      rangeTrack.style.right = `${100 - maxPercent}%`;
    }
  }, [minValue, maxValue]);

  // Handle changes in the min range input
  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= maxValue - 10) {
      setMinValue(newMin);
    }
  };

  // Handle changes in the max range input
  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= minValue + 10) {
      setMaxValue(newMax);
    }
  };

  return (
    <aside className="w-1/6 ml-20 p-4 border-r hidden lg:block">
      {/* Category Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("categories")}>
          <h3 className="text-lg font-bold">Category</h3>
          {isCategoriesOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isCategoriesOpen && (
          <>
            <ul className="space-y-1 text-gray-600 mt-2">
              {(showAllCategories ? categories : categories.slice(0, initialCount)).map((category, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-500">{category}</li>
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

      {/* Price Range Section */}
      <div className="w-[250px] bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">PRICE RANGE</h2>

        <div className="relative mt-4 slider-container">
          {/* Min Range Input */}
          <input
            type="range"
            min="0"
            max="400"
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full bg-transparent pointer-events-none z-2"
          />

          {/* Max Range Input */}
          <input
            type="range"
            min="0"
            max="400"
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full bg-transparent pointer-events-none z-2"
          />

          {/* Custom Track */}
          <div className="relative w-full h-2 bg-gray-200 rounded-md">
            <div id="rangeTrack" className="absolute h-2 bg-gradient-to-r from-blue-900 to-blue-400 rounded-md"></div>
          </div>
        </div>

        {/* Min and Max Price Display */}
        <div className="flex justify-between mt-3 text-gray-600">
          <span>Min Price: ${minValue}</span>
          <span>Max Price: ${maxValue}</span>
        </div>
      </div>
      <hr />

      {/* Condition Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("condition")}>
          <h3 className="text-lg font-bold">Condition</h3>
          {isConditionOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isConditionOpen && (
          <ul className="mt-2 space-y-1">
            {conditions.map((condition, index) => (
              <li key={index}><input type="radio" name="condition" className="mr-2" />{condition}</li>
            ))}
          </ul>
        )}
      </div>
      <hr />

      {/* Ratings Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("ratings")}>
          <h3 className="text-lg font-bold">Ratings</h3>
          {isRatingsOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>
        {isRatingsOpen && (
          <ul className="mt-2 space-y-1">
            {ratings.map((stars, index) => (
              <li key={index}><input type="checkbox" className="mr-2" />{"⭐".repeat(stars)}</li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ListingSidebar;
