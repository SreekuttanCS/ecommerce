import React from "react";
import styles from "./CartSection.module.css";
import CartItem from "../Cart/CartItem";
import CartTotal from "../Cart/CartTotal";

const CartElement = () => {
  return (
    <div className="ProductCart">
      <h2>Shopping Cart</h2>
      <div className={styles.cartDiv}>
        <CartItem />
        <CartTotal />
      </div>
    </div>
  );
};

export default CartElement;
