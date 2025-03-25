const productsByCategory = {
  allProducts: [
      { 
          id: 1, 
          name: "Smart Watch Pro", 
          description: "Advanced smartwatch with health tracking", 
          price: "$199.99", 
          originalPrice: "$249.99",
          discount: "-20%", 
          image: "src/assets/watch.png",
          rating: 4.5,
          orders: "500+",
          shipping: "Free shipping",
          dateAdded: "2023-05-15"
      },
      { 
          id: 2, 
          name: "Ultra Slim Laptop", 
          description: "Lightweight laptop with 16GB RAM", 
          price: "$899.99", 
          image: "src/assets/laptop.png",
          rating: 4.8,
          orders: "1200+",
          shipping: "Free shipping",
          dateAdded: "2023-06-20"
      },
      // Add all other products with similar structure
      // ...
  ],
  // Other categories...
};

export default productsByCategory;