import React from "react";
import Image from "next/image";
import Project_Image from "@/images/Project_Ananya.png";
import styles from "@/Components//Projects_Flex/Projectflex.module.css";
const Page = () => {
  return (
    <div className={styles.Project_Flex_Container}>
      <div className={styles.Project_Flex_Content}>
        <div className={styles.Project_Flex_Desc}>
          <p className={styles.Project_Flex_Desc_inner}>
            Ananya ( Known as interior maata ) is an Interior designer with 9
            years of experience in Residential and Commercial projects from
            Kolkata, Mumbai, Gujarat, and Nepal. She is well known for her
            Youtube videos and holds a strong aesthetic for Minimal, Sustainable
            home dećor.
             <p className={styles.Project_Flex_Desc_inner_space}>Her Design style contains a mix of Minimal Modern
            design and Indian traditional , which is named TRAD-MO. According to
            her, TRAD-MO is the millennial's design, where a person can get the
            comfort of modern minimal design with some Indian touch in it.
            Ananya believes in design thinking every project and her projects
            include a personal touch from her team which only can be framed by
            them.
            </p>
          </p>
        </div>
        <div className={styles.Project_Flex_Image}>
            <Image src={Project_Image} className={styles.Project_Flex_Image_project}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
