import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import EcommerceListing from "./Pages/ecommerceListing";
import Home from "./Pages/H"; // Add Home Page if missing

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ecommerceListing" element={<EcommerceListing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
