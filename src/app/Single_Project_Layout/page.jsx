"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Stairs from "@/Animations/Stairs";
import wrong_logo from "@/images/wrong_logo.png";
import Interior_last_room from "@/images/Interior_last_room.png";
import Interior_last_room_Svg from "@/svgs/Interior_Lastroom.svg";
import styles from "@/app/Single_Project_Layout/Single_project.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Project_Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [singleProject, setSingleProject] = useState([]);
  const [tabUrl, setTabUrl] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    let hashUrl = hash.slice(1);
    setTabUrl(hashUrl);
    handleSingleProject(hashUrl);
  }, [pathname, searchParams]);

  const handleSingleProject = async (hashUrl) => {
    try {
      const response = await fetch(
        `https://interiormaataassets.humbeestudio.xyz/wp-json/acf/v3/posts/${hashUrl}/`
      );
      const data = await response.json();
      setSingleProject([data]);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

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
  }, []);

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
  // client_name
  return (
    <Stairs>
      {singleProject?.map((item, index) => (
        <div className={styles.First_project_layout_header} key={index}>
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
                    heading={item?.acf?.project_name}
                    justifyContent={"center"}
                  />
                  {/* <HeadingTextAnimation
                    heading={" dream home"}
                    justifyContent={"center"}
                  /> */}
                </motion.div>
              </div>
            </div>
          </div>

          <div className={styles.First_project_layout_image}>
            <div className={styles.First_project_layout_image2_innerX}>
              <Image
                src={item.acf.heading_image}
                alt="none"
                className={styles.Single_project_image1}
                width={1000}
                height={700}
              />
            </div>
            <div className={styles.First_project_layout_image2}>
              <div className={styles.First_project_layout_image2_inner}>
                <Image
                  src={item.acf.image2}
                  alt="none"
                  className={styles.Single_project_image1}
                  width={1000}
                  height={600}
                />
              </div>
              <div className={styles.First_project_layout_image2_inner}>
                <Image
                  src={item.acf.image3}
                  alt="none"
                  className={styles.Single_project_image1}
                  width={1000}
                  height={600}
                />
              </div>
            </div>
            <div className={styles.First_project_layout_image2_innerX}>
              <Image
                src={item.acf.image4}
                alt="none"
                className={styles.Single_project_image1}
                width={1000}
                height={700}
              />
            </div>
            <div className={styles.First_project_layout_image2}>
              <div className={styles.First_project_layout_image2_inner}>
                <Image
                  src={item.acf.image5}
                  alt="none"
                  className={styles.Single_project_image1}
                  width={1000}
                  height={600}
                />
              </div>
              <div className={styles.First_project_layout_image2_inner}>
                <Image
                  src={item.acf.image6}
                  alt="none"
                  className={styles.Single_project_image1}
                  width={1000}
                  height={600}
                />
              </div>
            </div>
            <div className={styles.First_project_layout_image2_innerX}>
              <Image
                src={item.acf.image7}
                alt="none"
                className={styles.Single_project_image1}
                width={1000}
                height={700}
              />
            </div>
          </div>

          <div className={styles.interior_material_outer}>
            <div className={styles.interior_material_content}>
              {[
                { img: item.acf.material_image1, name: item.acf.material_name1 },
                { img: item.acf.material_image2, name: item.acf.material_name2 },
                { img: item.acf.material_image3, name: item.acf.material_name3 },
                { img: item.acf.material_image4, name: item.acf.material_name4 },
                { img: item.acf.material_image5, name: item.acf.material_name5 },
                { img: item.acf.material_image6, name: item.acf.material_name6 },
              ]
                .filter((imgObj) => imgObj.img) // Filter out objects without an image
                .map((imgObj, index) => (
                  <div
                    className={styles.interior_material_text}
                    onClick={() => handleImageClick(imgObj.img)}
                    key={index}
                  >
                    <Image
                      src={imgObj.img}
                      alt="Interior Material"
                      className={styles.interior_material_img}
                      width={1000}
                      height={600}
                    />
                    <div className={styles.interior_material_overlay}>
                      <p className={styles.interior_material_overlay_text}>
                        {imgObj.name}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {isModalOpen && (
              <div className={styles.modal} onClick={handleModalClick}>
                <div
                  className={styles.modalContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className={styles.close} onClick={handleCloseModal}>
                    <Image src={wrong_logo} alt="Close" />
                  </span>
                  <Image
                    src={currentImage}
                    alt="Interior Material"
                    className={styles.modalImage}
                    width={1000}
                    height={600}
                  />
                </div>
              </div>
            )}
          </div>

          <div className={styles.interior_material_specs_content} ref={refX}>
            <motion.div
              className={styles.interior_material_specs_text}
              variants={sentence}
              initial="hidden"
              animate={inViewX ? "visible" : "hidden"}
            >
              {item.acf.paragraph.split("").map((char, index) => (
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
            <Link href={item.acf.video} target="_blank">
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
            </Link>
          </div>
        </div>
      ))}
    </Stairs>
  );
};

export default Project_Header;
