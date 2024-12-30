import React from "react";
import Banner from "./components/BannerShop/Banner";
import NavBarShop from "./components/NavBarShop/NavBarShop";
import ProductShop from "./components/ProductShop/ProductShop";
import AddToCart from "./components/AddToCart/AddToCart";

const App = () => {
  return (
    <div>
      <NavBarShop />
      <Banner />
      <ProductShop />
      <AddToCart />
    </div>
  );
};

export default App;
