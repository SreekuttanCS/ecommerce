import React from "react";
import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={styles.main}>
        {" "}
        <div className={styles.cartItemsCard}>
          <div className={styles.prodImage}>
            <img src="src\assets\banner.jpg  " alt="" />
          </div>
          <div className={styles.prodDetails}>
            <button className={styles.prodDelete}>×</button>
            <span className={styles.productName}>Adjustable Dumbbells Set</span>
            <div className={styles.prodQTY}>
              <span className={styles.qty}>QTY: </span>
              <button className={styles.btn}>-</button>
              <span>1</span>
              <button className={styles.btn}>+</button>
            </div>
            <div className={styles.price}>
              <span className={styles.discountedPrice}> ₹7499</span>
              <span className={styles.originalPrice}> ₹8999</span>
            </div>
            <div className={styles.price}></div>
          </div>
        </div>
        <div className={styles.cartItemsCard}>
          <div className={styles.prodImage}>
            <img src="src\assets\thredmill.png " alt="" />
          </div>
          <div className={styles.prodDetails}>
            <button className={styles.prodDelete}>×</button>
            <span className={styles.productName}>Adjustable Dumbbells Set</span>
            <div className={styles.prodQTY}>
              <span className={styles.qty}>QTY: </span>
              <button className={styles.btn}>-</button>
              <span>1</span>
              <button className={styles.btn}>+</button>
            </div>
            <div className={styles.price}>
              <span className={styles.discountedPrice}> ₹7499</span>
              <span className={styles.originalPrice}> ₹8999</span>
            </div>
            <div className={styles.price}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
