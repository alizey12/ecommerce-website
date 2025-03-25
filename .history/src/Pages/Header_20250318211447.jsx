import { useState } from "react";
import { FaSearch, FaUser, FaEnvelope, FaHeart, FaShoppingCart, FaChevronDown, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    if (event.target.value === "all") {
      navigate("/ecommerceListing"); // Navigates to listing page
    }
  };

  return (
    <header className="px-14 bg-white">
      <div className="flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src="/assets/logo-colored.png" className="text-2xl font-bold text-blue-500" alt="Logo" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border-2 rounded-lg overflow-hidden border-blue-500 border-solid w-1/2">
          <input type="text" placeholder="Search" className="p-2 w-full outline-none" />
          <select className="p-2 border-l outline-none" onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="all">All Category</option>
          </select>
          <button className="bg-blue-500 border-l outline-none p-2 w-40 text-white">Search</button>
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
    </header>
  );
}
