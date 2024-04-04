import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MusicPlayer from "@/Components/musicPlayer/page";
import { motion, useAnimation } from "framer-motion";
import FramesTextAnimation from "@/Common/framesTextAnimation/FramesTextAnimation";
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
        canvas.width = 1600;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 425) {
        canvas.width = 1600;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 375) {
        canvas.width = 1600;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 320) {
        canvas.width = 1600;
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

  const [ref6, inView6] = useInView({
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
    if (inView6) {
      controls.start("visible");
    }
  }, [controls, inView6]);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScroll = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollPosition / totalScroll) * 100;
      setScrollPercentage(currentScrollPercentage);
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
        <FramesTextAnimation
          heading={"Where Tradition find"}
          justifyContent={"center"}
        />
        <FramesTextAnimation
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
      <FramesTextAnimation
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
          <FramesTextAnimation
            heading={" Seamlessly blending Tradition"}
            justifyContent={"center"}
          />
          <FramesTextAnimation
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
          <FramesTextAnimation
            heading={"We create modern space infused with hints of heritage – it's like "}
            justifyContent={"center"}
          />
          <FramesTextAnimation
            heading={"stepping into a story where every corner whispers tales of tradition,"}
            justifyContent={"left"}
          />

           <FramesTextAnimation
            heading={"while clean lines and modern touches bring it all together."}
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
          <FramesTextAnimation
            heading={"Crafting Timeless Spaces,"}
            justifyContent={"left"}
          />
          <FramesTextAnimation
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
          <FramesTextAnimation
            heading={"We fuse timeless elements with the sleek line of modern sensibilities. "}
            justifyContent={"center"}
          />
          <FramesTextAnimation
            heading={"& Each design is a thoughtful composition of harmony and visions of tomorrow."}
            justifyContent={"left"}
          />

           <FramesTextAnimation
            heading={"From classic elegance to innovative twists,"}
            justifyContent={"left"}
          />
            <FramesTextAnimation
            heading={"we create spaces that honor history while embracing the spirit of progress. "}
            justifyContent={"left"}
          />
        </motion.div>
        
      )}

      {scrollPercentage >= 38 && (
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className={styles.outDoor}
        >
          <FramesTextAnimation
            heading={"Designing Dreams &"}
            justifyContent={"left"}
          />
          <FramesTextAnimation
            heading={" Infusing Love"}
            justifyContent={"left"}
          />
        </motion.div>
      )}


      {scrollPercentage >= 39 && (
        <motion.div
          ref={ref6}
          initial="hidden"
          animate={inView6 ? "visible" : "hidden"}
          transition={{ duration: 0.9 }}
          className={styles.paragraph2}
        >
          <FramesTextAnimation
            heading={" we're all about Designing Dreams & Infusing Love into every space we touch."}
            justifyContent={"left"}
          />
          <FramesTextAnimation
            heading={"Picture walking into your home and feeling an instant connection – that's the magic we strive for."}
            justifyContent={"left"}
          />

          <FramesTextAnimation
            heading={"With a blend of modern flair and traditional charm,"}
            justifyContent={"left"}
          />
          <FramesTextAnimation
            heading={"we create havens that reflect your personality and aspirations"}
            justifyContent={"left"}
          />
        </motion.div>
      )}

      <MusicPlayer />
    </section>
  );
};

export default Animation;
