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
  // const [isExpanded, setIsExpanded] = useState(false);

  // const toggleWidth = () => {
  //   setIsExpanded(!isExpanded);
  // };

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

  // const activeButtonClass = styles.activeButton;

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
                <strong className={styles.strong_earth}>ROOTED IN NATURE </strong> 
                   Reconnect with the grounding force of Earth, where natural
                  textures and earthy tones create a warm, welcoming
                  environment. The Earth moodboard showcases rich browns, lush
                  greens, and neutral shades that echo the beauty of the natural
                  world. Imagine wooden furniture, stone accents, and lush
                  greenery blending seamlessly to form a sanctuary that feels
                  both grounded and nurturing. This design fosters a deep sense
                  of peace and belonging, bringing the beauty of the outdoors
                  inside.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={styles.slideControlButtons}
                    // onClick={toggleWidth}
                  >
                    
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    
                      {/* <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button> */}
                    
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
                <strong className={styles.strong_fire}>IGNITE YOUR PASSION </strong> 
                   Feel the warmth and energy of Fire as it illuminates your
                  space with vibrant intensity. The Fire moodboard is a
                  celebration of bold reds, rich oranges, and glowing ambers,
                  balanced with dark, grounding tones. Think of warm, textured
                  fabrics, rustic metals, and the soft flicker of candlelight.
                  This design evokes a sense of passion and coziness, perfect
                  for creating intimate, inviting spaces that spark conversation
                  and connection.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={styles.slideControlButtons}
                    // onClick={toggleWidth}
                  >
                    
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    {/* ) : ( */}
                      {/* <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button> */}
                    {/* )} */}
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
                <strong className={styles.strong_air} >BREATH OF SERENITY </strong> 
                   Step into the ethereal world of Air, where lightness and
                  fluidity reign supreme. Our Air moodboard captures the essence
                  of breezy tranquility with a palette of soft whites, gentle
                  blues, and muted pastels. Imagine airy fabrics, delicate
                  drapery, and open spaces that breathe life into your home.
                  Elements like sheer curtains, light wooden accents, and
                  minimalistic decor create a serene atmosphere that feels as
                  refreshing as a gentle summer breeze.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={styles.slideControlButtons}
                    // onClick={toggleWidth}
                  >
                  
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    {/* ) : ( */}
                      {/* <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button> */}
                    {/* )} */}
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
                <strong className={styles.strong_water}>FLOW OF TRANQUILITY </strong> 
                   Dive into the calming embrace of Water, where fluidity and
                  depth bring a sense of peace and relaxation. Our Water
                  moodboard features soothing hues of aqua, deep blues, and
                  seafoam greens, complemented by flowing lines and reflective
                  surfaces. Picture the gentle ripple of a water feature, the
                  cool touch of marble, and the shimmer of glass accents, all
                  coming together to create a tranquil oasis that soothes your
                  soul.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={styles.slideControlButtons}
                    // onClick={toggleWidth}
                  >
                  
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1 
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    {/* ) : ( */}
                      {/* <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button> */}
                    {/* )} */}
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
                <strong className={styles.strong_space}>INFINITE INSPIRATION </strong> 
                   Explore the boundless possibilities of Space, where
                  imagination knows no limits. Our Space moodboard is a journey
                  through the cosmos, featuring deep, starry blacks, twinkling
                  silvers, and cosmic purples. Envision sleek, modern furniture,
                  reflective surfaces, and geometric patterns that mirror the
                  mysteries of the universe. This design element invites you to
                  dream big and create a home that feels both futuristic and
                  timeless.
                </div>
                <div className={styles.buttons_all}>
                  <div
                    className={styles.slideControlButtons
                     }
                    // onClick={toggleWidth}
                  >
                    
                      <>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 0 
                          }`}
                          style={{ backgroundColor: buttonColors[0] }}
                          onClick={() => goToSlide(0)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 1
                          }`}
                          style={{ backgroundColor: buttonColors[1] }}
                          onClick={() => goToSlide(1)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 2 
                          }`}
                          style={{ backgroundColor: buttonColors[2] }}
                          onClick={() => goToSlide(2)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 3 
                          }`}
                          style={{ backgroundColor: buttonColors[3] }}
                          onClick={() => goToSlide(3)}
                        ></button>
                        <button
                          className={`${styles.slideControlButton} ${
                            currentSlide === 4 
                          }`}
                          style={{ backgroundColor: buttonColors[4] }}
                          onClick={() => goToSlide(4)}
                        ></button>
                      </>
                    {/* ) : ( */}
                      {/* <button
                        className={`${styles.slideControlButton} ${
                          currentSlide === 0 
                        }`}
                        style={{ backgroundColor: buttonColors[currentSlide] }}
                        onClick={() => goToSlide(currentSlide)}
                      ></button> */}
                    {/* )} */}
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
