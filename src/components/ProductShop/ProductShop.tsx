import React from "react";
import { clothingProducts } from "../../product/clothingProducts";
import { fitnessEquipment } from "../../product/fitnessProducts";
import ProductCategory from "./ProductCategory";
import "./ProductShop.module.css";
import ProductIndivitualCard from "./ProductIndivitualCard";

const ProductShop = () => {
   return (
      <>
         <ProductCategory title="Clothing" products={clothingProducts} />
         <ProductCategory title="Fitness" products={fitnessEquipment} />
         <ProductIndivitualCard />
      </>
   );
};

export default ProductShop;
