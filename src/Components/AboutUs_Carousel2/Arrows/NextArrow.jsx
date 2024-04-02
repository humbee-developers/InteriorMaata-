import React from "react";
import Image from "next/image";
import styles from "@/Components/AboutUs_Carousel2/Arrows/Arrow.module.css"; // Add your custom styles
import NextArrowSvg from "@/svgs/nextarrow.svg"; // Adjust the path to your SVG file

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.customNextArrow} onClick={onClick}>
      <div className={styles.NextArrowText}>MOODBOARD</div>
      <Image src={NextArrowSvg} alt="image" className={styles.arrowIcon} />
    </div>
  );
};

export default NextArrow;
