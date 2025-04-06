const ViewToggle = ({ 
  view, 
  setView, 
  itemCount, 
  products = [], 
  sortType, 
  setSortType, 
  setSortedProducts 
}) => {
  // Sorting Logic with useMemo
  useMemo(() => {
    let sortedArray = [...products];

    switch (sortType) {
      case "low-to-high":
        sortedArray.sort((a, b) => 
          (parseFloat(a.price?.replace(/[^0-9.]/g, "") || 0) - 
          (parseFloat(b.price?.replace(/[^0-9.]/g, "") || 0)
        );
        break;
      case "high-to-low":
        sortedArray.sort((a, b) => 
          (parseFloat(b.price?.replace(/[^0-9.]/g, "") || 0) - 
          (parseFloat(a.price?.replace(/[^0-9.]/g, "") || 0)
        );
        break;
      case "new-arrivals":
        sortedArray.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        break;
      case "top-rated":
        sortedArray.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // For "featured", keep original order
        break;
    }

    setSortedProducts(sortedArray);
  }, [sortType, products, setSortedProducts]);

  // ... rest of your component