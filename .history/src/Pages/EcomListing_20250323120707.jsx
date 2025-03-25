import { useState } from "react";
import { FaStar, FaRegHeart, FaFilter } from "react-icons/fa";
import { FiGrid, FiList } from "react-icons/fi";
import Header from './Header';
import Footer from './Footer'

const products = [

  {
    id: 1,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: "$998.00",
    image: "src/assets/sofa.png",
    rating: 4.5,
    orders: 154,
    shipping: "Free Shipping"
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    image: "src/assets/tablet.png",
    rating: 4.2,
    orders: 154,
    shipping: "Free Shipping"
  }
];
const categories = [
  "Mobile Accessory",
  "Electronics",
  "Smartphones",
  "Modern Tech",
  "Laptops",
  "Tablets",
  "Wearables",
  "Audio",
  "Cameras",
  "Gaming",
];
const [showAllCategories, setShowAllCategories] = useState(false);
const [showAllBrands, setShowAllBrands] = useState(false);
const [showAllFeatures, setShowAllFeatures] = useState(false);

const brands = ["Samsung", "Apple", "Huawei", "Pocoo", "Lenovo", "Xiaomi", "OnePlus", "Google"];

  const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory", "Waterproof", "Wireless Charging"];

  const initialCount = 4;
rafce

  // Data
 
 