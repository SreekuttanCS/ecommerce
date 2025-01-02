import React from "react";
import styles from "./ProductShop.module.css";
import { IoIosStar } from "react-icons/io";

const ProductIndividualCard = () => {
  return (
    <>
      <div className={styles.ProductIndividualCardMain}>
        <div className={styles.ProductIndividualCardImgDiv}>
          <img
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/t/3/7/s-womensweatshirt-1-skin-indizo-original-imah6wh4heud5ra8.jpeg?q=70&crop=false"
            alt="oops"
            className={styles.ProductIndividualCardImg}
          />
        </div>
        <div className={styles.ProductIndividualCardDetails}>
          <p className={styles.ProductIndividualCardName}>
            Cult BlissBlack Massage Chair with Fixed Point Massage Technique and
            Bluetooth AI Voice Function for Full Body Massage At Home
          </p>
          <div className={styles.IndividualRatingAndReview}>
            <span className={styles.IndividualRating}>
              4.3
              <IoIosStar />
            </span>
            43,093 Ratings & 150 Reviews
          </div>
          <div className={styles.ProductIndividualCardprice}>
            <p className={styles.ProductIndividualCarddiscountedPrice}>
              ₹ 6999
            </p>
            <p className={styles.ProductIndividualCardoriginalPrice}>₹ 7999</p>
          </div>
          <div className={styles.ProductSize}>
            <div>Size</div>
            <div className={styles.ProductSizeCards}>
              <button className={styles.ProductSizeCard}>S</button>
              <button className={styles.ProductSizeCard}>M</button>
              <button className={styles.ProductSizeCard}>L</button>
              <button className={styles.ProductSizeCard}>XL</button>
              <button className={styles.ProductSizeCard}>XXL</button>
            </div>
          </div>
          <div className={styles.ProductIndividualCardoriginalBtns}>
            <button className={styles.ProductIndividualCardoriginalBtn}>
              Add To Cart
            </button>
            <button className={styles.ProductIndividualCardoriginalBtn}>
              Buy Now
            </button>
          </div>
          <div className={styles.ProductIndividualCardDescription}>
            <h3>Description</h3>
            <p>
              Strike the perfect balance between style and sport with
              Cultsport's Hooded Sweatshirt featuring the classic kangaroo
              pocket. Made from soft and durable fabric, these sweatshirts
              providing a comfy fit. They are ultra versatile and fit for
              everything from post-workout lounging to streetwear styling.
            </p>
          </div>
          <div className={styles.ProductSpecifications}>
            <h3>Specifications</h3>
            <div className={styles.ProductSpecificationsDetails}>
              <div className={styles.SpecificationsDetails}>
                <p>Color</p>
                <p>Dark Green, Black</p>
              </div>
              <div className={styles.SpecificationsDetails}>
                <p>Fabric</p>
                <p>Fleece</p>
              </div>
              <div className={styles.SpecificationsDetails}>
                <p>Pattern</p>
                <p>Plain </p>
              </div>
              <div className={styles.SpecificationsDetails}>
                <p>Neck </p>
                <p>Hooded Neck </p>
              </div>
              <div className={styles.SpecificationsDetails}>
                <p>Sleeve </p>
                <p>Full Sleeve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIndividualCard;
