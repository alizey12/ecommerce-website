import React, { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src="logo.png" alt="Brand Logo" className="h-10" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded-l"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r">Search</button>
        </div>

        {/* User Profile and Cart */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">Profile</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Message</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Orders</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">My cart</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              <li><a href="#" className="block text-gray-700 hover:text-blue-500">Profile</a></li>
              <li><a href="#" className="block text-gray-700 hover:text-blue-500">Message</a></li>
              <li><a href="#" className="block text-gray-700 hover:text-blue-500">Orders</a></li>
              <li><a href="#" className="block text-gray-700 hover:text-blue-500">My cart</a></li>
            </ul>
          </nav>
          <div className="px-4 py-2">
            <select className="w-full p-2 border border-gray-300 rounded">
              <option>English, USD</option>
              <option>Other Language</option>
            </select>
          </div>
          <div className="px-4 py-2">
            <button className="w-full p-2 bg-blue-500 text-white rounded">Ship to █️</button>
          </div>
        </div>
      )}

      {/* All Category Links */}
      <div className="hidden md:flex bg-gray-100 p-2">
        <nav className="container mx-auto">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Hot offers</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Gift boxes</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Projects</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Menu item</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Help</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;