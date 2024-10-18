"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Custom_Image from "@/images/consultancy_cardImage1.png";    
import first_img from "@/images/Custom_Image1.png"  
import first_img1 from "@/images/Custom_Image2.png"   
import first_img2 from "@/images/Custom_Image3.png"
import styles from "@/Components/ConsultancyTextFlex/consultancyTextflex.module.css";

const Page = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.Main_Container}>
      <div className={styles.Consultancy_page_second_container}>
     
        <div className={styles.online_consultancy_text}>
          <p>Online Consultancy Includes</p>
        </div>

        <div className={styles.Services_Header_Container}>
          <div className={styles.Services_Header_Outer}>
            <div className={styles.Services_header_img_outer}>
              <div className={styles.Services_header_card}>
                <Image
                  src={Custom_Image}
                  className={styles.Services_header_img}
                  alt="none"
                />
              </div>
              <div className={styles.Services_header_img1_description}>
                <div className={styles.Services_header_info}>
                  <p className={styles.Services_header_info_text}>
                    Colour <br />
                    consultancy
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.Services_header_img_outer}>
              <div className={styles.Services_header_card}>
                <Image
                  src={first_img}
                  className={styles.Services_header_img}
                  alt="none"
                />
              </div>
              <div className={styles.Services_header_img1_description}>
                <div className={styles.Services_header_info}>
                  <p className={styles.Services_header_info_text}>
                    Design Concept <br /> Consultancy
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.Services_header_img_outer}>
              <div className={styles.Services_header_card}>
                <Image
                  src={first_img1}
                  className={styles.Services_header_img}
                  alt="none"
                />
              </div>
              <div className={styles.Services_header_img1_description}>
                <div className={styles.Services_header_info}>
                  <p className={styles.Services_header_info_text}>
                    Entire Design <br />
                    Consultancy
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.Services_header_img_outer}>
              <div className={styles.Services_header_card}>
                <Image
                  src={first_img2}
                  className={styles.Services_header_img}
                  alt="none"
                />
              </div>
              <div className={styles.Services_header_img1_description}>
                <div className={styles.Services_header_info}>
                  <p className={styles.Services_header_info_text}>
                    Customized <br />
                    consultancy according
                    <br /> to your need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
