import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.BannerContent}>
        <span>Fashion Sale</span>
        <h2>Minimal Menz Style</h2>
        <p className={styles.p}>
          Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
          voluptas iure, delectus dignissimos facilis neque nulla earum.
        </p>
        <button className={styles.bannerButton}>Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
