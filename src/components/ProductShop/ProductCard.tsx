import React from "react";
import { product } from "../../product/product";
import { IoIosStar } from "react-icons/io";
import styles from "./ProductShop.module.css";

const ProductCard = ({ prev }) => {
   return (
      <>
         <div className={styles.individualCard}>
            <div className={styles.prodImage}>
               <img src={prev.image} alt="" />
               <span className={styles.rating}>
                  {prev.rating}
                  <IoIosStar />
               </span>
            </div>

            <span className={styles.productName}>{prev.name}</span>

            <div className={styles.price}>
               <span className={styles.discountedPrice}>
                  ₹{prev.price.discounted}
               </span>
               <span className={styles.originalPrice}>
                  ₹{prev.price.original}
               </span>
            </div>
            <div>
               {/* <button className={styles.remove-cart}>Remove from Cart</button> */}
               <button className={styles.addCart}>Add to Cart</button>
            </div>
         </div>
      </>
   );
};

export default ProductCard;
