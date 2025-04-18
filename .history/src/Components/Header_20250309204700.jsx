import { useState } from 'react';
import { FaSearch, FaUser, FaEnvelope, FaHeart, FaShoppingCart, FaChevronDown, FaBars } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md px-10">
      <div className="flex justify-between items-center p-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          
          <img src='src/assets/logo-colored.png' className="text-2xl font-bold text-blue-500"></img>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center border rounded-lg overflow-hidden  border-blue-500 border-solid w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-full outline-none"
          />
          <select className="p-2 border-l outline-none">
            <option>All category</option>
          </select>
          <button className="bg-blue-500 border-l outline-none p-2 w-40 text-white ">
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

      {/* Bottom Menu */}
      <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} px-10 py-4 space-x-4 text-gray-700 items-center` }>
        <span className="flex font-bold items-center space-x-1">
          <FaBars /> <span>All category</span>
        </span>
        <span className='font-bold'>Hot offers</span>
        <span className='font-bold'>Gift boxes</span>
        <span className='font-bold'>Projects</span>
        <span className='font-bold'>Menu item</span>
        <span className="flex items-center space-x-1">
          <span className='font-bold'>Help</span> <FaChevronDown />
        </span>
        <div className="flex items-center space-x-1 text-gray-600">
          <span className='font-bold'>English, USD</span>
          <FaChevronDown />
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <span className='font-bold'>Ship to</span>
          <span className='font-bold' role="img" aria-label="flag"><img src="" alt="" /></span>
          <FaChevronDown />
        </div>
      </nav>
    </header>
  );
}
