import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from 'next/navigation'
import Contact_us_person_img from "@/images/contact_person1.png";
import styles from "@/Components/ContactUs_Image/ContactUsImage.module.css";

const Page = () => {
  const router = useRouter()
  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });
  const controls1 = useAnimation();

  const imageAnimations = [
    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: -140,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
          type: "spring",
          stiffness: 70,
        },
      },
    },
  ];

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
      router.push('mailto:Ananya@interiormaata.com');
    }
  };
  

  return (
    <>
      <motion.div
        variants={imageAnimations[0]}
        initial="hidden"
        animate={controls1}
        className={styles.Contact_Us_img_outer}
        ref={ref1}
      >
        <Image src={Contact_us_person_img} />
        
      </motion.div>
      <div className={styles.Contact_us_person_text}>
          <div type="button" onClick={handleEmailClick} className={styles.Contact_us_person_details}>
            Consultancy@interiormaata.com
          </div>
          <div type="button" onClick={handleEmailClick1} className={styles.Contact_us_person_details_second}>
            Ananya@interiormaata.com
          </div>
        </div>
      <div className={styles.iframe_outer}>
        <iframe
          className={styles.iframe_inner}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5616609604035!2d73.16898167589716!3d22.29458844310124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5af3411c979%3A0xe3db75e21ae63261!2sInterior%20Maata%20Studio!5e0!3m2!1sen!2sin!4v1709015822224!5m2!1sen!2sin"
          allowFullScreen=""
          // loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Page;
