export default function CategorySection() {
    return (
      <div className="flex w-full bg-white p-4 shadow-md h-[300px]">
        {/* Left Sidebar */}
        <div className="md:w-1/5 lg:w-1/4 xl:w-1/6 bg-gray-100 p-4 space-y-2 rounded-lg flex flex-col">
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
              className={`p-2 text-gray-700 cursor-pointer rounded-md transition-all ${
                index === 0 ? "font-bold bg-white shadow-md" : "hover:bg-white hover:shadow-lg"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
  
        {/* Banner Section */}
        <div className="md:w-3/5 lg:w-/2 xl:w-3/5 p-4">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {/* Background Image */}
            <img
              src="src/assets/Banner-board-800x420 2.png"
              alt="Electronics"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center p-6">
              <div className="w-2/3 text-white">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Latest trending</h2>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Electronic items</h1>
                <button className="mt-4 px-4 py-2 bg-white text-black rounded-md shadow">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Sidebar */}
        <div className="md:w-1/5 lg:w-1/6 xl:w-1/5 space-y-4 flex flex-col justify-between">
          {/* User Box */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
            <p className="mt-2 text-gray-700">Hi, user let's get started</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md">Join now</button>
            <button className="mt-2 w-full bg-blue-100 text-blue-500 py-2 rounded-md">Log in</button>
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
  