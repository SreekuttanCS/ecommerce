import React from "react";
import { clothingProducts } from "../../product/clothingProducts";
import { fitnessEquipment } from "../../product/fitnessProducts";
import ProductCategory from "./ProductCategory";
import "./ProductShop.module.css";

const ProductShop = () => {
  return (
    <>
      <ProductCategory title="Clothing" products={clothingProducts} />
      <ProductCategory title="Fitness" products={fitnessEquipment} />
    </>
  );
};

export default ProductShop;
