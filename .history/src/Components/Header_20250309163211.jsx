import React, { useState } from 'react';
import { FaSearch, FaUser, FaEnvelope, FaShoppingCart, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Brand and Search */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Brand</div>
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Navigation and User Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-700" />
              <span>Profile</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-700" />
              <span>Message</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShoppingCart className="text-gray-700" />
              <span>My cart</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            <FaBars className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-700" />
                <span>Profile</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-700" />
                <span>Message</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="text-gray-700" />
                <span>My cart</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories and Language */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center border-t">
        <div className="flex items-center space-x-4">
          <div className="text-sm font-semibold">All category</div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Hot offers</span>
            <span>Gift boxes</span>
            <span>Projects</span>
            <span>Menu item</span>
            <span>Help</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">English, USD</span>
          <span className="text-sm">Ship to</span>
        </div>
      </div>
    </header>
  );
};

export default Header;