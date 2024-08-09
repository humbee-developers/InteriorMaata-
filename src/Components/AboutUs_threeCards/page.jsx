import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home_Layer from "@/svgs/new_border.svg";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import styles from "@/Components/AboutUs_threeCards/AboutUs_threeCards.module.css";
import about_image1 from "@/images/home_background1.png";
import about_image2 from "@/images/home_background2.png";
import about_image3 from "@/images/home_background3.png";
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
    <div className={styles.landing_page_second_container} ref={ref}>
      {/* <div className={styles.landing_page_second_content}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
        >
          <HeadingTextAnimation
            heading={"Interiormaata Studio : Step into a realm"}
            justifyContent={"center"}
            className={styles.landing_page_second_content_text}
          />
          <HeadingTextAnimation
            heading={"where tradition dance with modern"}
            justifyContent={"center"}
            className={styles.landing_page_second_content_text}
          />
          <HeadingTextAnimation
            heading={"minimalism, creating spaces that"}
            justifyContent={"center"}
            className={styles.landing_page_second_content_text}
          />
           <HeadingTextAnimation
            heading={" resonate with soulful elegance"}
            justifyContent={"center"}
            className={styles.landing_page_second_content_text}
          />
        </motion.div>
      </div> */}

      <div className={styles.landing_page_second_images}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className={styles.Landing_image1}
        >
          <Image src={Home_Layer} alt="none" />
          <Image src={about_image1} alt="none" className={styles.about_hover} />
          <div className={styles.overlay_text}>
            <p className={styles.overlay_text_content}>Interior<br />Design</p>
            <p className={styles.overlay_text_content1}>Consultancy</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
          className={styles.Landing_image2}
        >
          <Image src={Home_Layer} alt="none" />
          <Image src={about_image2} alt="none" className={styles.about_hover} />
          <div className={styles.overlay_text}>
          <p className={styles.overlay_text_content}>architectural<br />Consultation </p>
            <p className={styles.overlay_text_content1}>design</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
          className={styles.Landing_image3}
        >
          <Image src={Home_Layer} alt="none" />
          <Image src={about_image3} alt="none" className={styles.about_hover} />
          <div className={styles.overlay_text}>
            <p className={styles.overlay_text_content}>turn key </p>
            <p className={styles.overlay_text_content1}>Executions </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Landing_page;
