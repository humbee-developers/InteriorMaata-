import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import { useRouter } from 'next/navigation'
import Contact_us_person_img from "@/images/connect_ananya.png";
import styles from "@/Components/ContactUs_Image/ContactUsImage.module.css";

const Page = () => {
  const router = useRouter()
  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });
  const controls1 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  const handleEmailClick = () => {
    if (typeof window !== 'undefined') {
      router.push('mailto:Consultancy@interiormaata.com');
    }
  };

  const handleEmailClick1 = () => {
    if (typeof window !== 'undefined') {
      router.push('mailto:business@interiormaata.com ');
    }
  };
  

  return (
    <div className={styles.contactUsPageOuter}>

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
      <motion.div
        variants=""
        initial="hidden"
        animate={controls1}
        className={styles.Contact_Us_img_outer}
        ref={ref1}
      >
        <Image src={Contact_us_person_img} alt="none" />
        
      </motion.div>
      <div className={styles.Contact_us_person_text}>
          <div type="button" onClick={handleEmailClick} className={styles.Contact_us_person_details}>
            Consultancy@interiormaata.com
          </div>
          <div type="button" onClick={handleEmailClick1} className={styles.Contact_us_person_details_second}>
            Business@interiormaata.com 
          </div>
        </div>
    </div>
  );
};

export default Page;
