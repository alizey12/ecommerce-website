import { FaSearch, FaBox,FaRegEnvelope, FaShippingFast, FaShieldAlt } from "react-icons/fa";



export default function HeroDeals() {
    const deals = [
      { id: 1, name: "Smart watches", discount: "-25%", image: "src/assets/watch.png" },
      { id: 2, name: "Laptops", discount: "-15%", image: "src/assets/laptop.png" },
      { id: 3, name: "GoPro cameras", discount: "-40%", image: "src/assets/camera.png" },
      { id: 4, name: "Headphones", discount: "-25%", image: "src/assets/ear-fone.png" },
      { id: 5, name: "Canon cameras", discount: "-25%", image: "src/assets/black-fone.png" },
    ];
  
    const items = [
        { id: 1, name: "Soft chairs", price: "USD 19", image: "/src/assets/sofa.png" },
        { id: 2, name: "Sofa & chair", price: "USD 19", image: "/src/assets/lamp.png" },
        { id: 3, name: "Kitchen dishes", price: "USD 19", image: "/src/assets/box.png" },
        { id: 4, name: "Smart watches", price: "USD 19", image: "/src/assets/mud.png" },
        { id: 5, name: "Kitchen mixer", price: "USD 100", image: "/src/assets/mixer.png" },
        { id: 6, name: "Blenders", price: "USD 39", image: "/src/assets/blender.png" },
        { id: 7, name: "Home appliance", price: "USD 19", image: "/src/assets/wallet.png" },
        { id: 8, name: "Coffee maker", price: "USD 10", image: "/src/assets/cactus.png" },
    ]    
    const electronicsItems = [
        { id: 1, name: "Smart Watch", price: "USD 19", image: "/src/assets/watch.png" },
        { id: 2, name: "Cameras", price: "USD 89", image: "/src/assets/camera.png" },
        { id: 3, name: "Headphones", price: "USD 10", image: "/src/assets/white-ear-fone.png" },
        { id: 4, name: "Smart watches", price: "USD 90", image: "/src/assets/kettle.png" },
        { id: 5, name: "Gamming Set", price: "USD 35", image: "/src/assets/black-fone.png" },
        { id: 6, name: "Laptop & PC", price: "USD 340", image: "/src/assets/laptop.png" },
        { id: 7, name: "SmartPhones", price: "USD 340", image: "/src/assets/tablet.png" },
        { id: 8, name: "Electric Kettle", price: "USD 240", image: "/src/assets/red-fone.png" },
    ]
    const recomendedProducts = [
      { id: 1, price: "$10.30", name: "T-shirts with multiple colors, for men", image: "/src/assets/blue-shirt.png" },
      { id: 2, price: "$10.30", name: "Jeans shorts for men blue color", image: "/src/assets/brown-jacket.png" },
      { id: 3, price: "$12.50", name: "Brown winter coat medium size", image: "/src/assets/image 30.png" },
      { id: 4, price: "$34.00", name: "Jeans bag for travel for men", image: "/src/assets/blue-wallet.png" },
      { id: 5, price: "$99.00", name: "Leather wallet", image: "/src/assets/blue-bag.png" },
      { id: 6, price: "$9.99", name: "Canon camera black, 100x zoom", image: "/src/assets/jeans-short.png" },
      { id: 7, price: "$8.99", name: "Headset for gaming with mic", image: "/src/assets/white-ear-fone.png" },
      { id: 8, price: "$10.30", name: "Smartwatch silver color modern", image: "/src/assets/blue-bag.png" },
      { id: 9, price: "$10.30", name: "Blue wallet for men leather material", image: "/src/assets/mud.png" },
      { id: 10, price: "$80.95", name: "Jeans bag for travel for men", image: "/src/assets/kettle.png" },
    ]
    const services = [
      {
        id: 1,
        title: "Source from Industry Hubs",
        image: "src/assets/Mask group.png", // Replace with actual image path
        icon: <FaSearch className="text-gray-700" size={20} />,
      },
      {
        id: 2,
        title: "Customize Your Products",
        image: "src/assets/Mask group 4.png",
        icon: <FaBox className="text-gray-700" size={20} />,
      },
      {
        id: 3,
        title: "Fast, reliable shipping by ocean or air",
        image: "src/assets/Mask group (1).png",
        icon: <FaShippingFast className="text-gray-700" size={20} />,
      },
      {
        id: 4,
        title: "Product monitoring and inspection",
        image: "src/assets/Mask group (2).png",
        icon: <FaShieldAlt className="text-gray-700" size={20} />,
      },
    ]
    const regions = [
      { country: "Arabic Emirates", url: "shopname.ae", image: "src/assets/icon.png" },
      { country: "Australia", url: "shopname.ae", image: "src/assets/AU@2x.png" },
      { country: "United States", url: "shopname.ae", image: "src/assets/US@2x.png" },
      { country: "Russia", url: "shopname.ru", image: "/src/assets/russia.png" },
      { country: "Denmark", url: "denmark.com.dk", image: "src/assets/DK@2x.png" },
      { country: "Arabic Emirates", url: "shopname.ae", image: "src/assets/icon.png" },
      { country: "France", url: "shopname.com.fr", image: "src/assets/FR@2x.png" },
      { country: "Italy", url: "shopname.it", image: "src/assets/IT@2x.png" },
      { country: "Great Britain", url: "shopname.co.uk", image: "src/assets/GB@2x.png" },
      { country: "China", url: "shopname.ae", image: "src/assets/CN@2x.png" },
    ];

    return (
        <>
        {/* Deals and Offers Section   */}
      <div className="bg-white  shadow-md  w-full">
        <div className="flex mb-4 mt-1 items-center">
          {/* Deals Info */}
          <div className=" px-5 w-64">
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
          <div className="flex-1 grid grid-cols-5 ">
            {deals.map((deal) => (
              <div key={deal.id} className="text-center border  p-4">
                <img src={deal.image} alt={deal.name} className="h-24 mx-auto" />
                <p className="mt-2">{deal.name}</p>
                <span className="bg-red-100 text-red-500 px-3 py-1 text-sm rounded-full">{deal.discount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

 {/* Home and Outdoor section  */}


    <div className="bg-white shadow-md mb-4 w-full h-full">
      <div className="grid grid-cols-4">
        {/* Left Banner */}
        
        <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        src="/src/assets/image 92.png"
        alt="Consumer electronics and gadgets"
        className=" h-64 w-64"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-60 h-64 p-5 flex flex-col justify-start rounded-lg">
        <h2 className="font-bold text-2xl pl-2 pr-12 text-black">
         Home and Outdoor
        </h2>
        <button className="mt-4 bg-white text-gray-900 font-medium w-32 px-2 py-2 rounded-md shadow">
          Source now
        </button>
      </div>
    </div>

        {/* Items Grid */}
        <div className="col-span-2 grid grid-cols-4 ">
          {items.map((item) => (
            <div key={item.id} className="border flex flex-col p-4 justify-between h-32 w-full item-center ">
            <div className="text-left">
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-gray-500 text-sm">From {item.price}</p>

            </div>
             
              <img src={item.image} alt={item.name} className="h-16 justify-around object-contain mb-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  


 {/* Consumer Electronics and Gagets section */}



 <div className="bg-white shadow-md mb-4 w-full h-full">
      <div className="grid grid-cols-3">
        {/* Left Banner */}
        
        <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        src="/src/assets/image 98.png"
        alt="Consumer electronics and gadgets"
        className="w-64 h-64"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-60 h-64 p-5 flex flex-col justify-start rounded-lg">
        <h2 className="font-bold text-2xl pl-2 pr-12 text-black">
         Home and Outdoor
        </h2>
        <button className="mt-4 bg-white text-gray-900 font-medium w-32 px-2 py-2 rounded-md shadow">
          Source now
        </button>
      </div>
    </div>

        {/* Items Grid */}
        <div className="col-span-1 grid grid-cols-4 ">
          {electronicsItems.map((item) => (
            <div key={item.id} className="border flex flex-col p-4 justify-between h-32 w-full item-center ">
            <div className="text-left">
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-gray-500 text-sm">From {item.price}</p>

            </div>
             
              <img src={item.image} alt={item.name} className="h-16 justify-around object-contain mb-2" />
            </div>
          ))}
        </div>
      </div>
    </div>



{/* Inquiery section */}

<div className="relative bg-gradient-to-r from-blue-950 to-blue-300 text-white p-10 rounded-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/image 102.png"
          alt="Warehouse Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative grid grid-cols-2 gap-8 items-center">
        {/* Left Side Text */}
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">
            An easy way to send requests to all suppliers
          </h2>
          <p className="text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-900 w-[400px]">
          <h3 className="text-lg font-semibold mb-4">Send quote to suppliers</h3>
          <input
            type="text"
            placeholder="What item you need?"
            className="w-full p-2 border rounded-md mb-3"
          />
          <textarea
            placeholder="Type more details"
            className="w-full p-2 border rounded-md mb-3 h-20 resize-none"
          />
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Quantity"
              className="w-1/2 p-2 border rounded-md"
            />
            <select className="w-1/2 p-2 border rounded-md">
              <option>Pcs</option>
              <option>Kg</option>
              <option>Liters</option>
            </select>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md">
            Send inquiry
          </button>
        </div>
      </div>
    </div>


{/* Recomended Products   */}



    <div className="">
      <h2 className="text-2xl font-semibold mt-3 mb-4">Recommended Items</h2>
      <div className="grid grid-cols-5 gap-4">
        {recomendedProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-sm shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
            <p className="text-lg font-semibold">{product.price}</p>
            <p className="text-gray-600">{product.name}</p>
          </div>
        ))}
      </div>
    </div>




    {/* Extra Services  */}

    <div className="">
      <h2 className="text-2xl font-semibold mt-3 mb-4">Our extra services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-sm shadow-md overflow-hidden">
            <div className="relative">
              <img src={service.image} alt={service.title} className="w-full h-28 opacity-100 bg-black object-cover" />
              <div className="absolute bottom-[-15px] right-3 bg-white p-2 rounded-full shadow-lg">
                {service.icon}
              </div>
            </div>
            <div className="p-3">
              <p className="text-gray-800 font-medium">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>






    {/* Suppliers   */}
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Suppliers by region</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region, index) => (
          <div key={index} className="flex items-center space-x-3">
            {region.image ? (
              <img src={region.image} alt={region.country} className="w-6 h-6" />
            ) : (
              <span className="text-gray-400">🏳️</span> // Placeholder if no image
            )}
            <div>
              <p className="text-gray-800 font-medium">{region.country}</p>
              <p className="text-gray-500 text-sm">{region.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


                {/* Newsletter */}




    <div className="bg-gray-200 py-10 flex justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Subscribe on our newsletter</h2>
        <p className="text-gray-500 text-sm mt-2 mb-4">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="flex items-center border rounded-lg overflow-hidden bg-white max-w-md mx-auto">
          <div className="px-3 text-gray-500">
            <FaRegEnvelope />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="flex-grow px-2 py-2 outline-none text-sm text-gray-700"
          />
          <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>


      </>
    );
  }
  