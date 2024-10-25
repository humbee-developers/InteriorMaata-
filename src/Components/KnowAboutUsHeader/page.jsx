"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import Button6 from "@/Common/Buttons/button6";
import Image from "next/image";
import { FreeMode, Thumbs, Pagination, Autoplay } from "swiper/modules";
import project1 from "@/images/project1.jpg";
import project2 from "@/images/newimg1.jpg";
import project3 from "@/images/project3.jpg";
import project4 from "@/images/project4.jpg";
import styles from "@/Components/KnowAboutUsHeader/knowAboutUs.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Page = () => {
  const text =
    "Trad-Mo embodies the harmonious fusion of Traditional Indian and Modern minimal Design . Its an idea of an open bright space with Complementary furniture but some Indian traditional elements were you have your roots hold , that’s when you know you are in the right space . This a sustainable style of design , more than that this is a way of life .If you think about the Practical side of the Style , Minimal maintenance required for Trad-Mo . Timeless , Sustainable , Close to your root , Maintenance free Life complementing today’s lifestyle . ";

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

  const imageAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.3,
        ease: "easeOut",
      },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 1.4,
        ease: "easeOut",
      },
    },
  };

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
      <div>
        <div className={styles.aboutUsHeader_outer}>
          <div className={styles.aboutUsHeader} ref={ref}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.9 }}
            >
              <HeadingTextAnimation
                heading={"TRAD-MO"}
                justifyContent={"center"}
                className={styles.ananya}
              />
            </motion.div>
            <div className={styles.aboutUs_flex_divider}>
              <div className={styles.aboutUs_banner_image_outer}>
                <Swiper
                  modules={[FreeMode, Thumbs, Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                  }}
                  loop={true}
                  speed={1000}
                >
                  <SwiperSlide>
                    <div className={styles.aboutUs_banner_image}>
                      <Image
                        src={project1}
                        alt="image"
                        className={styles.aboutUs_banner_image}
                        width={480}
                        height={400}
                        // priority
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.aboutUs_banner_image}>
                      <Image
                        src={project2}
                        alt="image"
                        className={styles.aboutUs_banner_image}
                        width={480}
                        height={400}
                        // priority
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.aboutUs_banner_image}>
                      <Image
                        src={project3}
                        alt="image"
                        className={styles.aboutUs_banner_image}
                        width={480}
                        height={400}
                        // priority
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.aboutUs_banner_image}>
                      <Image
                        src={project4}
                        alt="image"
                        className={styles.aboutUs_banner_image}
                        width={480}
                        height={400}
                        loading="lazy"
                        // priority
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <motion.div
                className={styles.aboutUs_banner_text_outer}
                variants={sentence}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {text.split("").map((char, index) => (
                  <motion.span
                    className={styles.aboutUs_banner_text}
                    key={char + "-" + index}
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.div
                  className={styles.aboutUs_buttonOuter}
                  variants={buttonAnimation}
                  initial="hidden"
                  animate={controls}
                >
                  <Button6 button_text="KNOW MORE" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
