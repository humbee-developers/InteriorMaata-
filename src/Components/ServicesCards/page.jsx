"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import ServiceCard_img1 from "@/images/serviceCard_silver.png";
import ServiceCard_img2 from "@/images/serviceCard_gold.png";
import ServiceCard_img3 from "@/images/serviceCard_platinum.png";
import Button from "@/Common/Buttons/button5";
import styles from "@/Components/ServicesCards/servicesCards.module.css";
const Services_Header = () => {
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
    <>
      <div className={styles.Services_Header_Container} ref={ref}>
        <div className={styles.Services_Header_Outer}>
          <div className={styles.Services_header_img_outer}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className={styles.Services_header_card}
            >
              <Image
                src={ServiceCard_img1}
                className={styles.Services_header_img}
                alt="none"
              />
              <div className={styles.Services_header_overlay_text}>
                <p className={styles.service_silver_text}>silver</p>

                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.2 }}
                  className={styles.service_Package_text}
                >
                  <HeadingTextAnimation
                    heading={"package"}
                    justifyContent={"center"}
                  />
                </motion.div>
              </div>
            </motion.div>
            <div className={styles.Services_header_img1_description}>
              <div className={styles.Services_header_info}>
                <p className={styles.Services_header_info_text}>
                  Full Interior Project keeping your Basic requirements in mind.
                </p>
              </div>
              <div className={styles.Services_header_info__range}>
                <p className={styles.Services_header_price_range}>
                  starting from:
                </p>
                <p className={styles.Services_header_price}>₹1500/Sq.ft</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 }}
                className={styles.Service_header_button_outer}
              >
                <Button button_text="Book Now" />
              </motion.div>
            </div>
          </div>
          <div className={styles.Services_header_img_outer}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.4 }}
              className={styles.Services_header_card}
            >
              <Image
                src={ServiceCard_img2}
                className={styles.Services_header_img}
                alt="none"
              />
              <div className={styles.Services_header_overlay_text}>
                <p className={styles.service_silver_text}>Gold</p>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.2 }}
                  className={styles.service_Package_text}
                >
                  <HeadingTextAnimation
                    heading={"package"}
                    justifyContent={"center"}
                  />
                </motion.div>
              </div>
            </motion.div>
            <div className={styles.Services_header_img1_description}>
              <div className={styles.Services_header_info}>
                <p className={styles.Services_header_info_text}>
                  Full Interior Project's including soft furnishing and
                  customised design for you.
                </p>
              </div>
              <div className={styles.Services_header_info__range}>
                <p className={styles.Services_header_price_range}>
                  starting from:
                </p>
                <p className={styles.Services_header_price}>₹2200/Sq.ft</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.4 }}
                className={styles.Service_header_button_outer}
              >
                <Button button_text="Book Now" />
              </motion.div>
            </div>
          </div>
          <div className={styles.Services_header_img_outer}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.6 }}
              className={styles.Services_header_card}
            >
              <Image
                src={ServiceCard_img3}
                className={styles.Services_header_img}
                alt="none"
              />
              <div className={styles.Services_header_overlay_text}>
                <p className={styles.service_silver_text}>Platinum</p>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 2, delay: 1 }}
                  className={styles.service_Package_text}
                >
                  <HeadingTextAnimation
                    heading={"package"}
                    justifyContent={"center"}
                  />
                </motion.div>
              </div>
            </motion.div>
            <div className={styles.Services_header_img1_description}>
              <div className={styles.Services_header_info}>
                <p className={styles.Services_header_info_text}>
                  Fully customised projects keeping all the requirements in mind
                  of a luxury lifestyle . Edit and reviewed by Ananya.
                </p>
              </div>
              <div className={styles.Services_header_info__range}>
                <p className={styles.Services_header_price_range}>
                  starting from:
                </p>
                <p className={styles.Services_header_price}>₹1500/Sq.ft</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.6 }}
                className={styles.Service_header_button_outer}
              >
                <Button button_text="Book Now" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services_Header;
