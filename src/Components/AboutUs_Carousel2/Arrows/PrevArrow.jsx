import React from "react";
import Image from "next/image";
import styles from "@/Components/AboutUs_Carousel2/Arrows/Arrow.module.css"; // Add your custom styles
import PrevArrowSvg from "@/svgs/prevarrow.svg"; // Adjust the path to your SVG file

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.customPrevArrow} onClick={onClick}>
      <div className={styles.PrevArrowText}>MOODBOARD</div>
      <Image src={PrevArrowSvg} alt="image" className={styles.arrowIcon} />
    </div>
  );
};

export default PrevArrow;
