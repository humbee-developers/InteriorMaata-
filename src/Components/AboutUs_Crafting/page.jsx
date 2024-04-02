import React from "react";
import Image from "next/image";
import Crafting_section_img from "@/images/Ourdesign.png";
import styles from "@/Components/AboutUs_Crafting/Crafting.module.css";
const Page = () => (
  <>
    <div className={styles.Crafting_Section}>
      <div className={styles.Crafting_Section_Image}>
        <Image
          src={Crafting_section_img}
          alt="none"
          className={styles.Crafting_section_img}
        />
        <div className={styles.Crafting_Section_Content}>
          <div className={styles.Crafting_Section_Content_Text}>
            <div>
              <p className={styles.Crafting_Section_Left}>#Interiormaata</p>
            </div>
            <div>
              <p className={styles.Crafting_Section_Right}>
                Crafting spaces where style meets comfort,
                <br /> and every detail tells a story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Page;
