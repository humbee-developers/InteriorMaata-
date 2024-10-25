import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Project_Image from "@/images/Project_Ananya.png";
import { useInView } from "react-intersection-observer";
import styles from "@/Components//Projects_Flex/Projectflex.module.css";

const Page = () => {
  const text =useMemo(() =>
  // const text =
    " Ananya ( Known as interior maata ) is an Interior designer with 9 years of experience in Residential and Commercial projects from Kolkata, Mumbai, Gujarat, and Nepal. She is well known for her  Youtube videos and holds a strong aesthetic for Minimal, Sustainable home dećor",
    []);

    const text1 =useMemo(() =>
  // const text1 =
    "Her Design style contains a mix of Minimal Modern design and Indian traditional , which is named TRAD-MO. According to her, TRAD-MO is the millennial's design, where a person can get the comfort of modern minimal design with some Indian touch in it. Ananya believes in design thinking every project and her projects include a personal touch from her team which only can be framed by them.",
    []);
  const controls = useAnimation();
  const controls1 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible").then(() => controls1.start("visible"));
    }
  }, [controls, controls1, inView]);

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.009,
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

  return (
    <div className={styles.Project_Flex_Container}>
      <div className={styles.Project_Flex_Content}>
        <div className={styles.Project_Flex_Desc} ref={ref}>
          <motion.div
            className={styles.Project_Flex_Desc_inner}
            variants={sentence}
            initial="hidden"
            animate={controls}
          >
            {text.split("").map((char, index) => (
              <motion.span
                className={styles.Project_Flex_Desc_inner}
                key={char + "-" + index}
                variants={letter}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className={styles.Project_Flex_Desc_inner2}
            variants={sentence}
            initial="hidden"
            animate={controls1}
          >
            {text1.split("").map((char, index) => (
              <motion.span
                className={styles.Project_Flex_Desc_inner}
                key={char + "-" + index}
                variants={letter}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className={styles.Project_Flex_Image}>
          <Image
            src={Project_Image}
            className={styles.Project_Flex_Image_project}
            alt="none"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
