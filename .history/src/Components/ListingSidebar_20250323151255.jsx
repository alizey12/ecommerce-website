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
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(999999);
  const [isOpen, setIsOpen] = useState(true);
  const minLimit = 0;
  const maxLimit = 999999;
  const minGap = 100;

  useEffect(() => {
    const minPercent = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
    const maxPercent = ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;
    
    document.getElementById("rangeTrack").style.left = `${minPercent}%`;
    document.getElementById("rangeTrack").style.right = `${100 - maxPercent}%`;
  }, [minValue, maxValue]);

  const handleMinChange = (e) => {
    let newMin = parseInt(e.target.value);
    if (newMin <= maxValue - minGap) {
      setMinValue(newMin);
    }
  };

  const handleMaxChange = (e) => {
    let newMax = parseInt(e.target.value);
    if (newMax >= minValue + minGap) {
      setMaxValue(newMax);
    }
  };


  return (
    <aside className="w-1/4 ml-20 p-4 border-r hidden lg:block">
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
     <div className="bg-white p-4 rounded-lg shadow-md">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">Price Range</h3>
        {isOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
      </div>

      {isOpen && (
        <div className="mt-3">
          <div className="relative mt-4">
            {/* Min Range */}
            <input
              type="range"
              min="0"
              max="999999"
              value={minValue}
              onChange={handleMinChange}
              className="absolute w-full bg-transparent pointer-events-none"
            />

            {/* Max Range */}
            <input
              type="range"
              min="0"
              max="999999"
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full bg-transparent pointer-events-none"
            />

            {/* Track */}
            <div className="relative w-full h-2 bg-gray-300 rounded-md">
              <div
                id="rangeTrack"
                className="absolute h-2 bg-blue-600 rounded-md transition-all"
              ></div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="flex justify-between mt-3">
            <input
              type="number"
              value={minValue}
              onChange={(e) => setMinValue(parseInt(e.target.value) || 0)}
              className="w-24 p-1 border rounded-md text-center"
            />
            <input
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(parseInt(e.target.value) || 999999)}
              className="w-24 p-1 border rounded-md text-center"
            />
          </div>

          {/* Apply Button */}
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Apply
          </button>
        </div>
      )}
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
