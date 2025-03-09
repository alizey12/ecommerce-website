import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <div className="logo">
        <img src="logo.png" alt="Brand Logo" className="h-12" />
      </div>
      <div className="search-bar flex">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-l"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r">Search</button>
      </div>
      <nav className="menu">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Clothings</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Men's wear</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Summer clothing</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;