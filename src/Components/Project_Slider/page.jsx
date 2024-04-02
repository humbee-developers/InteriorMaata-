"use client";
import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from 'swiper/modules';
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./imx.css";
import Project_Slider from "@/images/Project_Slider_img.png";
import { FreeMode, Autoplay, Thumbs, Pagination } from "swiper/modules";
import styles from "@/Components/Project_Slider/Slider.module.css";
import Carousel_svg from "@/svgs/project_carousel_layout.svg";
// import { EffectFade } from "swiper/modules";
export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className={styles.abc}>
        <div className={styles.swiper2}>
          <Image src={Carousel_svg} />
          <Image src={Carousel_svg} />
        </div>

        <div className={styles.Carousel_Slider_container}>
          <Swiper
            className={styles.mySwiper}
            modules={[FreeMode, Thumbs, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
            }}
            // centeredSlides={true}
            loop={true}
            speed={1500}
            // thumbs={{
            //   swiper:
            //     thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            // }}
          >
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousal_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousal_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousal_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousal_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.swiper3}>
          <Image src={Carousel_svg} />
          <Image src={Carousel_svg} />
        </div>
      </div>
      {/*  */}
      <div className={styles.abc}>
        <div className={styles.Carousel_Slider_container2}>
          <Swiper
           modules={[ Thumbs, Pagination, Autoplay]}
            onSwiper={setThumbsSwiper}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            slidesPerView={1}
            speed={1500}
            pagination={{
              dynamicBullets: true,
            }}
            // watchSlidesProgress={false}
            // freeMode={true}
           
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                  text ever since the 1500s, when an unknown printer took a
                  galley
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                  text ever since the 1500s, when an unknown printer took a
                  galley
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                  text ever since the 1500s, when an unknown printer took a
                  galley
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/*  */}
    </>
  );
}
