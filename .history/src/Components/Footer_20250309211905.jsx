import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-grey-400">
      <div className="container  mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-700 p-3 lg:grid-cols-6 gap-8">
        
        <div className="footer-section">
            
            <ul className="space-y-2 ">
            <img className="text-lg font-bold mb-4 p-4" src="src/assets/logo-colored.png" alt="" />

            <h5>Best Information about the company <br/> gies here but now lorem ipsum is</h5>
              <li><a href="#" className="hover:text-blue-400">Blogs</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Find store</a></li>
              <li><a href="#" className="hover:text-blue-400">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400">Blogs</a></li>
            </ul>
          </div>

          {/* Partnership Section */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Partnership</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Find store</a></li>
              <li><a href="#" className="hover:text-blue-400">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400">Blogs</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">Money Refund</a></li>
              <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact us</a></li>
            </ul>
          </div>

          {/* For Users Section */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">For users</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Login</a></li>
              <li><a href="#" className="hover:text-blue-400">Register</a></li>
              <li><a href="#" className="hover:text-blue-400">Settings</a></li>
              <li><a href="#" className="hover:text-blue-400">My Orders</a></li>
            </ul>
          </div>

          {/* Get App Section */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Get app</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-400">App Store</a>
              <a href="#" className="block hover:text-blue-400">Google Play</a>
            </div>
          </div>
        </div>

        {/* Copyright and Language Selection */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Ecommerce.</p>
          <div className="mt-4 md:mt-0">
            <select className="p-2 bg-gray-700 text-white rounded">
              <option>English</option>
              <option>Other Language</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;