import React from "react";
import styles from "./CartSection.module.css";
import CartElement from "./CartElement";
import CartEmpty from "./CartEmpty";

const CartSection = () => {
  return (
    <>
      <div className={styles.CartSection}>
        {/* <CartElement /> */}
        <CartEmpty />
      </div>
    </>
  );
};

export default CartSection;
