"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/images/consultancy1.png";
import img2 from "@/images/consultancy2.png";
import img3 from "@/images/consultancy3.png";
import styles from "@/Components/ConsultancyTab/consultancyTab.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import CustomizedAccordions from "./Accordian";

const onlineConsultancy = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [headingColor, setHeadingColor] = useState("#cc7d45"); // Default heading color

  const content = [
    {
      title: "2D Furniture Layout",
      text: "Our team of excellent designers will help you build a design concept + furniture layout according to your need. ",
      imageUrl: img1,
      Color: "#cc7d45", // Button 1 background color
    },
    {
      title: "2D layout + 3D Design",
      text: "Virtual Design for your entire home, Our team of excellent designers and architects will help you design your home. ",
      imageUrl: img2,
      Color: "#7F7047", // Button 2 background color
    },
    {
      title: "A to Z Design",
      text: "Our team of talented designers will create a 3d + 2d (Autocad ) + Working design concept to help you design your Home.Save up to 20% of your total Interior cost. ",
      imageUrl: img3,
      Color: "#cc7d45", // Button 3 background color
    },
  ];

  const handleTabClick = (tabIndex, bgColor) => {
    setActiveTab(tabIndex);
    setHeadingColor(bgColor); // Set heading color based on button background color
  };

  return (
    <div className={styles.onlineConsultancy}>
      <div className={styles.onlineConsultancy_Innersection}>
        <div className={styles.mainsection}>
          <div className={styles.onlineConsultancy_section}>
            <div className={styles.topButtons}>
              <div>
                <button
                  className={styles.btn1}
                  onClick={() => handleTabClick(1, content[0].Color)}
                >
                  15 Rs / Sqft
                </button>
              </div>
              <div>
                <button
                  className={styles.btn2}
                  onClick={() => handleTabClick(2, content[1].Color)}
                >
                  75 Rs / Sqft
                </button>
              </div>
              <div>
                <button
                  className={styles.btn3}
                  onClick={() => handleTabClick(3, content[2].Color)}
                >
                  105 Rs / Sqft
                </button>
              </div>
            </div>

            <div className={styles.contentSection}>
              <div className={styles.textSection}>
                <div className={styles.onlineConsultancy_section_title}>
                  <p style={{ color: headingColor }} className={styles.title}>
                    {content[activeTab - 1].title}
                  </p>
                </div>
                <div className={styles.onlineConsultancy_section_text}>
                  {" "}
                  <p>{content[activeTab - 1].text} </p>
                </div>
                <div
                  className={styles.onlineConsultancy_section_btn}
                  style={{
                    color: headingColor,
                    border: "2px solid",
                    borderColor: headingColor,
                  }}
                >
                  {" "}
                  Exclusive GST{" "}
                </div>
              </div>

              <div className={styles.imageSection}>
                <Image
                  src={content[activeTab - 1].imageUrl}
                  alt={`Image for Button ${activeTab}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.accordian_section}>
        <CustomizedAccordions />
      </div>
    </div>
  );
};

export default onlineConsultancy;
