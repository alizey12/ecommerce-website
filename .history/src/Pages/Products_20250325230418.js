
const productsByCategory = {
    allProducts:[
        { id: 1 ,price:"109",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, distinctio at blanditiis quibusdam officiis quos beatae.", name: "Smart watches", discount: "-25%", image: "src/assets/watch.png" },
        { id: 2,  name: "Laptops",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", discount: "-15%", image: "src/assets/laptop.png" },
        { id: 3,  name: "GoPro cameras",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  discount: "-40%", image: "src/assets/camera.png" },
        { id: 4,  name: "Headphones",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  discount: "-25%", image: "src/assets/ear-fone.png" },
        { id: 5, name: "Canon cameras",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  discount: "-25%", image: "src/assets/black-fone.png" },
        { id: 1,  rname: "Soft chairs",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 19", image: "/src/assets/sofa.png" },
        { id: 2, raname: "Sofa & chair",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 19", image: "/src/assets/lamp.png" },
        { id: 3, name: "Kitchen dishes",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 19", image: "/src/assets/box.png" },
        { id: 4 ,name: "Smart watches",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 19", image: "/src/assets/mud.png" },
        { id: 5,  name: "Kitchen mixer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 100", image: "/src/assets/mixer.png" },
        { id: 6,  name: "Blenders", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", price: "USD 39", image: "/src/assets/blender.png" },
        { id: 7, ratname: "Home appliance",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 19", image: "/src/assets/wallet.png" },
        { id: 8, name: "Coffee maker",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 10", image: "/src/assets/cactus.png" },
        { id: 1, ratname: "Smart Watch", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", price: "USD 19", image: "/src/assets/watch.png" },
        { id: 2,  name: "Cameras", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", price: "USD 89", image: "/src/assets/camera.png" },
        { id: 3, name: "Headphones",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 10", image: "/src/assets/white-ear-fone.png" },
        { id: 4 , name: "Smart watches",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 90", image: "/src/assets/kettle.png" },
        { id: 5,  name: "Gamming Set",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 35", image: "/src/assets/black-fone.png" },
        { id: 6, rating:"⭐⭐" , name: "Laptop & PC",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 340", image: "/src/assets/laptop.png" },
        { id: 7, rating:"⭐" , name: "SmartPhones",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 340", image: "/src/assets/tablet.png" },
        { id: 8, rating:"" , name: "Electric Kettle",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  price: "USD 240", image: "/src/assets/red-fone.png" },
        { id: 1, rating:"⭐⭐⭐" , price: "$10.30", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "T-shirts with multiple colors, for men", image: "/src/assets/blue-shirt.png" },
        { id: 2, rating:"⭐⭐" , price: "$10.30",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans shorts for men blue color", image: "/src/assets/brown-jacket.png" },
        { id: 3, rating:"⭐⭐⭐⭐" , price: "$12.50",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Brown winter coat medium size", image: "/src/assets/image 30.png" },
        { id: 4, rating:"⭐" , price: "$34.00",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans bag for travel for men", image: "/src/assets/blue-wallet.png" },
        { id: 5, rating:"⭐⭐⭐⭐⭐" , price: "$99.00",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Leather wallet", image: "/src/assets/blue-bag.png" },
        { id: 6, rating:"⭐⭐⭐⭐" , price: "$9.99", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Canon camera black, 100x zoom", image: "/src/assets/jeans-short.png" },
        { id: 7, rating:"⭐⭐⭐⭐" , price: "$8.99", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Headset for gaming with mic", image: "/src/assets/white-ear-fone.png" },
        { id: 8,  price: "$10.30",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Smartwatch silver color modern", image: "/src/assets/blue-bag.png" },
        { id: 9,  price: "$10.30", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Blue wallet for men leather material", image: "/src/assets/mud.png" },
        { id: 10,  price: "$80.95",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans bag for travel for men", image: "/src/assets/kettle.png" },
     

    ],

    deals: [
      { id: 1, name: "Smart watches", discount: "-25%", image: "src/assets/watch.png" },
      { id: 2, name: "Laptops", discount: "-15%", image: "src/assets/laptop.png" },
      { id: 3, name: "GoPro cameras", discount: "-40%", image: "src/assets/camera.png" },
      { id: 4, name: "Headphones", discount: "-25%", image: "src/assets/ear-fone.png" },
      { id: 5, name: "Canon cameras", discount: "-25%", image: "src/assets/black-fone.png" },
    ],
  
    homeAndOutdoor: [
      { id: 1, name: "Soft chairs", price: "USD 19", image: "/src/assets/sofa.png" },
      { id: 2, name: "Sofa & chair", price: "USD 19", image: "/src/assets/lamp.png" },
      { id: 3, name: "Kitchen dishes", price: "USD 19", image: "/src/assets/box.png" },
      { id: 4, name: "Smart watches", price: "USD 19", image: "/src/assets/mud.png" },
      { id: 5, name: "Kitchen mixer", price: "USD 100", image: "/src/assets/mixer.png" },
      { id: 6, name: "Blenders", price: "USD 39", image: "/src/assets/blender.png" },
      { id: 7, name: "Home appliance", price: "USD 19", image: "/src/assets/wallet.png" },
      { id: 8, name: "Coffee maker", price: "USD 10", image: "/src/assets/cactus.png" },
    ],
  
    electronics: [
      { id: 1, name: "Smart Watch", price: "USD 19", image: "/src/assets/watch.png" },
      { id: 2, name: "Cameras", price: "USD 89", image: "/src/assets/camera.png" },
      { id: 3, name: "Headphones", price: "USD 10", image: "/src/assets/white-ear-fone.png" },
      { id: 4, name: "Smart watches", price: "USD 90", image: "/src/assets/kettle.png" },
      { id: 5, name: "Gamming Set", price: "USD 35", image: "/src/assets/black-fone.png" },
      { id: 6, name: "Laptop & PC", price: "USD 340", image: "/src/assets/laptop.png" },
      { id: 7, name: "SmartPhones", price: "USD 340", image: "/src/assets/tablet.png" },
      { id: 8, name: "Electric Kettle", price: "USD 240", image: "/src/assets/red-fone.png" },
    ],
  
    recommended: [
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
    ],
  };
  
  export default productsByCategory;