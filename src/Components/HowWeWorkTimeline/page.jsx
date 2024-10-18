"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timeline_img1 from "@/images/we_meet_img.png";
import timeline_img2 from "@/images/design_thinking_img.png";
import timeline_img3 from "@/images/meet_Again_img.png";
import timeline_img4 from "@/images/execution_img.png";
import timeline_img5 from "@/images/final_Reveal_img.png";
import styles from "@/Components/HowWeWorkTimeline/howWeWorkTimeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);
const Timeline = () => {
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
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, []);
  return (
    <div className={styles.timeline_container}>
      <div className={styles.timeline_Section}>
        <div className={styles.timeline_content1}>
          <div data-aos="zoom-in-up" className={styles.timeline_img_section}>
            <Image
              src={timeline_img1}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <div className={styles.timline1_meet_text}>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"WE MEET"}
                    justifyContent={"left"}
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles.timeline1_innertext}>
              <p className={styles.timline1_meet_text_inner}>
                We meet for your project , this is fun because we care about
                your choice and use this meeting to know you better
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top}></div>
          <div className={styles.border_top_max}></div>
        </div>
        <div className={styles.timeline_content2}>
          <div data-aos="zoom-in-up" className={styles.timeline_img_section}>
            <Image
              src={timeline_img2}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <div className={styles.timline1_meet_text}>
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={inView1 ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={" DESIGN"}
                    justifyContent={"left"}
                  />
                  <HeadingTextAnimation
                    heading={"THINKING"}
                    justifyContent={"left"}
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles.timeline1_innertext2}>
              <p className={styles.timline1_meet_text_inner2}>
                We use design thinking to plan your project , our sharp and
                dedicated designer create a customised design only complimenting
                your choice.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top1}></div>
          <div className={styles.border_top_max}></div>
        </div>
        <div className={styles.timeline_content1}>
          <div data-aos="zoom-in-up" className={styles.timeline_img_section}>
            <Image
              src={timeline_img3}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content1}>
            <div className={styles.timline1_meet_text_content}>
              <div className={styles.timline1_meet_text1}>
                <motion.div
                  ref={ref2}
                  initial="hidden"
                  animate={inView2 ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"WE MEET AGAIN , NOW WE HAVE"}
                    justifyContent={"left"}
                  />
                  <HeadingTextAnimation
                    heading={"THE DESIGN & QUOTATION"}
                    justifyContent={"left"}
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles.timeline1_innertext_design}>
              <p className={styles.timline1_meet_text_inner}>
                In this meeting we have the design and quotation , we give you
                options and with your permission we put a final design for you
                and start working .
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top}></div>
          <div className={styles.border_top_max}></div>
        </div>
        <div className={styles.timeline_content2}>
          <div data-aos="zoom-in-up" className={styles.timeline_img_section}>
            <Image
              src={timeline_img4}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <div className={styles.timline1_meet_text}>
                <motion.div
                  ref={ref3}
                  initial="hidden"
                  animate={inView3 ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={" THE"}
                    justifyContent={"left"}
                  />
                  <HeadingTextAnimation
                    heading={"EXECUTION"}
                    justifyContent={"left"}
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles.timeline1_innertext4}>
              <p className={styles.timline1_meet_text_inner2}>
                Our team of excellent workers moves in and start building your
                project . Meanwhile , you relax and plan for the house warming
                party
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border_line_content}>
          <div className={styles.border_top1}></div>
          <div className={styles.border_top_max}></div>
        </div>
        <div className={styles.timeline_content1}>
          <div data-aos="zoom-in-up" className={styles.timeline_img_section}>
            <Image
              src={timeline_img5}
              alt="none"
              className={styles.timeline1_image}
            />
          </div>
          <div className={styles.timeline1_content}>
            <div>
              <div className={styles.timline1_meet_text}>
                <motion.div
                  ref={ref4}
                  initial="hidden"
                  animate={inView4 ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"THE FINAL "}
                    justifyContent={"left"}
                  />
                  <HeadingTextAnimation
                    heading={"REVEAL"}
                    justifyContent={"left"}
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles.timeline1_innertext5}>
              <p className={styles.timline1_meet_text_inner}>
                This the most exciting part , you get to see the your dream home
                in reality . All those sleepless nights dreaming about your home
                , this is where your new journey starts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
