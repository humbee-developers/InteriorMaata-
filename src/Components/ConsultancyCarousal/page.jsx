import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax,EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";
import image1 from "@/images/consultancyProjectImage1.png";
import image2 from "@/images/consultancyProjectImage2.png";
import image3 from "@/images/consultancyProjectImage3.png";
import image4 from "@/images/consultancyProjectImage4.png";
import image5 from "@/images/consultancyProjectImage5.png";
import styles from "@/Components/ConsultancyCarousal/ConsultancyCarousal.module.css";
import "./ConsultancyCarousal.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
export default function App() {
  return (
    <>
      <Swiper
      navigation={true}
        modules={[Navigation, Parallax,  EffectFade]}
        // speed={2500}
        loop={true}
        effect="fade"
        speed={1500}
        fadeEffect={{
          crossFade: true,
        }}
        // navigation={{
        //       nextEl: ".sliderArrow_next",
        //       disabledClass: "swiper-button-disabled",
        //     }}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={image1}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:  
                <span className={styles.third_section_overlay_span}>
                      where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={image2}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:
                <span className={styles.third_section_overlay_span}>
                  where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={image3}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:
                <span className={styles.third_section_overlay_span}>
                  where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={image4}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:
                <span className={styles.third_section_overlay_span}>
                  where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.third_section_content}>
            <Image
              src={image5}
              alt="carousal_image"
              className={styles.third_section_image}
            />
            <div className={styles.third_section_overlay}>
              <p className={styles.third_section_overlay_text}>
                "Designing spaces, sparking joy:
                <span className={styles.third_section_overlay_span}>
                  where elegance meets functionality effortlessly."
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
