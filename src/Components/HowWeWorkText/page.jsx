import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/Components/HowWeWorkText/howWeWorkText.module.css";
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
    <div className={styles.happy_container}>
      <div className={styles.happy_title}>
        <div className={styles.happy_text}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.9 }}
          >
            <HeadingTextAnimation
              heading={"YOU START LIVING NOW."}
              justifyContent={"center"}
            />
            <HeadingTextAnimation
              heading={"HAPPY YOU , HAPPY US."}
              justifyContent={"center"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Page;
