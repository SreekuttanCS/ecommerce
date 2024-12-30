import React from "react";
import styles from "./CartTotal.module.css";

export const CartTotal = () => {
  return (
    <>
      <div className={styles.CartTotalCard}>
        <h3>Price Details (2 items)</h3>
        <div className={styles.PriceDetails}>
          <div className={styles.TotalPrice}>
            <h5>Total MRP</h5> <h5>₹2998.00</h5>
          </div>
          <div className={styles.TotalDiscount}>
            <h5>Total Discount</h5> <h5> -₹1720.00</h5>
          </div>
          <div className={styles.TotalPayable}>
            <h5>Total Payable </h5> <h5> ₹1278.00</h5>
          </div>
          <button className={styles.btn}>Confirm Order</button>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
