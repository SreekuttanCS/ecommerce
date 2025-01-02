import React from "react";
import NavBarShop from "./components/NavBarShop/NavBarShop";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CartSection from "./components/CartSection/CartSection";

const App = () => {
  return (
    <Router>
      <div>
        <NavBarShop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<CartSection />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
