const productsByCategory = {
  allProducts: [
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
          images: [
              "/src/assets/headphones.png",
              "/src/assets/headphones-alt1.jpg",
              "/src/assets/headphones-alt2.jpg"
          ],
          specifications: {
              "Model Number": "WH-1000XM4",
              "Color": "Black",
              "Battery Life": "30 hours",
              "Bluetooth Version": "5.0",
              "Weight": "254g"
          },
          reviews: [
              {
                  id: 1,
                  author: "Alex Johnson",
                  rating: 5,
                  date: "2023-05-15",
                  comment: "Amazing noise cancellation!"
              },
              {
                  id: 2,
                  author: "Sam Wilson",
                  rating: 4,
                  date: "2023-04-22",
                  comment: "Great sound quality but a bit heavy"
              }
          ]
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
          images: [
              "/src/assets/phone.png",
              "/src/assets/phone-alt1.jpg",
              "/src/assets/phone-alt2.jpg"
          ],
          specifications: {
              "Model": "iPhone X",
              "Storage": "128GB",
              "Display": "5.8\" Super Retina",
              "Processor": "A12 Bionic",
              "Camera": "Dual 12MP"
          },
          reviews: [
              {
                  id: 1,
                  author: "Taylor Smith",
                  rating: 5,
                  date: "2023-06-10",
                  comment: "Perfect condition for a refurbished phone"
              }
          ]
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
          images: [
              "/src/assets/laptop.png",
              "/src/assets/laptop-alt1.jpg",
              "/src/assets/laptop-alt2.jpg"
          ],
          specifications: {
              "Processor": "Intel i7-11800H",
              "Graphics": "NVIDIA RTX 3060",
              "RAM": "16GB DDR4",
              "Storage": "512GB SSD",
              "Display": "15.6\" 144Hz"
          },
          reviews: [
              {
                  id: 1,
                  author: "Chris Lee",
                  rating: 5,
                  date: "2023-07-05",
                  comment: "Handles all my games at max settings"
              }
          ]
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
          images: [
              "/src/assets/watch.png",
              "/src/assets/watch-alt1.jpg",
              "/src/assets/watch-alt2.jpg"
          ],
          specifications: {
              "Model": "Galaxy Watch 4",
              "Display": "1.4\" AMOLED",
              "Battery Life": "40 hours",
              "Water Resistance": "5ATM",
              "Compatibility": "Android & iOS"
          },
          reviews: [
              {
                  id: 1,
                  author: "Jordan Taylor",
                  rating: 4,
                  date: "2023-05-30",
                  comment: "Great fitness tracker but battery could be better"
              }
          ]
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
          images: [
              "/src/assets/camera.png",
              "/src/assets/camera-alt1.jpg",
              "/src/assets/camera-alt2.jpg"
          ],
          specifications: {
              "Model": "EOS Rebel T8i",
              "Sensor": "24.1MP APS-C",
              "Video": "4K UHD",
              "ISO Range": "100-25600",
              "Connectivity": "Wi-Fi & Bluetooth"
          },
          reviews: [
              {
                  id: 1,
                  author: "Morgan Reed",
                  rating: 5,
                  date: "2023-06-18",
                  comment: "Perfect for beginners and enthusiasts"
              }
          ]
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
          images: [
              "/src/assets/earbuds.png",
              "/src/assets/earbuds-alt1.jpg",
              "/src/assets/earbuds-alt2.jpg"
          ],
          specifications: {
              "Model": "Redmi Buds 3",
              "Battery Life": "20 hours",
              "Water Resistance": "IPX4",
              "Bluetooth": "5.2",
              "Driver Size": "12mm"
          },
          reviews: [
              {
                  id: 1,
                  author: "Casey Kim",
                  rating: 4,
                  date: "2023-07-12",
                  comment: "Great value for money"
              }
          ]
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
          images: [
              "/src/assets/tablet.png",
              "/src/assets/tablet-alt1.jpg",
              "/src/assets/tablet-alt2.jpg"
          ],
          specifications: {
              "Model": "MatePad Pro",
              "Processor": "Kirin 990",
              "RAM": "6GB",
              "Storage": "128GB",
              "OS": "EMUI 10.1"
          },
          reviews: [
              {
                  id: 1,
                  author: "Riley Chen",
                  rating: 4,
                  date: "2023-06-25",
                  comment: "Excellent display quality"
              }
          ]
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
          images: [
              "/src/assets/console.png",
              "/src/assets/console-alt1.jpg",
              "/src/assets/console-alt2.jpg"
          ],
          specifications: {
              "Model": "PlayStation 5",
              "Storage": "825GB SSD",
              "Resolution": "Up to 8K",
              "Backward Compatibility": "PS4 games",
              "Controller": "DualSense"
          },
          reviews: [
              {
                  id: 1,
                  author: "Jamie Wilson",
                  rating: 5,
                  date: "2023-07-01",
                  comment: "The future of gaming is here"
              }
          ]
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
          images: [
              "/src/assets/tracker.png",
              "/src/assets/tracker-alt1.jpg",
              "/src/assets/tracker-alt2.jpg"
          ],
          specifications: {
              "Model": "OnePlus Band",
              "Display": "1.1\" AMOLED",
              "Battery Life": "14 days",
              "Water Resistance": "5ATM",
              "Sensors": "Heart rate, SpO2"
          },
          reviews: [
              {
                  id: 1,
                  author: "Drew Patel",
                  rating: 4,
                  date: "2023-05-20",
                  comment: "Accurate tracking for workouts"
              }
          ]
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
          images: [
              "/src/assets/speaker.png",
              "/src/assets/speaker-alt1.jpg",
              "/src/assets/speaker-alt2.jpg"
          ],
          specifications: {
              "Model": "JBL Flip 5",
              "Output Power": "20W",
              "Battery Life": "12 hours",
              "Waterproof": "IPX7",
              "Weight": "540g"
          },
          reviews: [
              {
                  id: 1,
                  author: "Skyler Jones",
                  rating: 5,
                  date: "2023-06-15",
                  comment: "Incredible sound for its size"
              }
          ]
      },
      {
        id: 11,
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
        images: [
            "/src/assets/speaker.png",
            "/src/assets/speaker-alt1.jpg",
            "/src/assets/speaker-alt2.jpg"
        ],
        specifications: {
            "Model": "JBL Flip 5",
            "Output Power": "20W",
            "Battery Life": "12 hours",
            "Waterproof": "IPX7",
            "Weight": "540g"
        },
        reviews: [
            {
                id: 1,
                author: "Skyler Jones",
                rating: 5,
                date: "2023-06-15",
                comment: "Incredible sound for its size"
            }
        ]
    },
    {
      id: 12,
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
      images: [
          "/src/assets/speaker.png",
          "/src/assets/speaker-alt1.jpg",
          "/src/assets/speaker-alt2.jpg"
      ],
      specifications: {
          "Model": "JBL Flip 5",
          "Output Power": "20W",
          "Battery Life": "12 hours",
          "Waterproof": "IPX7",
          "Weight": "540g"
      },
      reviews: [
          {
              id: 1,
              author: "Skyler Jones",
              rating: 5,
              date: "2023-06-15",
              comment: "Incredible sound for its size"
          }
      ]
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
    images: [
        "/src/assets/speaker.png",
        "/src/assets/speaker-alt1.jpg",
        "/src/assets/speaker-alt2.jpg"
    ],
    specifications: {
        "Model": "JBL Flip 5",
        "Output Power": "20W",
        "Battery Life": "12 hours",
        "Waterproof": "IPX7",
        "Weight": "540g"
    },
    reviews: [
        {
            id: 1,
            author: "Skyler Jones",
            rating: 5,
            date: "2023-06-15",
            comment: "Incredible sound for its size"
        }
    ]
}
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
  images: [
      "/src/assets/speaker.png",
      "/src/assets/speaker-alt1.jpg",
      "/src/assets/speaker-alt2.jpg"
  ],
  specifications: {
      "Model": "JBL Flip 5",
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
  },
  reviews: [
      {
          id: 1,
          author: "Skyler Jones",
          rating: 5,
          date: "2023-06-15",
          comment: "Incredible sound for its size"
      }
  ]
}
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
  images: [
      "/src/assets/speaker.png",
      "/src/assets/speaker-alt1.jpg",
      "/src/assets/speaker-alt2.jpg"
  ],
  specifications: {
      "Model": "JBL Flip 5",
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
  },
  reviews: [
      {
          id: 1,
          author: "Skyler Jones",
          rating: 5,
          date: "2023-06-15",
          comment: "Incredible sound for its size"
      }
  ]
}
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
  images: [
      "/src/assets/speaker.png",
      "/src/assets/speaker-alt1.jpg",
      "/src/assets/speaker-alt2.jpg"
  ],
  specifications: {
      "Model": "JBL Flip 5",
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
  },
  reviews: [
      {
          id: 1,
          author: "Skyler Jones",
          rating: 5,
          date: "2023-06-15",
          comment: "Incredible sound for its size"
      }
  ]
}
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
  images: [
      "/src/assets/speaker.png",
      "/src/assets/speaker-alt1.jpg",
      "/src/assets/speaker-alt2.jpg"
  ],
  specifications: {
      "Model": "JBL Flip 5",
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
  },
  reviews: [
      {
          id: 1,
          author: "Skyler Jones",
          rating: 5,
          date: "2023-06-15",
          comment: "Incredible sound for its size"
      }
  ]
}
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
  images: [
      "/src/assets/speaker.png",
      "/src/assets/speaker-alt1.jpg",
      "/src/assets/speaker-alt2.jpg"
  ],
  specifications: {
      "Model": "JBL Flip 5",
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
  },
  reviews: [
      {
          id: 1,
          author: "Skyler Jones",
          rating: 5,
          date: "2023-06-15",
          comment: "Incredible sound for its size"
      }
  ]
}
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
  images: [
      "/src/assets/speaker.png",
      "/src/assets/speaker-alt1.jpg",
      "/src/assets/speaker-alt2.jpg"
  ],
  specifications: {
      "Model": "JBL Flip 5",
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
  },
  reviews: [
      {
          id: 1,
          author: "Skyler Jones",
          rating: 5,
          date: "2023-06-15",
          comment: "Incredible sound for its size"
      }
  ]
}
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
  images: [
      "/src/assets/speaker.png",
      "/src/assets/speaker-alt1.jpg",
      "/src/assets/speaker-alt2.jpg"
  ],
  specifications: {
      "Model": "JBL Flip 5",
      "Output Power": "20W",
      "Battery Life": "12 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
  },
  reviews: [
      {
          id: 1,
          author: "Skyler Jones",
          rating: 5,
          date: "2023-06-15",
          comment: "Incredible sound for its size"
      }
  ]
}
  ],
  
  deals: [
      { productId: 1, discount: "-25%" },
      { productId: 4, discount: "-20%" },
      { productId: 7, discount: "-15%" },
      { productId: 10, discount: "-15%" }
  ],
  
  recommended: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

export default productsByCategory;