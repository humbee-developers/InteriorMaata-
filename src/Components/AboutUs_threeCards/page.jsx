import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home_Layer from "@/svgs/AboutUs_border.svg";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import styles from "@/Components/AboutUs_threeCards/AboutUs_threeCards.module.css";

function Landing_page() {
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
    <div className={styles.landing_page_second_container}>
      <div className={styles.landing_page_second_content}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
        >
          <HeadingTextAnimation
            heading={"interiormaata: an estate agency"}
            justifyContent={"center"}
            className={styles.landing_page_second_content_text}
          />
          <HeadingTextAnimation
            heading={"with a conscience, selling beautiful"}
            justifyContent={"center"}
            className={styles.landing_page_second_content_text}
          />
          <HeadingTextAnimation
            heading={"homes across vadodara & beyond..."}
            justifyContent={"center"}
            className={styles.landing_page_second_content_text}
          />
        </motion.div>
      </div>

      <div className={styles.landing_page_second_images}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className={styles.Landing_image1}
        >
          <Image src={Home_Layer} alt="none" />
          <div className={styles.overlay_text}>
            <p className={styles.overlay_text_content}>Interior</p>
            <p className={styles.overlay_text_content1}>Consultancy</p>
          </div>
        </motion.div>

        <motion.div
         ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
         className={styles.Landing_image2}>
          <Image src={Home_Layer} alt="none" />
          <div className={styles.overlay_text}>
            <p className={styles.overlay_text_content}>BEST IN</p>
            <p className={styles.overlay_text_content1}>CLASS QUALITY</p>
          </div>
        </motion.div>

        <motion.div
         ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
         className={styles.Landing_image3}>
          <Image src={Home_Layer} alt="none" />
          <div className={styles.overlay_text}>
            <p className={styles.overlay_text_content}>architectural</p>
            <p className={styles.overlay_text_content1}>design</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Landing_page;
