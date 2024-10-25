"use client"
import React, { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import  HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation"
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Cover_image from "@/images/AboutUs_Ananya_cover_image.png";
import styles from "@/Components/AboutusAnanya/aboutusAnanya.module.css";
const Page = () => {
  const text =useMemo(() =>
    "Ananya ( Known as interior maata ) is an Interior designer with 9 years of experience in Residential and Commercial projects from Kolkata, Mumbai, Gujarat, and Nepal. She is well known for her Youtube videos and holds a strong aesthetic for Minimal, Sustainable home dećor.",
  []);


  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.008,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const imageAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay:1.3,
        ease: "easeOut",
      },
    },
  };
  const buttonAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 1.4,
        ease: "easeOut",
      },
    },
  };
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
    <div>
      <div className={styles.aboutUsHeader_outer}>
        <div className={styles.aboutUsHeader} ref={ref}>
        <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
         >
        <HeadingTextAnimation
          heading={"ananya"}
          justifyContent={"center"}
          className={styles.ananya}
        />
        <HeadingTextAnimation
          heading={"Bhattacharjee"}
          justifyContent={"center"}
          className={styles.ananya}
        />
        </motion.div>
          <div className={styles.aboutUs_flex_divider}>
            <div className={styles.aboutUs_banner_image_outer}>
              <motion.div
                className={styles.aboutUs_banner_image}
                variants={imageAnimation}
                initial="hidden"
                animate={controls}
              >
                <Image
                  src={Cover_image}
                  priority="true"
                  alt="image"
                  className={styles.aboutUs_banner_image}
                />
              </motion.div>
            </div>
            <motion.div
              className={styles.aboutUs_banner_text_outer}
              variants={sentence}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  className={styles.aboutUs_banner_text}
                  key={char + "-" + index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))}
              <motion.div
                className={styles.aboutUs_buttonOuter}
                variants={buttonAnimation}
                initial="hidden"
                animate={controls}
              >
                interior maata
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;








