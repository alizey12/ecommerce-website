import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex justify-between">
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Find store</a></li>
            <li><a href="#" className="hover:text-blue-400">Categories</a></li>
            <li><a href="#" className="hover:text-blue-400">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Partnership</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Find store</a></li>
            <li><a href="#" className="hover:text-blue-400">Categories</a></li>
            <li><a href="#" className="hover:text-blue-400">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Money Refund</a></li>
            <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">For users</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Login</a></li>
            <li><a href="#" className="hover:text-blue-400">Register</a></li>
            <li><a href="#" className="hover:text-blue-400">Settings</a></li>
            <li><a href="#" className="hover:text-blue-400">My Orders</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Get app</h3>
          <div className="app-stores flex space-x-4">
            <a href="#"><img src="app-store.png" alt="App Store" className="h-10" /></a>
            <a href="#"><img src="google-play.png" alt="Google Play" className="h-10" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center mt-8 pt-4 border-t border-gray-700">
        <p>© 2023 Ecommerce.</p>
      </div>
    </footer>
  );
};

export default Footer;