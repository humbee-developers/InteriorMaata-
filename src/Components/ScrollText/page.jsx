import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/Components/ScrollText/scrollText.module.css";
const ScrollText = () => {
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.9 }}
      className={styles.Consultancy_page_second_content}
    >
      <HeadingTextAnimation
        heading={" Get your home designed in the "}
        justifyContent={"left"}
        className={styles.Consultancy_page_second_content_text}
      />
      <HeadingTextAnimation
        heading={" comfort of your home without  "}
        justifyContent={"left"}
        className={styles.Consultancy_page_second_content_text}
      />

      <HeadingTextAnimation
        heading={"any hassle. Our team of excellent "}
        justifyContent={"left"}
        className={styles.Consultancy_page_second_content_text}
      />

      <HeadingTextAnimation
        heading={" designers will guide you in designing"}
        justifyContent={"left"}
        className={styles.Consultancy_page_second_content_text}
      />

      <HeadingTextAnimation
        heading={"  your home exactly the way you want."}
        justifyContent={"left"}
        className={styles.Consultancy_page_second_content_text}
      />
    </motion.div>
  );
};

export default ScrollText;
