import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import third_Section_image1 from "@/images/AboutUs_flex_image1.jpg";
import third_Section_image2 from "@/images/residential_logo.jpg";
import Button from "@/Common/Buttons/button6";
import Button3 from "@/Common/Buttons/button7";
import styles from "@/Components/AboutUs_flex/AboutUsFlex.module.css";


const Page = () => {
  const router = useRouter();
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className={styles.MainFlexContainer}>
      <div className={styles.forth_Section_container} ref={ref1}>
        <div className={styles.forth_Section_content}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: 0.2 }}
            className={styles.forth_section_first}
          >
            Design
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={styles.forth_Section_execution}
          >
            Execution
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className={styles.forth_section_third}
          >
            Team Interior maata helps you to translate
            <br />
            your dream vision to reality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={styles.forth_content_button}
          >
            <Button button_text="Explore" 
             />
          </motion.div>
        </div>
        <div className={styles.forth_Section_image}>
          <Image
            src={third_Section_image1}
            alt="Description of the image"
            className={styles.forth_Section_img}
          />
        </div>
      </div>

      <div className={styles.forth_Section_container1} ref={ref2}>
        <div className={styles.forth_Section_image}>
          <Image
            src={third_Section_image2}
            alt="Description of the image"
            className={styles.forth_Section_img}
          />
        </div>
        <div className={styles.forth_Section_content1}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.forth_section_first}
          >
            Design
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.forth_Section_execution}
          >
            Consultancy
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.forth_section_third}
          >
           Get Design Concepts based on your 
            <br />
            assessment and budget
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.forth_content_button}
          >
            <Button3 button_text="About us" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
