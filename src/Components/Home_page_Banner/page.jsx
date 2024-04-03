import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MusicPlayer from "@/Components/musicPlayer/page";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/Components/Home_page_Banner/Banner.module.css";
gsap.registerPlugin(ScrollTrigger);

const Animation = ({ loadImage }) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true);
  const [scrollPercentage, setScrollPercentage] = useState(0);
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

  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Set threshold to 0.5 for ref1
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Set threshold to 0.5 for ref1
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Set threshold to 0.5 for ref1
  });


  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Set threshold to 0.5 for ref1
  });

  const [ref5, inView5] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Set threshold to 0.5 for ref1
  });


  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  useEffect(() => {
    if (inView4) {
      controls.start("visible");
    }
  }, [controls, inView4]);

  useEffect(() => {
    if (inView5) {
      controls.start("visible");
    }
  }, [controls, inView5]);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScroll = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollPosition / totalScroll) * 100;
      setScrollPercentage(currentScrollPercentage);
      console.log("Scroll Percentage:", currentScrollPercentage);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => window.removeEventListener("scroll", updateScrollPercentage);
  }, []);

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
      {scrollPercentage >= 10 && (
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className={styles.LivingRoom}
        >
          <HeadingTextAnimation
            heading={" Seamlessly blending Tradition"}
            justifyContent={"center"}
          />
          <HeadingTextAnimation
            heading={"& Contemporary Flair"}
            justifyContent={"left"}
          />
        </motion.div>
      )}


      {scrollPercentage >= 11 && (
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className={styles.paragraph}
        >
          <HeadingTextAnimation
            heading={"We fuse timeless elements with the sleek line of modern sensibilities. "}
            justifyContent={"center"}
          />
          <HeadingTextAnimation
            heading={"& Each design is a thoughtful composition of harmony and visions of tomorrow."}
            justifyContent={"left"}
          />

           <HeadingTextAnimation
            heading={"From classic elegance to innovative twists,"}
            justifyContent={"left"}
          />
            <HeadingTextAnimation
            heading={"we create spaces that honor history while embracing the spirit of progress. "}
            justifyContent={"left"}
          />
        </motion.div>
      )}

      {scrollPercentage >= 27 && (
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className={styles.bedRoom}
        >
          <HeadingTextAnimation
            heading={"Crafting Timeless Spaces,"}
            justifyContent={"left"}
          />
          <HeadingTextAnimation
            heading={"where every corner speaks!"}
            justifyContent={"left"}
          />
        </motion.div>
      )}



      {scrollPercentage >= 28 && (
        <motion.div
          ref={ref5}
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className={styles.paragraph1}
        >
          <HeadingTextAnimation
            heading={"We fuse timeless elements with the sleek line of modern sensibilities. "}
            justifyContent={"center"}
          />
          <HeadingTextAnimation
            heading={"& Each design is a thoughtful composition of harmony and visions of tomorrow."}
            justifyContent={"left"}
          />

           <HeadingTextAnimation
            heading={"From classic elegance to innovative twists,"}
            justifyContent={"left"}
          />
            <HeadingTextAnimation
            heading={"we create spaces that honor history while embracing the spirit of progress. "}
            justifyContent={"left"}
          />
        </motion.div>
        
      )}

      {scrollPercentage >= 40 && (
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className={styles.outDoor}
        >
          <HeadingTextAnimation
            heading={"Designing Dreams &"}
            justifyContent={"left"}
          />
          <HeadingTextAnimation
            heading={" Infusing Love"}
            justifyContent={"left"}
          />
        </motion.div>
      )}

      <MusicPlayer />
    </section>
  );
};

export default Animation;
