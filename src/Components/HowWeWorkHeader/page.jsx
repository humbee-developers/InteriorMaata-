import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/Components/HowWeWorkHeader/howWeWork.module.css";
const Work = () => {
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
    <div className={styles.work_container}>
      <div className={styles.work_title}>
        <div className={styles.work_text}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.9 }}
          >
            <HeadingTextAnimation
              heading={"WE CAN MAKE YOUR"}
              justifyContent={"center"}
            />
            <HeadingTextAnimation
              heading={"DREAM COME TRUE"}
              justifyContent={"center"}
            />
          </motion.div>
        </div>
      </div>
      <div className={styles.work_title1}>
        <p className={styles.work_text1}>
          <span className={styles.ananya_said}>Ananya said,</span>" Every
          project is like a baby, you take care of them with lots of love and
          care, pamper them till it's big enough to move into a new family with
          proper manners and culture ". We stand for sustainable design and
          apply design thinking on it, which means each project is unique and
          customized according to your requirements. Here have a look at how it
          goes.
        </p>
      </div>
    </div>
  );
};
export default Work;
