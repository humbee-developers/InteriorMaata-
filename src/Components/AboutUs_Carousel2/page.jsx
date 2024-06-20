import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import fire from "@/images/fire_moodboard.webp";
import air from "@/images/air_moodboard.webp";
import water from "@/images/water_moodboard.webp";
import space from "@/images/space_moodboard.webp";
import earth from "@/images/earth_moodboard.webp";
import "@/Components/AboutUs_Carousel2/Inbuilt.css";
import styles from "@/Components/AboutUs_Carousel2/AboutUS_Carousel2.module.css";

const Page = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleWidth = () => {
    setIsExpanded(!isExpanded);
    // setIsExpanded(true);
  };

  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: false,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Separate animation controls for each slider
  const controls1 = useAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  const sliderRef = useRef(null);

  const goToSlide = (slideIndex) => {
    sliderRef.current.slickGoTo(slideIndex);
    setCurrentSlide(slideIndex);
  };

  const totalImages = 5;

  var settings = {
    dots: false,
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    fade: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    afterChange: (currentIndex) => {
      // resetAnimations();
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          // arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 476,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const activeButtonClass = styles.activeButton;

  const buttonColors = ["#ae7b56", "#d18211", "#677176", "#a39280", "#a4a3a4"];

  return (
    <div className={styles.main_carousel}>
      <div className={styles.wrapper}>
        <Slider {...settings} ref={sliderRef}>
          <div key={1} className={styles.slide1_outer} ref={ref1}>
            <div className={styles.slideContent}>
              <div className={styles.slide1}>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"EARTH"}
                    justifyContent={"flex-start"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>

                <div className={styles.moodboard_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={`${styles.slideControlButtons} ${
                      isExpanded ? styles.expanded : ""
                    }`}
                    onClick={toggleWidth}
                  >
                    {isExpanded ? (
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    ) : (
                      <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0 ? activeButtonClass : ""
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button>
                    )}
                  </div>
                </div>
              </div>

              <motion.div className={styles.side2}>
                <Image className={styles.imagex} src={earth} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 2 */}

          <div key={2} className={styles.slide1_outer} ref={ref2}>
            <div className={styles.slideContent}>
              <div className={styles.slide1}>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"FIRE"}
                    justifyContent={"flex-start"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>

                <div className={styles.moodboard_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={`${styles.slideControlButtons} ${
                      isExpanded ? styles.expanded : ""
                    }`}
                    onClick={toggleWidth}
                  >
                    {isExpanded ? (
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    ) : (
                      <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0 ? activeButtonClass : ""
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button>
                    )}
                  </div>
                </div>
              </div>
              <motion.div>
                <Image className={styles.imagex} src={fire} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 3 */}

          <div key={3} className={styles.slide1_outer} ref={ref3}>
            <div className={styles.slideContent}>
              <div className={styles.slide1}>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"AIR"}
                    justifyContent={"flex-start"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>

                <div className={styles.moodboard_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={`${styles.slideControlButtons} ${
                      isExpanded ? styles.expanded : ""
                    }`}
                    onClick={toggleWidth}
                  >
                    {isExpanded ? (
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    ) : (
                      <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0 ? activeButtonClass : ""
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button>
                    )}
                  </div>
                </div>
              </div>
              <motion.div>
                <Image className={styles.imagex} src={air} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 4 */}

          <div key={4} className={styles.slide1_outer} ref={ref4}>
            <div className={styles.slideContent}>
              <div className={styles.slide1}>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"WATER"}
                    justifyContent={"flex-start"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>

                <div className={styles.moodboard_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={`${styles.slideControlButtons} ${
                      isExpanded ? styles.expanded : ""
                    }`}
                    onClick={toggleWidth}
                  >
                    {isExpanded ? (
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    ) : (
                      <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0 ? activeButtonClass : ""
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button>
                    )}
                  </div>
                </div>
              </div>
              <motion.div>
                <Image className={styles.imagex} src={water} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 5 */}

          <div key={5} className={styles.slide1_outer} ref={ref5}>
            <div className={styles.slideContent}>
              <div className={styles.slide1}>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"SPACE"}
                    justifyContent={"flex-start"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>

                <div className={styles.moodboard_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={`${styles.slideControlButtons} ${
                      isExpanded ? styles.expanded : ""
                    }`}
                    onClick={toggleWidth}
                  >
                    {isExpanded ? (
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 ? activeButtonClass : ""
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    ) : (
                      <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0 ? activeButtonClass : ""
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button>
                    )}
                  </div>
                </div>
              </div>
              <motion.div>
                <Image className={styles.imagex} src={space} alt="image" />
              </motion.div>
            </div>
          </div>
        </Slider>
      </div>

      <div className={styles.imageNumbering}>
        <div className={styles.number}>
          <span>0{currentSlide + 1}</span>/0{totalImages}
        </div>
      </div>
    </div>
  );
};

export default Page;
