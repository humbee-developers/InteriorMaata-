"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import img1 from "@/images/Teamslider1.png";
import img2 from "@/images/Teamslider2.png";
import img3 from "@/images/Teamslider3.png";
import img4 from "@/images/Teamslider4.png";
import img5 from "@/images/Teamslider5.png";
import img6 from "@/images/Teamslider6.png";
import img15 from "@/images/Teamslider7.png";
import img8 from "@/images/Teamslider8.png";
import img10 from "@/images/Teamslider10.png";
import img11 from "@/images/Teamslider11.png";
import img12 from "@/images/Teamslider12.png";
import img13 from "@/images/Teamslider13.png";
import TeamCards from "@/Components/TeamCards/page";
import Marquee from "react-marquee-slider";
import styles from "@/Components/TPage/teamsPage.module.css";

const TeamPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const photos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img15,
    img8,

    img10,
    img11,
    img12,
    img13,
  ];
  return (
    <>
      <div className={styles.TeamPage_Section} id="team">
        <div className={styles.Header}>
          <div className={styles.teamPage_content1}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.9 }}
            >
              <HeadingTextAnimation
                heading={"Meet the Minds "}
                justifyContent={"center"}
              />
              <HeadingTextAnimation
                heading={"Behind the Magic"}
                justifyContent={"center"}
              />
            </motion.div>
          </div>
          <div className={styles.teamPage_content2}>
            Our Team, Your Success.
          </div>
        </div>
        <div className={styles.marquee_section}>
          <Marquee velocity={20}>
            {photos.map((photo, index) => (
              <div
                key={`marquee-image-${index}`}
                className={styles.marquee_imageSection}
              >
                <Image
                  src={photo}
                  alt={`image`}
                  className={styles.slider_img}
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className={styles.first}>
          <div
            className={`${styles.teamPage_content3} ${styles.teamPage_content3First}`}
          >
            <div className={styles.teamPage_content3_Text}>
              <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                transition={{ duration: 0.9 }}
              >
                <HeadingTextAnimation
                  heading={"UNITED BY PASSION, DRIVEN BY"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"EXCELLENCE: GET TO KNOW"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation heading={""} justifyContent={"center"} />
                <HeadingTextAnimation
                  heading={"THE FACES BEHIND OUR SUCCESS"}
                  justifyContent={"center"}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles.first_first}>
          <div
            className={`${styles.teamPage_content3} ${styles.teamPage_content3Second}`}
          >
            <div className={styles.teamPage_content3_Text1}>
              <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                transition={{ duration: 0.9 }}
              >
                <HeadingTextAnimation
                  heading={"UNITED BY PASSION,"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"DRIVEN BY THE"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={" EXCELLENCE GET TO"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={" KNOW HE FACES "}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"BEHIND OUR SUCCESS"}
                  justifyContent={"center"}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles.teamPage_content4}>
          <div className={styles.teamPage_content4_Text}>
            <p>
              And When It Stops, It’s Not Over - It’s In You Now, In Your Head,
              Your Heart, And Spirit. You Have To Tell Someone, Right Now, ‘you
              Must See This’. You Share It, And They Get It. They’re In It With
              You, And It’s In Them Too. You Shared The Wonder You Know Feeling?
              That’s What We’re After, Every Time We Make A Film.{""}The
            </p>
          </div>
        </div>
        <TeamCards />

        <div className={styles.second}>
          <div
            className={`${styles.teamPage_content3} ${styles.teamPage_content3First}`}
          >
            <div className={styles.teamPage_content3_Text}>
              <motion.div
                ref={ref3}
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                transition={{ duration: 0.9 }}
              >
                <HeadingTextAnimation
                  heading={"WE BELIEVE IN WONDERFUL"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"WORK COMES FROM "}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"CREATIVE GENEROSITY"}
                  justifyContent={"center"}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles.second_second}>
          <div
            className={`${styles.teamPage_content3} ${styles.teamPage_content3Second} ${styles.teamPage_spacing2}`}
          >
            <div className={styles.teamPage_content3_Text1}>
              <motion.div
                ref={ref4}
                initial="hidden"
                animate={inView4 ? "visible" : "hidden"}
                transition={{ duration: 0.9 }}
              >
                <HeadingTextAnimation
                  heading={"  WE BELIEVE IN"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"EXCEPTIONAL WORK"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"IS BORN FROM"}
                  justifyContent={"center"}
                />
                <HeadingTextAnimation
                  heading={"CREATIVE GENEROSITY"}
                  justifyContent={"center"}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className={styles.teamPage_content4}>
          <div className={styles.teamPage_content4_Text}>
            <p>
              Step into the world of interior maata, where design meets
              imagination. Our dedicated team of architects and designers is
              driven by a shared commitment to elevate your spaces to new
              heights of sophistication. With a blend of creativity and
              technical expertise, we turn dreams into reality.{" "}
            </p>
          </div>
        </div>

        <div className={styles.image_content5}>
          <video className={styles.VideoSection} loop autoPlay muted>
            <source src="./video/videoreel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
export default TeamPage;
