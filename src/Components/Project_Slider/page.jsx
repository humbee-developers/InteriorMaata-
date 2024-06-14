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
import { FreeMode, Thumbs, Pagination, Autoplay } from "swiper/modules";
import styles from "@/Components/Project_Slider/Slider.module.css";
import Carousel_svg from "@/svgs/project_carousel_layout.svg";
import testimonial1 from "@/images/testimonial1.png"
import testimonial2 from "@/images/testimonial2.png"
import testimonial3 from "@/images/testimonial3.png"
import testimonial4 from "@/images/testimonial4.png"

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
                  src={testimonial1}
                  alt="carousel_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={testimonial2}
                  alt="carousel_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={testimonial3}
                  alt="carousel_image"
                  className={styles.third_section_image}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.third_section_content}>
                <Image
                  src={testimonial4}
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
                It was an absolute pleasure working with Interior Maata consultancy.
                They provided me with such a detailed planning down to the very last detail that it was really easy for me to make the workers understand the vision.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.Carousel_text_maincontent}>
                <p className={styles.carousel_text_Content}>
                she designed my home and its beyond my expectation, I loved her TRED-MO style. she did everything in my budget very happy with the services.
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
