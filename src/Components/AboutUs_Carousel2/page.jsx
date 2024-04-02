import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1_src1 from "@/images/AboutUs1.png";
import slide1_src2 from "@/images/AboutUs2.png";
import slide1_src3 from "@/images/AboutUs3.png";
import slide1_src4 from "@/images/AboutUs4.png";
import slide1_src5 from "@/images/AboutUs5.png";
import slide1_src6 from "@/images/AboutUs6.png";
import slide1_src7 from "@/images/Ellipse 10.png";
import slide1_src8 from "@/images/Ellipse 11.png";
import slide1_src9 from "@/images/Ellipse 12.png";
import slide1_src10 from "@/images/Ellipse 13.png";
import slide1_src11 from "@/images/Ellipse 14.png";

import slide2_src1 from "@/images/aboutUsSlideimage1.png";
import slide2_src2 from "@/images/aboutUsSlideimage2.png";
import slide2_src3 from "@/images/aboutUsSlideimage3.png";
import slide2_src4 from "@/images/aboutUsSlideimage4.png";
import slide2_src5 from "@/images/aboutUsSlideimage5.png";
import slide2_src6 from "@/svgs/aboutUsSlideimage6.svg";
import slide2_src7 from "@/images/aboutUsSlideimage7.png";
import slide2_src8 from "@/images/aboutUsSlideimage8.png";
import slide2_src9 from "@/images/aboutUsSlideimage9.png";
import slide2_src10 from "@/images/aboutUsSlideimage10.png";
import slide2_src11 from "@/images/aboutUsSlideimage11.png";

import slide3_src1 from "@/images/aboutUsSlideThreeImage1.png";
import slide3_src2 from "@/images/aboutUsSlideThreeImage2.png";
import slide3_src3 from "@/images/aboutUsSlideThreeImage3.png";
import slide3_src4 from "@/images/aboutUsSlideThreeImage4.png";
import slide3_src5 from "@/images/aboutUsSlideThreeImage5.png";
import slide3_src6 from "@/images/aboutUsSlideThreeImage6.png";
import slide3_src7 from "@/images/aboutUsSlideThreeImage7.png";
import slide3_src8 from "@/images/aboutUsSlideThreeImage8.png";
import slide3_src9 from "@/images/aboutUsSlideThreeImage9.png";
import slide3_src10 from "@/images/aboutUsSlideThreeImage10.png";
import slide3_src11 from "@/images/aboutUsSlideThreeImage11.png";

import slide4_src1 from "@/images/aboutUsSlideFourImage1.png";
import slide4_src2 from "@/images/aboutUsSlideFourImage2.png";
import slide4_src3 from "@/images/aboutUsSlideFourImage3.png";
import slide4_src4 from "@/images/aboutUsSlideFourImage4.png";
import slide4_src5 from "@/images/aboutUsSlideFourImage5.png";
import slide4_src6 from "@/images/aboutUsSlideFourImage6.png";
import slide4_src7 from "@/images/aboutUsSlideFourImage7.png";
import slide4_src8 from "@/images/aboutUsSlideFourImage8.png";
import slide4_src9 from "@/images/aboutUsSlideFourImage9.png";
import slide4_src10 from "@/images/aboutUsSlideFourImage10.png";
import slide4_src11 from "@/images/aboutUsSlideFourImage11.png";

import slide5_src1 from "@/images/aboutUsSlideFiveImage1.png";
import slide5_src2 from "@/images/aboutUsSlideFiveImage2.png";
import slide5_src3 from "@/images/aboutUsSlideFiveImage3.png";
import slide5_src4 from "@/images/aboutUsSlideFiveImage4.png";
import slide5_src5 from "@/images/aboutUsSlideFiveImage5.png";
import slide5_src6 from "@/images/aboutUsSlideFiveImage6.png";
import slide5_src7 from "@/images/aboutUsSlideFiveImage7.png";
import slide5_src8 from "@/images/aboutUsSlideFiveImage8.png";
import slide5_src9 from "@/images/aboutUsSlideFiveImage9.png";
import slide5_src10 from "@/images/aboutUsSlideFiveImage10.png";
import slide5_src11 from "@/images/aboutUsSlideFiveImage11.png";
import "@/Components/AboutUs_Carousel2/Inbuilt.css";
import styles from "@/Components/AboutUs_Carousel2/AboutUS_Carousel2.module.css";

