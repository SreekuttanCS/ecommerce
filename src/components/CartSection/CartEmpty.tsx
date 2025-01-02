import React from "react";
import styles from "./CartSection.module.css";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  const BackToHome = () => {
    navigate("/");
  };

  return (
    <div className="EmptyCart">
      <img
        src="src\assets\empty-cart.webp"
        alt="oops"
        className={styles.EmptyCart}
      />
      <h3>Your Cart is empty!</h3>
      <p>Browse from your recently viewed or explore from categories</p>
      <button onClick={BackToHome} className={styles.btn}>
        Back To Homepage
      </button>
    </div>
  );
};

export default CartEmpty;
