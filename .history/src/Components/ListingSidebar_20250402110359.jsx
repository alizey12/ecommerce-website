import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ListingSidebar = ({ onFilterChange }) => {
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

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("Any");
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 999999
  });

  // Data
  const categories = [
    "Mobile Accessory", "Electronics", "Smartphones", "Modern Tech",
    "Laptops", "Tablets", "Wearables", "Audio", "Cameras", "Gaming"
  ];
  const brands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo", "Xiaomi", "OnePlus", "Google"];
  const features = ["Metallic", "Plastic Cover", "8GB RAM", "Super Power", "Large Memory", "Waterproof", "Wireless Charging"];
  const conditions = ["Any", "Refurbished", "Brand New", "Old Items"];
  const ratings = [5, 4, 3, 2];
  const initialCount = 4;

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

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      onFilterChange({ categories: newCategories });
      return newCategories;
    });
  };

  // Handle brand selection
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => {
      const newBrands = prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand];
      onFilterChange({ brands: newBrands });
      return newBrands;
    });
  };

  // Handle feature selection
  const handleFeatureChange = (feature) => {
    setSelectedFeatures(prev => {
      const newFeatures = prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature];
      onFilterChange({ features: newFeatures });
      return newFeatures;
    });
  };

  // Handle condition selection
  const handleConditionChange = (condition) => {
    setSelectedCondition(condition);
    onFilterChange({ condition });
  };

  // Handle rating selection
  const handleRatingChange = (rating) => {
    setSelectedRatings(prev => {
      const newRatings = prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating];
      onFilterChange({ ratings: newRatings });
      return newRatings;
    });
  };

  // Handle price range change
  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
    onFilterChange({ priceRange: { min, max } });
  };

  return (
    <aside className="w-72 p-4 border-r hidden lg:block">
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
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  <span className="cursor-pointer hover:text-blue-500">{category}</span>
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

      {/* Brands Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection("brands")}>
          <h3 className="text-lg font-bold">Brands</h3>
          {isBrandsOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isBrandsOpen && (
          <>
            <ul className="space-y-1 text-gray-600 mt-2">
              {(showAllBrands ? brands : brands.slice(0, initialCount)).map((brand, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mr-2"
                  />
                  <span>{brand}</span>
                </li>
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
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                    className="mr-2"
                  />
                  <span>{feature}</span>
                </li>
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
      <div className="mb-6 w-56">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}>
          <h3 className="text-lg font-bold">Price Range</h3>
          {isPriceRangeOpen ? <FaChevronDown className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>
        {isPriceRangeOpen && (
          <div className="mt-2">
            <div className="relative w-full h-2 rounded-md bg-gray-200">
              <div 
                className="absolute h-2 rounded-md bg-blue-500"
                style={{
                  left: `${(priceRange.min / 999999) * 100}%`,
                  right: `${100 - (priceRange.max / 999999) * 100}%`
                }}
              ></div>
              <input
                type="range"
                min={0}
                max={999999}
                value={priceRange.min}
                onChange={(e) => handlePriceChange(parseInt(e.target.value), priceRange.max)}
                className="absolute w-full h-2 opacity-0 cursor-pointer"
              />
              <input
                type="range"
                min={0}
                max={999999}
                value={priceRange.max}
                onChange={(e) => handlePriceChange(priceRange.min, parseInt(e.target.value))}
                className="absolute w-full h-2 opacity-0 cursor-pointer"
              />
            </div>

            <div className="flex justify-between mt-3 text-sm">
              <div>
                <label>Min</label>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange(parseInt(e.target.value), priceRange.max)}
                  className="block w-full p-1 border rounded-md text-center"
                />
              </div>
              <div>
                <label>Max</label>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange(priceRange.min, parseInt(e.target.value))}
                  className="block w-full p-1 border rounded-md text-center"
                />
              </div>
            </div>
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
              <li key={index} className="flex items-center">
                <input
                  type="radio"
                  name="condition"
                  checked={selectedCondition === condition}
                  onChange={() => handleConditionChange(condition)}
                  className="mr-2"
                />
                <span>{condition}</span>
              </li>
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
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(stars)}
                  onChange={() => handleRatingChange(stars)}
                  className="mr-2"
                />
                <span>{"⭐".repeat(stars)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default ListingSidebar;