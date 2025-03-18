export default function HeroDeals() {
    const deals = [
      { id: 1, name: "Smart watches", discount: "-25%", image: "/src/assets/smartwatch.png" },
      { id: 2, name: "Laptops", discount: "-15%", image: "/src/assets/laptop.png" },
      { id: 3, name: "GoPro cameras", discount: "-40%", image: "/src/assets/gopro.png" },
      { id: 4, name: "Headphones", discount: "-25%", image: "/src/assets/headphones.png" },
      { id: 5, name: "Canon cameras", discount: "-25%", image: "/src/assets/canon.png" },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 my-5 w-full">
        <div className="flex items-center px-5 gap-6">
          {/* Deals Info */}
          <div className="w-1/4">
            <h2 className="text-xl font-bold">Deals and offers</h2>
            <p className="text-gray-500">Hygiene equipments</p>
            <div className="flex gap-2 mt-4">
              {["04 Days", "13 Hour", "34 Min", "56 Sec"].map((time, index) => (
                <div key={index} className="bg-gray-200 text-center px-3 py-2 rounded-md">
                  <p className="text-lg font-semibold">{time.split(" ")[0]}</p>
                  <p className="text-xs">{time.split(" ")[1]}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Deals List */}
          <div className="flex-1 grid grid-cols-5 gap-4">
            {deals.map((deal) => (
              <div key={deal.id} className="text-center border rounded-md p-4">
                <img src={deal.image} alt={deal.name} className="h-24 mx-auto" />
                <p className="mt-2">{deal.name}</p>
                <span className="bg-red-100 text-red-500 px-3 py-1 text-sm rounded-full">{deal.discount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  