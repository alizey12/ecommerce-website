import React from 'react'

const HeroPage = () => {
  return (
    
    <div className="flex w-full bg-white p-4 shadow-md">
      {/* Left Sidebar */}
      <div className="w-1/5 bg-gray-100 p-4 space-y-2 rounded-lg">
        {[
          "Automobiles",
          "Clothes and wear",
          "Home interiors",
          "Computer and tech",
          "Tools, equipments",
          "Sports and outdoor",
          "Animal and pets",
          "Machinery tools",
          "More category",
        ].map((item, index) => (
          <div
            key={index}
            className={`p-2 text-gray-700 cursor-pointer ${
              index === 0 ? "font-bold bg-white shadow rounded-md" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="w-3/5 p-4">
        <div className="relative w-full h-48 bg-green-200 flex items-center rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Latest trending</h2>
            <h1 className="text-2xl font-bold">Electronic items</h1>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-md shadow">
              Learn more
            </button>
          </div>
          <img
            src="https://via.placeholder.com/200"
            alt="Electronics"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-32"
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/5 space-y-4">
        {/* User Box */}
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
          <p className="mt-2 text-gray-700">Hi, user let's get started</p>
          <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md">
            Join now
          </button>
          <button className="mt-2 w-full bg-blue-100 text-blue-500 py-2 rounded-md">
            Log in
          </button>
        </div>

        {/* Offer Boxes */}
        <div className="bg-orange-500 text-white p-4 rounded-lg text-center">
          Get US $10 off with a new supplier
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          Send quotes with supplier preferences
        </div>
      </div>
    </div>
  );
}



export default HeroPage
