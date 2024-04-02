"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MusicPlayer from "@/Components/musicPlayer/page";
import { motion, useAnimation } from "framer-motion";
import  HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation"
import { useInView } from "react-intersection-observer";
import styles from "@/Components/Home_page_Banner/Banner.module.css";
gsap.registerPlugin(ScrollTrigger);

const AirpodsAnimation = ({ loadImage }) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true);
  console.log("factory loading", loading);
  

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      if (windowWidth >= 1700) {
        canvas.width = 1800;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 1600) {
        canvas.width = 1600;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 1599) {
        canvas.width = 1600;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 1200) {
        canvas.width = 1600;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 1024) {
        canvas.width = 1200;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 768) {
        canvas.width = 1200;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 500) {
        canvas.width = 1400;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 425) {
        canvas.width = 1400;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 375) {
        canvas.width = 1400;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 320) {
        canvas.width = 1400;
        canvas.height = windowHeight * 1;
      } else {
        canvas.width = 400;
        canvas.height = windowHeight * 0.6;
      }

      ScrollTrigger.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 250;
    const currentFrame = (index) =>
      `https://interiormaata.humbeestudio.xyz/assets/frames/model/${(index + 1)
        .toString()
        .padStart(4, "0")}.webp`;
    let imgL = [];
    // https://interiormaata.humbeestudio.xyz/assets/frames/heroframes/0001.webp

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      imgL.push(img.src);
    }

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          end: "+=1800%",
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section>
      <section ref={sectionRef}>
        <canvas
          className={styles.canvas_factory_settings}
          ref={canvasRef}
        ></canvas>
     
      </section>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
        className={styles.interiormaata}
         >
        <HeadingTextAnimation
          heading={"interiorमाता"}
          
          justifyContent={"center"}
        />
        </motion.div>

        <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.9 }}
        className={styles.text1}
         >
        <HeadingTextAnimation
          heading={"Where Tradition find"}
          
          justifyContent={"center"}
        />
         <HeadingTextAnimation
          heading={" it’s modern muse"}
          
          justifyContent={"left"}
        />
        </motion.div>
      <MusicPlayer />
    </section>
  );
};

export default AirpodsAnimation;
