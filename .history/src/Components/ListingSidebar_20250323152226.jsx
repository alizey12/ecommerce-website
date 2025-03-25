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
    <aside className="w-1/5 ml-20 p-4 border-r hidden lg:block">
    
    
    
    
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


      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("brands")}>
          <h3 className="text-lg font-bold">Brands</h3>
          {isBrandsOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isBrandsOpen && (
          <>
            <ul className="space-y-1 text-gray-600 mt-2">
              {(showAllBrands ? brands : brands.slice(0, initialCount)).map((brand, index) => (
                <li key={index}><input type="checkbox" className="mr-2" />{brand}</li>
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

      {/* Features Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("features")}>
          <h3 className="text-lg font-bold">Features</h3>
          {isFeaturesOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isFeaturesOpen && (
          <>
            <ul className="space-y-1 text-gray-600 mt-2">
              {(showAllFeatures ? features : features.slice(0, initialCount)).map((feature, index) => (
                <li key={index}><input type="checkbox" className="mr-2" />{feature}</li>
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
      <hr />







      {/* Price Range Section */}
      <div className=" mb-6 w-56">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
          <h3 className="text-lg font-bold">Price </h3>
          {/* <span>{isOpen ? "\u25B2" : "\u25BC"}</span> */}
      </div>
      {isOpen && (
        <div className="mt-2">
          <div className="relative w-full h-2 rounded-md">
            <div
              id="rangeTrack"
              className="absolute  h-2 rounded-md"
            ></div>
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={minValue}
              onChange={handleMinChange}
              className="absolute w-full bg-transparent pointer-events-auto"
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full bg-transparent pointer-events-auto"
            />
          </div>

          <div className="flex justify-between mt-3  text-sm">
            <div>
              <label>Min</label>
              <input
                type="number"
                value={minValue}
                onChange={handleMinChange}
                className="block w-full p-1 border rounded-md text-center"
              />
            </div>
            <div>
              <label>Max</label>
              <input
                type="number"
                value={maxValue}
                onChange={handleMaxChange}
                className="block w-full p-1 border rounded-md text-center"
              />
            </div>
          </div>

          <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md">
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
