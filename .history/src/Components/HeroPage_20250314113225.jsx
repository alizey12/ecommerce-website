export default function CategorySection() {
    return (
      <div className="flex w-full my-5 mx-8 justify-center shadow-md">
        {/* Left Sidebar */}
        <div className="w-1/5  p-4 space-y-2 rounded-lg">
          {["Automobiles", "Clothes and wear", "Home interiors", "Computer and tech", "Tools, equipments", "Sports and outdoor", "Animal and pets", "Machinery tools", "More category"].map((item, index) => (
            <div
             
              className={"p-2 text-gray-700 cursor-pointer rounded-md transition-all
                 "hover:bg-sky-100 hover:shadow-lg"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
  
        {/* Banner Section */}
        <div className="w-3/5 px-4">
          <div className="relative w-full h-[450px] overflow-hidden">
            {/* Background Image */}
            <img
              src="src/assets/Banner-board-800x420 2.png"
              alt="Electronics"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0  bg-opacity-30 flex items-center px-6">
              <div className="text-white">
                <h2 className="text-lg md:text-xl lg:text-2xl text-black font-medium">Latest trending</h2>
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">Electronic items</h1>
                <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-md shadow hover:bg-gray-100 active:bg-gray-200">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Sidebar */}
        <div className="w-1/5 space-y-4">
          {/* User Box */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
            <p className="mt-2 text-gray-700">Hi, user</p>
            <p className="text-gray-700">let's get started</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:bg-blue-700">
              Join now
            </button>
            <button className="mt-2 w-full bg-blue-100 text-blue-500 py-2 rounded-md hover:bg-blue-200 active:bg-blue-300">
              Log in
            </button>
          </div>
  
          {/* Offer Boxes */}
          <div className="bg-orange-500 text-white p-4 rounded-lg text-center hover:bg-orange-600 active:bg-orange-700">
            Get US $10 off with a new supplier
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 active:bg-green-700">
            Send quotes with supplier preferences
          </div>
        </div>
      </div>
    );
  }
  