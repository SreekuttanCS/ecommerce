import React from "react";
import styles from "./AddToCart.module.css";
import CartItem from "../Cart/CartItem";
import CartTotal from "../Cart/CartTotal";

const AddToCart = () => {
  return (
    <>
      <div className={styles.CartSection}>
        <div className="ProductCart">
          <h2 className={styles.Heading}>Shopping Cart</h2>
          <div>
            <CartItem />
            <CartTotal />
          </div>
        </div>
        {/* <div className="EmptyCart">
          <img
            src="src\assets\empty-cart.webp"
            alt="oops"
            className={styles.EmptyCart}
          />
          <h3>Your Cart is empty!</h3>
          <p>Browse from your recently viewed or explore from categories</p>
          <button className={styles.btn}>Back To Homepage</button>
        </div> */}
      </div>
    </>
  );
};

export default AddToCart;
