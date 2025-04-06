import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ListingSidebar = ({ onFilterChange }) => {
  // Section toggle states
  const [openSections, setOpenSections] = useState({
    categories: true,
    brands: true,
    features: true,
    price: true,
    condition: true,
    ratings: true
  });

  // "See All" states
  const [showAll, setShowAll] = useState({
    categories: false,
    brands: false,
    features: false
  });

  // Filter states
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    condition: "Any",
    ratings: [],
    priceRange: { min: 0, max: 1000 }
  });

  // Data
  const filterOptions = {
    categories: ["Audio", "Smartphones", "Laptops", "Wearables", "Cameras", "Tablets", "Gaming"],
    brands: ["Apple", "Samsung", "Sony", "Lenovo", "Xiaomi", "Huawei", "OnePlus", "JBL", "Canon"],
    features: ["Wireless", "Noise Cancelling", "Bluetooth", "5G", "Waterproof", "GPS", "Touch Controls"],
    conditions: ["Any", "Brand New", "Refurbished"],
    ratings: [5, 4, 3],
    initialCount: 4
  };

  // Toggle section visibility
  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
    // Reset "See All" when collapsing
    if (!openSections[section]) {
      setShowAll(prev => ({
        ...prev,
        [section]: false
      }));
    }
  };

  // Toggle "See All" for a section
  const toggleShowAll = (section) => {
    setShowAll(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle filter changes
  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters };
    
    if (type === 'priceRange') {
      newFilters.priceRange = value;
    } else if (type === 'condition') {
      newFilters.condition = value;
    } else {
      // For arrays (categories, brands, features, ratings)
      newFilters[type] = newFilters[type].includes(value)
        ? newFilters[type].filter(item => item !== value)
        : [...newFilters[type], value];
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Render filter section
  const renderFilterSection = (type, title, items) => {
    const isOpen = openSections[type];
    const showAllItems = showAll[type];
    const visibleItems = showAllItems ? items : items.slice(0, filterOptions.initialCount);

    return (
      <div className="mb-6">
        <div 
          className="flex items-center justify-between cursor-pointer" 
          onClick={() => toggleSection(type)}
        >
          <h3 className="text-lg font-bold">{title}</h3>
          {isOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>

        {isOpen && (
          <>
            <ul className="space-y-2 mt-2">
              {visibleItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type={type === 'condition' ? 'radio' : 'checkbox'}
                    name={type === 'condition' ? 'condition' : undefined}
                    checked={
                      type === 'condition' 
                        ? filters.condition === item 
                        : filters[type].includes(item)
                    }
                    onChange={() => handleFilterChange(type, item)}
                    className="mr-2"
                  />
                  <span className={type === 'ratings' ? 'flex items-center' : ''}>
                    {type === 'ratings' ? '⭐'.repeat(item) : item}
                  </span>
                </li>
              ))}
            </ul>
            {items.length > filterOptions.initialCount && (
              <button 
                className="text-blue-500 mt-2 hover:underline focus:outline-none"
                onClick={() => toggleShowAll(type)}
              >
                {showAllItems ? "See Less" : "See All"}
              </button>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <aside className="w-72 p-4 border-r hidden lg:block">
      {/* Categories */}
      {renderFilterSection('categories', 'Category', filterOptions.categories)}
      <hr />

      {/* Brands */}
      {renderFilterSection('brands', 'Brands', filterOptions.brands)}
      <hr />

      {/* Features */}
      {renderFilterSection('features', 'Features', filterOptions.features)}
      <hr />

      {/* Price Range */}
      <div className="mb-6">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={() => toggleSection('price')}
        >
          <h3 className="text-lg font-bold">Price Range</h3>
          {openSections.price ? <FaChevronDown className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
        </div>
        
        {openSections.price && (
          <div className="mt-4">
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
              <div 
                className="absolute h-2 bg-blue-500 rounded-full"
                style={{
                  left: `${(filters.priceRange.min / 1000) * 100}%`,
                  right: `${100 - (filters.priceRange.max / 1000) * 100}%`
                }}
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange.min}
                onChange={(e) => handleFilterChange('priceRange', {
                  min: parseInt(e.target.value),
                  max: filters.priceRange.max
                })}
                className="absolute w-full h-2 opacity-0 cursor-pointer"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange.max}
                onChange={(e) => handleFilterChange('priceRange', {
                  min: filters.priceRange.min,
                  max: parseInt(e.target.value)
                })}
                className="absolute w-full h-2 opacity-0 cursor-pointer"
              />
            </div>

            <div className="flex justify-between mt-4">
              <div className="w-5/12">
                <label className="block text-sm text-gray-600 mb-1">Min</label>
                <input
                  type="number"
                  min="0"
                  max={filters.priceRange.max - 10}
                  value={filters.priceRange.min}
                  onChange={(e) => handleFilterChange('priceRange', {
                    min: parseInt(e.target.value),
                    max: filters.priceRange.max
                  })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="w-5/12">
                <label className="block text-sm text-gray-600 mb-1">Max</label>
                <input
                  type="number"
                  min={filters.priceRange.min + 10}
                  max="1000"
                  value={filters.priceRange.max}
                  onChange={(e) => handleFilterChange('priceRange', {
                    min: filters.priceRange.min,
                    max: parseInt(e.target.value)
                  })}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />

      {/* Condition */}
      {renderFilterSection('condition', 'Condition', filterOptions.conditions)}
      <hr />

      {/* Ratings */}
      {renderFilterSection('ratings', 'Ratings', filterOptions.ratings)}
    </aside>
  );
};

export default ListingSidebar;