const Page = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
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

  const imageAnimations = [
    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 1.5,
          delay: 1.3,
          x: { duration: 1.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,

        transition: {
          ease: "linear",
          duration: 1,
          delay: 0.8,
          x: { duration: 0.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.5,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1.5,
          ease: "easeOut",
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.5,
          delay: 1.5,
          x: { duration: 2.5 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 1.2,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.2,
          delay: 1.4,
          x: { duration: 2.2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.4,
          delay: 1.6,
          x: { duration: 2.4 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.6,
          delay: 1.8,
          x: { duration: 2.6 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2.8,
          delay: 2,
          x: { duration: 2.8 },
          type: "spring",
          stiffness: 100,
        },
      },
    },

    // second slider animations
  ];

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
    speed: 1500,
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

  return (
    <div className={styles.main_carousel}>
      <div className={styles.wrapper}>
        <Slider {...settings} ref={sliderRef}>
          <div className={styles.slide1} ref={ref1}>
            <div className={styles.slideContent}>
              <div>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"EARTH"}
                    justifyContent={"center"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>
              </div>
              <motion.div
                className={styles.image1}
                variants={imageAnimations[0]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src1} alt="image" />
                {/* <div className={styles.leftCenterText}>
                  <p className={styles.CenterTextInner}>EARTH</p>
                </div> */}
              </motion.div>
              <motion.div
                className={styles.image2}
                variants={imageAnimations[1]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src2} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image3}
                variants={imageAnimations[2]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src3} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image4}
                variants={imageAnimations[3]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src4} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image5}
                variants={imageAnimations[4]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src5} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image6}
                variants={imageAnimations[5]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src6} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image7}
                variants={imageAnimations[6]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src7} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image8}
                variants={imageAnimations[7]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src8} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image9}
                variants={imageAnimations[8]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src9} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image10}
                variants={imageAnimations[9]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src10} alt="image" />
              </motion.div>

              <motion.div
                className={styles.image11}
                variants={imageAnimations[10]}
                initial="hidden"
                animate={controls1}
              >
                <Image className="image" src={slide1_src11} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 2 */}

          <div className={styles.slid2}>
            <div className={styles.slideContent}>
            <div>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"FIRE"}
                    justifyContent={"center"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>
              </div>
              <motion.div className={styles.image12}>
                <Image className="image" src={slide2_src1} alt="image" />
              </motion.div>

              <motion.div className={styles.image13}>
                <Image className="image" src={slide2_src2} alt="image" />
              </motion.div>

              <motion.div className={styles.image14}>
                <Image className="image" src={slide2_src3} alt="image" />
              </motion.div>

              <motion.div className={styles.image15}>
                <Image className="image" src={slide2_src4} alt="image" />
              </motion.div>

              <motion.div className={styles.image16}>
                <Image className="image" src={slide2_src5} alt="image" />
              </motion.div>

              <motion.div className={styles.image17}>
                <Image className="image" src={slide2_src6} alt="image" />
              </motion.div>

              <motion.div className={styles.image18}>
                <Image className="image" src={slide2_src7} alt="image" />
              </motion.div>

              <motion.div className={styles.image19}>
                <Image className="image" src={slide2_src8} alt="image" />
              </motion.div>

              <motion.div className={styles.image20}>
                <Image className="image" src={slide2_src9} alt="image" />
              </motion.div>

              <motion.div className={styles.image21}>
                <Image className="image" src={slide2_src10} alt="image" />
              </motion.div>

              <motion.div className={styles.image22}>
                <Image className="image" src={slide2_src11} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 3 */}

          <div className={styles.slid2}>
            <div className={styles.slideContent}>
            <div>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"AIR"}
                    justifyContent={"center"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>
              </div>
              <motion.div className={styles.image23}>
                <Image className="image" src={slide3_src1} alt="image" />
              </motion.div>

              <motion.div className={styles.image24}>
                <Image className="image" src={slide3_src2} alt="image" />
              </motion.div>

              <motion.div className={styles.image25}>
                <Image className="image" src={slide3_src3} alt="image" />
              </motion.div>

              <motion.div className={styles.image26}>
                <Image className="image" src={slide3_src4} alt="image" />
              </motion.div>

              <motion.div className={styles.image27}>
                <Image className="image" src={slide3_src5} alt="image" />
              </motion.div>

              <motion.div className={styles.image28}>
                <Image className="image" src={slide3_src6} alt="image" />
              </motion.div>

              <motion.div className={styles.image29}>
                <Image className="image" src={slide3_src7} alt="image" />
              </motion.div>

              <motion.div className={styles.image30}>
                <Image className="image" src={slide3_src8} alt="image" />
              </motion.div>

              <motion.div className={styles.image31}>
                <Image className="image" src={slide3_src9} alt="image" />
              </motion.div>

              <motion.div className={styles.image32}>
                <Image className="image" src={slide3_src10} alt="image" />
              </motion.div>

              <motion.div className={styles.image33}>
                <Image className="image" src={slide3_src11} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 4 */}

          <div className={styles.slid2}>
            <div className={styles.slideContent}>
            <div>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"WATER"}
                    justifyContent={"center"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>
              </div>
              <motion.div className={styles.image34}>
                <Image className="image" src={slide4_src1} alt="image" />
              </motion.div>

              <motion.div className={styles.image35}>
                <Image className="image" src={slide4_src2} alt="image" />
              </motion.div>

              <motion.div className={styles.image36}>
                <Image className="image" src={slide4_src3} alt="image" />
              </motion.div>

              <motion.div className={styles.image37}>
                <Image className="image" src={slide4_src4} alt="image" />
              </motion.div>

              <motion.div className={styles.image38}>
                <Image className="image" src={slide4_src5} alt="image" />
              </motion.div>

              <motion.div className={styles.image39}>
                <Image className="image" src={slide4_src6} alt="image" />
              </motion.div>

              <motion.div className={styles.image40}>
                <Image className="image" src={slide4_src7} alt="image" />
              </motion.div>

              <motion.div className={styles.image41}>
                <Image className="image" src={slide4_src8} alt="image" />
              </motion.div>

              <motion.div className={styles.image42}>
                <Image className="image" src={slide4_src9} alt="image" />
              </motion.div>

              <motion.div className={styles.image43}>
                <Image className="image" src={slide4_src10} alt="image" />
              </motion.div>

              <motion.div className={styles.image44}>
                <Image className="image" src={slide4_src11} alt="image" />
              </motion.div>
            </div>
          </div>

          {/* slide 5 */}

          <div className={styles.slid2}>
            <div className={styles.slideContent}>
            <div>
                <motion.div
                  className={styles.leftCenterText}
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"SPACE"}
                    justifyContent={"center"}
                    className={styles.CenterTextInner}
                  />
                </motion.div>
              </div>
              <motion.div className={styles.image45}>
                <Image className="image" src={slide5_src1} alt="image" />
              </motion.div>

              <motion.div className={styles.image46}>
                <Image className="image" src={slide5_src2} alt="image" />
              </motion.div>

              <motion.div className={styles.image47}>
                <Image className="image" src={slide5_src3} alt="image" />
              </motion.div>

              <motion.div className={styles.image48}>
                <Image className="image" src={slide5_src4} alt="image" />
              </motion.div>

              <motion.div className={styles.image49}>
                <Image className="image" src={slide5_src5} alt="image" />
              </motion.div>

              <motion.div className={styles.image50}>
                <Image className="image" src={slide5_src6} alt="image" />
              </motion.div>

              <motion.div className={styles.image51}>
                <Image className="image" src={slide5_src7} alt="image" />
              </motion.div>

              <motion.div className={styles.image52}>
                <Image className="image" src={slide5_src8} alt="image" />
              </motion.div>

              <motion.div className={styles.image53}>
                <Image className="image" src={slide5_src9} alt="image" />
              </motion.div>

              <motion.div className={styles.image54}>
                <Image className="image" src={slide5_src10} alt="image" />
              </motion.div>

              <motion.div className={styles.image55}>
                <Image className="image" src={slide5_src11} alt="image" />
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

      <div className={styles.slideControlButtons}>
        <button
          className={styles.slideControlButton1}
          onClick={() => goToSlide(0)}
        ></button>
        <button
          className={styles.slideControlButton2}
          onClick={() => goToSlide(1)}
        ></button>
        <button
          className={styles.slideControlButton3}
          onClick={() => goToSlide(2)}
        ></button>
        <button
          className={styles.slideControlButton4}
          onClick={() => goToSlide(3)}
        ></button>
        <button
          className={styles.slideControlButton5}
          onClick={() => goToSlide(4)}
        ></button>
      </div>
    </div>
  );
};

export default Page;
