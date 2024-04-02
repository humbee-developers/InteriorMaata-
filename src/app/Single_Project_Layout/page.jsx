"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Stairs from "@/Animations/Stairs";
import Single_project_image1 from "@/images/single_project_img1.png";
import Single_project_image2 from "@/images/single_project_img2.png";
import Single_project_image3 from "@/images/single_project_img3.png";
import Single_project_image4 from "@/images/single_project_img4.png";
import interior_material_img1 from "@/images/interior_material_img1.png";
import interior_material_img2 from "@/images/interior_material_img2.png";
import interior_material_img3 from "@/images/interior_material_img3.png";
import interior_material_img4 from "@/images/interior_material_img4.png";
import interior_material_img5 from "@/images/interior_material_img5.png";
import Interior_last_room from "@/images/Interior_last_room.png";
import Interior_last_room_Svg from "@/svgs/Interior_Lastroom.svg";
import styles from "@/app/Single_Project_Layout/Single_project.module.css";
const Project_Header = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });


  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Stairs>
      <div className={styles.First_project_layout_header}>
        <div className={styles.first_project_layout_outer}>
          <div className={styles.first_project_layout_content}>
            <div className={styles.first_project_text_header}>
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.9 }}
              >
                <HeadingTextAnimation
                  heading={"Jaimini and Amit’s"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={" dream home"}
                  justifyContent={"center"}
                />
              </motion.div>
            </div>
          </div>
          <div className={styles.first_project_text_firstcontent}>
            <p className={styles.first_project_text_content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={styles.First_project_layout_image}>
          <Image
            src={Single_project_image1}
            alt="none"
            className={styles.Single_project_image1}
          />
          <div className={styles.First_project_layout_image2}>
            <div className={styles.First_project_layout_image2_inner}>
              <Image
                src={Single_project_image2}
                alt="none"
                className={styles.Single_project_image1}
              />
            </div>
            <div className={styles.First_project_layout_image2_inner}>
              <Image
                src={Single_project_image3}
                alt="none"
                className={styles.Single_project_image1}
              />
            </div>
          </div>
          <Image
            src={Single_project_image4}
            alt="none"
            className={styles.Single_project_image1}
          />
        </div>
        {/* 5 images */}
        <div className={styles.interior_material_outer}>
          <div className={styles.interior_material_content}>
            <div className={styles.interior_material_text}>
              <Image
                src={interior_material_img1}
                alt="none"
                className={styles.interior_material_img}
              />
              <div className={styles.interior_material_overlay}>
                <p className={styles.interior_material_overlay_text}>
                  Interior Material
                </p>
              </div>
            </div>
            <div className={styles.interior_material_text}>
              <Image
                src={interior_material_img2}
                alt="none"
                className={styles.interior_material_img}
              />
              <div className={styles.interior_material_overlay}>
                <p className={styles.interior_material_overlay_text}>
                  Interior Material
                </p>
              </div>
            </div>
            <div className={styles.interior_material_text}>
              <Image
                src={interior_material_img3}
                alt="none"
                className={styles.interior_material_img}
              />
              <div className={styles.interior_material_overlay}>
                <p className={styles.interior_material_overlay_text}>
                  Interior Material
                </p>
              </div>
            </div>
            <div className={styles.interior_material_text}>
              <Image
                src={interior_material_img4}
                alt="none"
                className={styles.interior_material_img}
              />
              <div className={styles.interior_material_overlay}>
                <p className={styles.interior_material_overlay_text}>
                  Interior Material
                </p>
              </div>
            </div>
            <div className={styles.interior_material_text}>
              <Image
                src={interior_material_img5}
                alt="none"
                className={styles.interior_material_img}
              />
              <div className={styles.interior_material_overlay}>
                <p className={styles.interior_material_overlay_text}>
                  Interior Material
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className={styles.interior_material_specs_content}>
          <p className={styles.interior_material_specs_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className={styles.Interior_second_text_content}>
          <p className={styles.Interior_second_text_content_first}>

          <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                transition={{ duration: 0.9 }}
              >
                <HeadingTextAnimation
                  heading={"interiormaata: an estate agency"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"with a conscience, selling beautiful"}
                  justifyContent={"center"}
                />
                 <HeadingTextAnimation
                  heading={"homes across vadodara & beyond..."}
                  justifyContent={"center"}
                />
              </motion.div>


            {/* interiormaata: an estate agency with a conscience, selling beautiful
            homes across vadodara & beyond... */}
          </p>
        </div>

        <div className={styles.interior_last_room_Section}>
          <Image
            src={Interior_last_room}
            alt="none"
            className={styles.interior_last_room_img}
          />
          <div className={styles.interior_last_room_overlay}>
            <div className={styles.interior_last_room_overlay_svgs}>
              <Image
                src={Interior_last_room_Svg}
                className={styles.inetrior_lastroom_img}
              />
            </div>
          </div>
        </div>
      </div>
    </Stairs>
  );
};

export default Project_Header;
