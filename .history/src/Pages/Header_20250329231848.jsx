import { useState, useRef, useEffect } from 'react';
import { FaSearch, FaUser, FaEnvelope, FaHeart, FaShoppingCart, FaChevronDown, FaBars, FaChevronUp } from 'react-icons/fa';
import { useNavigate, Link } from "react-router-dom";
import EcommerceListing from './EcomListing';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const COUNTRIES = [
    { code: "US", name: "United States", flag: "/flags/us.png" },
    { code: "GB", name: "United Kingdom", flag: "/flags/gb.png" },
    { code: "CA", name: "Canada", flag: "/flags/ca.png" },
    { code: "AU", name: "Australia", flag: "/flags/au.png" },
    { code: "DE", name: "Germany", flag: "/flags/de.png" },
    { code: "FR", name: "France", flag: "/flags/fr.png" },
  ];

  const LanguageAndCountrySelector = () => {
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowCountryDropdown(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const toggleCountryDropdown = () => {
      setShowCountryDropdown(!showCountryDropdown);
    };
  
    const handleCountrySelect = (country) => {
      setSelectedCountry(country);
      setShowCountryDropdown(false);
    };

    return (
      <div className="flex space-x-6">
        <div className="flex items-center space-x-1 text-gray-600 cursor-pointer">
          <span className="font-bold">English, USD</span>
          <FaChevronDown className="text-xs" />
        </div>

        <div className="relative" ref={dropdownRef}>
          <div 
            className="flex items-center space-x-1 text-gray-600 cursor-pointer"
            onClick={toggleCountryDropdown}
          >
            <span className="font-bold">Ship to</span>
            <span className="font-bold flex items-center">
              <img 
                src={selectedCountry.flag} 
                alt={selectedCountry.name} 
                className="w-5 h-5 mx-1 object-contain"
              />
            </span>
            {showCountryDropdown ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
          </div>

          {showCountryDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="py-1 max-h-60 overflow-auto">
                {COUNTRIES.map((country) => (
                  <div
                    key={country.code}
                    className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                      selectedCountry.code === country.code ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`}
                    onClick={() => handleCountrySelect(country)}
                  >
                    <img 
                      src={country.flag} 
                      alt={country.name} 
                      className="w-5 h-5 mr-2 object-contain"
                    />
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <header className="px-14 bg-white">
      <div className="flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src='src/assets/logo-colored.png' alt="Logo" className="text-2xl font-bold text-blue-500" />
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center border-2 rounded-lg overflow-hidden border-blue-500 border-solid w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-full outline-none"
          />
          <select className="p-2 border-l outline-none">
            <option value="">Select Category</option>
            <option value="all">All Category</option>
          </select>
          <button className="bg-blue-500 border-l outline-none p-2 w-40 text-white">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex flex-col items-center text-gray-400 text-md">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </div>
          <div className="hidden md:flex flex-col items-center text-gray-400 text-md">
            <FaEnvelope className="text-lg" />
            <span>Message</span>
          </div>
          <div className="hidden md:flex flex-col items-center text-gray-400 text-md">
            <FaHeart className="text-lg" />
            <span>Orders</span>
          </div>
          <div className="hidden md:flex flex-col items-center text-gray-400 text-md">
            <FaShoppingCart className="text-lg" />
            <span>My cart</span>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
      <hr className="border-t border-gray-300 w-[calc(100%+5rem)] -mx-10" />

      {/* Bottom Menu */}
      <nav className={`md:flex items-center justify-between px-10 py-4 text-gray-700`}>
        {/* Left Side Menu */}
        <div className="flex space-x-4 items-center">
          <span className="flex font-bold items-center space-x-1 cursor-pointer">
            <FaBars /> <Link to="/EcomListing">All category</Link>
          </span>
          <span className="font-bold">Hot offers</span>
          <span className="font-bold">Gift boxes</span>
          <span className="font-bold">Projects</span>
          <span className="font-bold">Menu item</span>
          <span className="flex items-center space-x-1">
            <span className="font-bold">Help</span> <FaChevronDown />
          </span>
        </div>

        {/* Right Side Options (Language & Shipping) */}
        <LanguageAndCountrySelector />
      </nav>
      <hr className="border-t border-gray-300 w-[calc(100%+5rem)] -mx-10" />
    </header>
  );
}