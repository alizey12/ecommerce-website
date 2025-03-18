export default function HeroDeals() {
    const deals = [
      { id: 1, name: "Smart watches", discount: "-25%", image: "src/assets/8.png" },
      { id: 2, name: "Laptops", discount: "-15%", image: "src/assets/7.png" },
      { id: 3, name: "GoPro cameras", discount: "-40%", image: "src/assets/6.png" },
      { id: 4, name: "Headphones", discount: "-25%", image: "src/assets/5.png" },
      { id: 5, name: "Canon cameras", discount: "-25%", image: "src/assets/3.png" },
    ];
  
    const items = [
        { id: 1, name: "Soft chairs", price: "USD 19", image: "/src/assets/soft-chair.png" },
        { id: 2, name: "Sofa & chair", price: "USD 19", image: "/src/assets/sofa-chair.png" },
        { id: 3, name: "Kitchen dishes", price: "USD 19", image: "/src/assets/kitchen-dishes.png" },
        { id: 4, name: "Smart watches", price: "USD 19", image: "/src/assets/smartwatch.png" },
        { id: 5, name: "Kitchen mixer", price: "USD 100", image: "/src/assets/kitchen-mixer.png" },
        { id: 6, name: "Blenders", price: "USD 39", image: "/src/assets/blender.png" },
        { id: 7, name: "Home appliance", price: "USD 19", image: "/src/assets/home-appliance.png" },
        { id: 8, name: "Coffee maker", price: "USD 10", image: "/src/assets/coffee-maker.png" },
    ]    
    const electronicsItems = [
        { id: 1, name: "Soft chairs", price: "USD 19", image: "/src/assets/soft-chair.png" },
        { id: 2, name: "Sofa & chair", price: "USD 19", image: "/src/assets/sofa-chair.png" },
        { id: 3, name: "Kitchen dishes", price: "USD 19", image: "/src/assets/kitchen-dishes.png" },
        { id: 4, name: "Smart watches", price: "USD 19", image: "/src/assets/smartwatch.png" },
        { id: 5, name: "Kitchen mixer", price: "USD 100", image: "/src/assets/kitchen-mixer.png" },
        { id: 6, name: "Blenders", price: "USD 39", image: "/src/assets/blender.png" },
        { id: 7, name: "Home appliance", price: "USD 19", image: "/src/assets/home-appliance.png" },
        { id: 8, name: "Coffee maker", price: "USD 10", image: "/src/assets/coffee-maker.png" },
    ]
    return (
        <>
        {/* Deals and Offers Section   */}
      <div className="bg-white rounded-lg shadow-md p-6  my-5 w-full">
        <div className="flex items-center gap-6">
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

 {/* Home and Outdoor section  */}


    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Banner */}
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-start">
          <h2 className="text-xl font-bold">Home and outdoor</h2>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">Source now</button>
        </div>

        {/* Items Grid */}
        <div className="col-span-2 grid grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded-md flex flex-col items-center text-center">
              <img src={item.image} alt={item.name} className="h-20 mb-2" />
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm">From {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  









 {/* Consumer Electronics and Gagets section */}



 <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Banner */}
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-start">
          <h2 className="text-xl font-bold">Home and outdoor</h2>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">Source now</button>
        </div>

        {/* Items Grid */}
        <div className="col-span-2 grid grid-cols-4 gap-4">
          {items.map((E) => (
            <div key={item.id} className="border p-4 rounded-md flex flex-col items-center text-center">
              <img src={item.image} alt={item.name} className="h-20 mb-2" />
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm">From {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>



{/* Inquiery section */}






      </>
    );
  }
  