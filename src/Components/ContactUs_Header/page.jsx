import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Contact_us_header_img from "@/images/contactUsTexture.png";
import styles from "@/Components/ContactUs_Header/contact.module.css";
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
    <>
      <div className={styles.Contact_Us_outer}>
        <Image
          src={Contact_us_header_img}
          alt="none"
          className={styles.Contact_Us_img}
        />
        <div className={styles.Contact_us_overlay}>
          <div className={styles.Contact_us_overlay_text}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.9 }}
            >
              <HeadingTextAnimation
                heading={"Transforming "}
                justifyContent={"center"}
              />
              <HeadingTextAnimation
                heading={"Spaces, Inspiring Lives"}
                justifyContent={"center"}
              />

            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
