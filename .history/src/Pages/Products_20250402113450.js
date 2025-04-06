
const productsByCategory = {
    allProducts:[
     
          {
            id: 1,
            name: "Wireless Headphones",
            price: 89.99,
            discount: 109.99,
            category: "Audio",
            brand: "Sony",
            features: ["Wireless", "Noise Cancelling", "Bluetooth"],
            condition: "Brand New",
            rating: 4.5,
            orders: 250,
            description: "Premium wireless headphones with noise cancellation",
            image: "/src/assets/headphones.png"
          },
          {
            id: 2,
            name: "Smartphone X",
            price: 799.99,
            category: "Smartphones",
            brand: "Apple",
            features: ["5G", "128GB Storage", "Face ID"],
            condition: "Refurbished",
            rating: 4.8,
            orders: 180,
            description: "Latest smartphone with advanced features",
            image: "/src/assets/phone.png"
          },
          {
            id: 3,
            name: "Gaming Laptop",
            price: 1299.99,
            category: "Laptops",
            brand: "Lenovo",
            features: ["16GB RAM", "RTX 3060", "144Hz Display"],
            condition: "Brand New",
            rating: 4.7,
            orders: 95,
            description: "Powerful gaming laptop for enthusiasts",
            image: "/src/assets/laptop.png"
          },
          {
            id: 4,
            name: "Smart Watch",
            price: 199.99,
            discount: 249.99,
            category: "Wearables",
            brand: "Samsung",
            features: ["Heart Rate Monitor", "Waterproof", "GPS"],
            condition: "Brand New",
            rating: 4.3,
            orders: 320,
            description: "Feature-packed smartwatch for fitness tracking",
            image: "/src/assets/watch.png"
          },
          {
            id: 5,
            name: "DSLR Camera",
            price: 599.99,
            category: "Cameras",
            brand: "Canon",
            features: ["24MP", "4K Video", "Wi-Fi"],
            condition: "Brand New",
            rating: 4.6,
            orders: 75,
            description: "Professional DSLR camera for photography",
            image: "/src/assets/camera.png"
          },
          {
            id: 6,
            name: "Wireless Earbuds",
            price: 59.99,
            category: "Audio",
            brand: "Xiaomi",
            features: ["Bluetooth", "Touch Controls", "IPX4"],
            condition: "Brand New",
            rating: 4.2,
            orders: 420,
            description: "Affordable wireless earbuds with great sound",
            image: "/src/assets/earbuds.png"
          },
          {
            id: 7,
            name: "Tablet Pro",
            price: 349.99,
            discount: 399.99,
            category: "Tablets",
            brand: "Huawei",
            features: ["10.8\" Display", "128GB Storage", "Stylus Support"],
            condition: "Refurbished",
            rating: 4.4,
            orders: 110,
            description: "Versatile tablet for work and entertainment",
            image: "/src/assets/tablet.png"
          },
          {
            id: 8,
            name: "Gaming Console",
            price: 499.99,
            category: "Gaming",
            brand: "Sony",
            features: ["4K Gaming", "1TB Storage", "VR Ready"],
            condition: "Brand New",
            rating: 4.9,
            orders: 65,
            description: "Next-gen gaming console with exclusive titles",
            image: "/src/assets/console.png"
          },
          {
            id: 9,
            name: "Fitness Tracker",
            price: 79.99,
            category: "Wearables",
            brand: "OnePlus",
            features: ["Heart Rate", "Sleep Tracking", "Waterproof"],
            condition: "Brand New",
            rating: 4.1,
            orders: 230,
            description: "Essential fitness tracker for health monitoring",
            image: "/src/assets/tracker.png"
          },
          {
            id: 10,
            name: "Bluetooth Speaker",
            price: 129.99,
            discount: 149.99,
            category: "Audio",
            brand: "JBL",
            features: ["Waterproof", "20h Battery", "Party Mode"],
            condition: "Brand New",
            rating: 4.7,
            orders: 180,
            description: "Portable speaker with powerful sound",
            image: "/src/assets/speaker.png"
          }
        ],
      
        deals: [
          { productId: 1, discount: "-25%" },
          { productId: 4, discount: "-20%" },
          { productId: 7, discount: "-15%" },
          { productId: 10, discount: "-15%" }
        ],
      
        recommended: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     
    //   { id: 1,  price: "10",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "T-shirts with multiple colors, for men", image: "/src/assets/blue-shirt.png" },
    //   { id: 2,  price: "7",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans shorts for men blue color", image: "/src/assets/brown-jacket.png" },
    //   { id: 3,  price: "15",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Brown winter coat medium size", image: "/src/assets/image 30.png" },
    //   { id: 4,  price: "14",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans bag for travel for men", image: "/src/assets/blue-wallet.png" },
    //   { id: 5,  price: "20",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Leather wallet", image: "/src/assets/blue-bag.png" },
    //   { id: 6,  price: "9", category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Canon camera black, 100x zoom", image: "/src/assets/jeans-short.png" },
    //   { id: 7, price: "8", category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Headset for gaming with mic", image: "/src/assets/white-ear-fone.png" },
    //   { id: 8,  price: "2",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Smartwatch silver color modern", image: "/src/assets/blue-bag.png" },
    //   { id: 9,  price: "1", category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Blue wallet for men leather material", image: "/src/assets/mud.png" },
    //   { id: 1,  price: "3",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "T-shirts with multiple colors, for men", image: "src/assets/box.png" },
    //   { id: 2,  price: "5",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans shorts for men blue color", image: "src/assets/kettle.png" },
    //   { id: 3,  price: "12",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Brown winter coat medium size", image: "src/assets/lamp.png" },
    //   { id: 4,  price: "34",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans bag for travel for men", image: "src/assets/laptop.png" },
    //   { id: 5,  price: "99",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Leather wallet", image: "src/assets/mixer.png" },
    //   { id: 6,  price: "9", category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Canon camera black, 100x zoom", image: "src/assets/mud.png" },
    //   { id: 7, price: "8",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Headset for gaming with mic", image: "src/assets/red-fone.png" },
    //   { id: 8,  price: "10",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Smartwatch silver color modern", image: "src/assets/sofa.png" },
    //   { id: 9,  price: "10",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Blue wallet for men leather material", image: "src/assets/tablet.png" },
    //  { id: 27, price: "8", category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Headset for gaming with mic", image: "src/assets/wallet.png" },
    //  { id: 1,  price: "21",category: "Audio Accessories", brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "T-shirts with multiple colors, for men", image: "src/assets/watch.png" },
    //   { id: 2,  price: "30",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans shorts for men blue color", image: "/src/assets/brown-jacket.png" },
    //   { id: 3,  price: "50",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Brown winter coat medium size", image: "/src/assets/image 30.png" },
    //   { id: 4,  price: "40",category: "Audio Accessories",brand:"", features:"",condition:"",order:"150",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans bag for travel for men", image: "/src/assets/blue-wallet.png" },
     
     
     
     
     
     
     
     
     
      // { id: 5,  price: "99.00",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Leather wallet", image: "/src/assets/blue-bag.png" },
      // { id: 6,  price: "9.99", category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Canon camera black, 100x zoom", image: "/src/assets/jeans-short.png" },
      // { id: 7, price: "8.99", category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Headset for gaming with mic", image: "/src/assets/white-ear-fone.png" },
      // { id: 8,  price: "10.30",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Smartwatch silver color modern", image: "/src/assets/blue-bag.png" },
      // { id: 9,  price: "10.30", category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Blue wallet for men leather material", image: "/src/assets/mud.png" },
      //     { id: 23,  price: "10.30",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans shorts for men blue color", image: "/src/assets/brown-jacket.png" },
      //     { id: 1,  price: "10.30", category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "T-shirts with multiple colors, for men", image: "/src/assets/blue-shirt.png" },
      //     { id: 2,  price: "10.30",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans shorts for men blue color", image: "/src/assets/brown-jacket.png" },
      //     { id: 3,  price: "12.50",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Brown winter coat medium size", image: "/src/assets/image 30.png" },
      //     { id: 4,  price: "34.00",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Jeans bag for travel for men", image: "/src/assets/blue-wallet.png" },
      //     { id: 5,  price: "99.00",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Leather wallet", image: "/src/assets/blue-bag.png" },
      //     { id: 6,  price: "9.99",category: "Audio Accessories", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Canon camera black, 100x zoom", image: "/src/assets/jeans-short.png" },
      //     { id: 7, price: "8.99", category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Headset for gaming with mic", image: "/src/assets/white-ear-fone.png" },
      //     { id: 8,  price: "10.30",category: "Audio Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.",  name: "Smartwatch silver color modern", image: "/src/assets/blue-bag.png" },
      //     { id: 9,  price: "10.30",category: "Audio Accessories", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem corrupti facere.", name: "Blue wallet for men leather material", image: "/src/assets/mud.png" },
         
    // ],

    // deals: [
    //   { id: 1, name: "Smart watches", discount: "-25%", image: "src/assets/watch.png" },
    //   { id: 2, name: "Laptops", discount: "-15%", image: "src/assets/laptop.png" },
    //   { id: 3, name: "GoPro cameras", discount: "-40%", image: "src/assets/camera.png" },
    //   { id: 4, name: "Headphones", discount: "-25%", image: "src/assets/ear-fone.png" },
    //   { id: 5, name: "Canon cameras", discount: "-25%", image: "src/assets/black-fone.png" },
    // ],
  
    // homeAndOutdoor: [
    //   { id: 1, name: "Soft chairs", price: "USD 19", image: "/src/assets/sofa.png" },
    //   { id: 2, name: "Sofa & chair", price: "USD 19", image: "/src/assets/lamp.png" },
    //   { id: 3, name: "Kitchen dishes", price: "USD 19", image: "/src/assets/box.png" },
    //   { id: 4, name: "Smart watches", price: "USD 19", image: "/src/assets/mud.png" },
    //   { id: 5, name: "Kitchen mixer", price: "USD 100", image: "/src/assets/mixer.png" },
    //   { id: 6, name: "Blenders", price: "USD 39", image: "/src/assets/blender.png" },
    //   { id: 7, name: "Home appliance", price: "USD 19", image: "/src/assets/wallet.png" },
    //   { id: 8, name: "Coffee maker", price: "USD 10", image: "/src/assets/cactus.png" },
    // ],
  
    // electronics: [
    //   { id: 1, name: "Smart Watch", price: "USD 19", image: "/src/assets/watch.png" },
    //   { id: 2, name: "Cameras", price: "USD 89", image: "/src/assets/camera.png" },
    //   { id: 3, name: "Headphones", price: "USD 10", image: "/src/assets/white-ear-fone.png" },
    //   { id: 4, name: "Smart watches", price: "USD 90", image: "/src/assets/kettle.png" },
    //   { id: 5, name: "Gamming Set", price: "USD 35", image: "/src/assets/black-fone.png" },
    //   { id: 6, name: "Laptop & PC", price: "USD 340", image: "/src/assets/laptop.png" },
    //   { id: 7, name: "SmartPhones", price: "USD 340", image: "/src/assets/tablet.png" },
    //   { id: 8, name: "Electric Kettle", price: "USD 240", image: "/src/assets/red-fone.png" },
    // ],
  
    // recommended: [
    //   { id: 1, price: "$10.30", name: "T-shirts with multiple colors, for men", image: "/src/assets/blue-shirt.png" },
    //   { id: 2, price: "$10.30", name: "Jeans shorts for men blue color", image: "/src/assets/brown-jacket.png" },
    //   { id: 3, price: "$12.50", name: "Brown winter coat medium size", image: "/src/assets/image 30.png" },
    //   { id: 4, price: "$34.00", name: "Jeans bag for travel for men", image: "/src/assets/blue-wallet.png" },
    //   { id: 5, price: "$99.00", name: "Leather wallet", image: "/src/assets/blue-bag.png" },
    //   { id: 6, price: "$9.99", name: "Canon camera black, 100x zoom", image: "/src/assets/jeans-short.png" },
    //   { id: 7, price: "$8.99", name: "Headset for gaming with mic", image: "/src/assets/white-ear-fone.png" },
    //   { id: 8, price: "$10.30", name: "Smartwatch silver color modern", image: "/src/assets/blue-bag.png" },
    //   { id: 9, price: "$10.30", name: "Blue wallet for men leather material", image: "/src/assets/mud.png" },
    //   { id: 10, price: "$80.95", name: "Jeans bag for travel for men", image: "/src/assets/kettle.png" },
    // ],
  };
  
  export default productsByCategory;