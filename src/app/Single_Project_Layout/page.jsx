"use client";
import React, { useEffect , useRef ,useState } from "react";
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
import wrong_logo from "@/images/wrong_logo.png"
import Interior_last_room_Svg from "@/svgs/Interior_Lastroom.svg";
import styles from "@/app/Single_Project_Layout/Single_project.module.css";
const Project_Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };






  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [refX, inViewX] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();
  const controlsX = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  useEffect(() => {
    if (inViewX) {
      controlsX.start("visible");
    }
  }, [controlsX, inViewX]);


  const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.008,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

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
        </div>

        <div className={styles.First_project_layout_image}>
          <div className={styles.First_project_layout_image2_innerX}>
          <Image
            src={Single_project_image1}
            alt="none"
            className={styles.Single_project_image1}
          />
          </div>
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
          <div className={styles.First_project_layout_image2_innerX}>
          <Image
            src={Single_project_image4}
            alt="none"
            className={styles.Single_project_image1}
          />
          </div>
        </div>

        {/* 5 images */}

    <div className={styles.interior_material_outer}>
      <div className={styles.interior_material_content}>
        {[interior_material_img1, interior_material_img2, interior_material_img3, interior_material_img4, interior_material_img5].map((imgSrc, index) => (
          <div key={index} className={styles.interior_material_text} onClick={() => handleImageClick(imgSrc)}>
            <Image
              src={imgSrc}
              alt="Interior Material"
              className={styles.interior_material_img}
            />
            <div className={styles.interior_material_overlay}>
              <p className={styles.interior_material_overlay_text}>Interior Material</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={handleCloseModal}>
            <Image src={wrong_logo} alt="Interior Material" />
            </span>
            <Image src={currentImage} alt="Interior Material" className={styles.modalImage} />
          </div>
        </div>
      )}
    </div>

        {/* end */}
        <div className={styles.interior_material_specs_content} ref={refX}>
        <motion.div
              className={styles.interior_material_specs_text}
              variants={sentence}
              initial="hidden"
              animate={inViewX ? "visible" : "hidden"}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  className={styles.interior_material_specs_text}
                  key={char + "-" + index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
        </div>

        <div className={styles.Interior_second_text_content}>
          <div className={styles.Interior_second_text_content_first}>

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
          </div>
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
