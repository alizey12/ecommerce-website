import React, { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const ListingSidebar = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(400);

  useEffect(() => {
    const minPercent = (minValue / 400) * 100;
    const maxPercent = (maxValue / 400) * 100;
    const rangeTrack = document.getElementById("rangeTrack");

    if (rangeTrack) {
      rangeTrack.style.left = `${minPercent}%`;
      rangeTrack.style.right = `${100 - maxPercent}%`;
    }
  }, [minValue, maxValue]);

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= maxValue - 10) {
      setMinValue(newMin);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= minValue + 10) {
      setMaxValue(newMax);
    }
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">PRICE RANGE</h2>

      <div className="relative mt-4 w-full">
        {/* Custom Track */}
        <div className="relative w-full h-2 bg-gray-200 rounded-md">
          <div
            id="rangeTrack"
            className="absolute h-2 bg-gradient-to-r from-blue-900 to-blue-400 rounded-md"
            style={{ left: "0%", right: "0%" }}
          ></div>
        </div>

        {/* Min and Max Range Inputs */}
        <div className="relative mt-2">
          <input
            type="range"
            min="0"
            max="400"
            value={minValue}
            onChange={handleMinChange}
            className="w-full cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="400"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-full cursor-pointer"
          />
        </div>
      </div>

      {/* Display Selected Min and Max Values */}
      <div className="flex justify-between mt-3 text-gray-600">
        <span>Min Price: ${minValue}</span>
        <span>Max Price: ${maxValue}</span>
      </div>
    </div>
  );
};

export default ListingSidebar;
