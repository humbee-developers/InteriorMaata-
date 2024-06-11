"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "./imx.css";
import Project_Slider from "@/images/Project_Slider_img.png";
import { FreeMode, Thumbs, Pagination, Autoplay } from "swiper/modules";
import styles from "@/Components/Project_Slider/Slider.module.css";
import Carousel_svg from "@/svgs/project_carousel_layout.svg";
import testimonial1 from "@/images/omkar.webp"

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className={styles.abc}>
        <div className={styles.swiper2}>
          <Image src={Carousel_svg} alt="carousel layout 1" />
          <Image src={Carousel_svg} alt="carousel layout 2" />
        </div>

        <div className={styles.Carousel_Slider_container}>
          <Swiper
            className={styles.mySwiper}
            modules={[FreeMode, Thumbs, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            speed={1500}
            thumbs={{ swiper: thumbsSwiper }}
          >
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousel_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousel_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousel_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={Project_Slider}
                  alt="carousel_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.swiper3}>
          <Image src={Carousel_svg} alt="carousel layout 3" />
          <Image src={Carousel_svg} alt="carousel layout 4" />
        </div>
      </div>
      
      <div className={styles.abc}>
        <div className={styles.Carousel_Slider_container2}>
          <Swiper
            modules={[Thumbs, Pagination, Autoplay]}
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
            allowTouchMove={false}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                Team of Interior Maata is very good and dedicated to work .
                I receive a very quick response from their side. I am totally satisfied with them. I highly recommend them.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                Extremely professional and helpful attitude. Especially Akhila is very good coordinator and helping nature with suggestions having with patience Now a days it is rare to find people with such dedication towards work
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                I read a comment of Alpa thanki and understood that you are not very much suitable for a middle class person. You only prefer to work for a business person having  a hefty bank balance.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                One of the best in the market and people are way polite than any other association I have ever been to for my interior.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                Interior Maata team understands design from the ground up and is extremely creative with space, fabric, furnishings, accessories, and I could go on.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                Extremely professional and helpful attitude. Now a days it is rare to find people with such dedication towards work.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
