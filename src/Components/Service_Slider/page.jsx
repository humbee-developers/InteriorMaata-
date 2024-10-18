"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "./Slider.css";
import Residential_Interior_Design from "@/images/Residential_Interior_Design.png";
import Commercial_Interior_Design from "@/images/Commercial_Interior_Design.png";
import Office_Interior_Design from "@/images/Office_Interior_Design.png";
import Services_interior_svg from "@/svgs/Services_svg.svg";
import arrow from "@/svgs/slider_arrow.svg";
import styles from "@/Components/Service_Slider/slider.module.css";
const Page = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false, // Only trigger once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);

  useEffect(() => {
    if (inView3) {
      controls.start("visible");
    }
  }, [controls, inView3]);
  return (
    <div className="productSlider">
      <div className="wrapper">
        <Swiper
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={500}
          navigation={{
            nextEl: ".productSlider .right",
            prevEl: ".productSlider .left",
            // disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Navigation, EffectFade, Pagination]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card2">
                <Image
                  src={Residential_Interior_Design}
                  alt="none"
                  className="imgg"
                ></Image>
              </div>
              <div className="card1">
                {/* <HomePageCommonHeading heading={"Our Product"} /> */}
                <div className={styles.Services_second_Content_inner}>
                  <motion.div
                    ref={ref1}
                    initial="hidden"
                    animate={inView1 ? "visible" : "hidden"}
                    transition={{ duration: 0.1, delay: 0 }}
                  >
                    <HeadingTextAnimation
                      heading={"Residential "}
                      justifyContent={"left"}
                      className={styles.Services_Content_residential}
                    />
                    <HeadingTextAnimation
                      heading={"Interior Design"}
                      justifyContent={"left"}
                      className={styles.Services_Content_residential}
                    />
                  </motion.div>
                  <div>
                    <p className={styles.Services_Content_residential_desc}>
                      Our residential interior design services are designed to
                      create beautiful and functional homes that reflect your
                      personal style and preferences.
                    </p>
                  </div>
                  <div>
                    <div className={styles.Services_Content_residential_list}>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Consultation and Needs Assessment
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Space Planning and Layout Design
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Concept Development and Design
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Furniture and Decor Selection
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg}  alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Custom Furniture and Built-ins
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg}  alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Lighting Design
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Color Consultation and Finishing
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg}  alt="none"/>
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Project Management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card2">
                <Image
                  src={Commercial_Interior_Design}
                  alt="none"
                  className="imgg"
                ></Image>
              </div>
              <div className="card1">
                <motion.div
                  className={styles.Services_second_Content}
                  ref={ref2}
                >
                  {/* content */}
                  <div className={styles.Services_second_Content_inner}>
                    <motion.div
                      initial="hidden"
                      animate={inView2 ? "visible" : "hidden"}
                      transition={{ duration: 0.5 }}
                    >
                      <HeadingTextAnimation
                        heading={"Commercial "}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                      <HeadingTextAnimation
                        heading={"Interior Design"}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                    </motion.div>
                    <div>
                      <p className={styles.Services_Content_residential_desc}>
                        Our commercial interior design services are designed to
                        create inspiring and functional spaces that enhance
                        productivity and creativity.
                      </p>
                    </div>
                    <div>
                      <div className={styles.Services_Content_residential_list}>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Space planning
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Layout design
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Furniture and decor selection
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Lighting design
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg}  alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Material selection
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Procurement
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Project management and execution
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card2">
                <Image
                  src={Office_Interior_Design}
                  alt="none"
                  className="imgg"
                ></Image>
              </div>
              <div className="card1">
                <motion.div
                  className={styles.Services_second_Content}
                  ref={ref3}
                >
                  {/* content */}
                  <div className={styles.Services_second_Content_inner}>
                    <motion.div
                      initial="hidden"
                      animate={inView3 ? "visible" : "hidden"}
                      transition={{ duration: 0.5 }}
                    >
                      <HeadingTextAnimation
                        heading={"Office "}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                      <HeadingTextAnimation
                        heading={"Interior Design"}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                    </motion.div>
                    <div>
                      <p className={styles.Services_Content_residential_desc}>
                        Our office interior design services are designed to
                        create modern and functional workspaces that reflect
                        your brand and values and enhance employee productivity
                        and satisfaction.
                      </p>
                    </div>

                    <div>
                      <div className={styles.Services_Content_residential_list}>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg}  alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Acoustic Design
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg}  alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Consultation and Needs Assessment
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg}  alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Space Planning and Layout Design
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg}  alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Concept Development and Design
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg}  alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Lighting Design
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg}  alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Sustainable Design Solutions
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none"/>
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Project Management
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content ends */}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="slider_btn">
          <div className="left">
            <Image src={arrow} alt="slider_arrow" />
          </div>
          <div className="right">
            <Image src={arrow} alt="slider_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
