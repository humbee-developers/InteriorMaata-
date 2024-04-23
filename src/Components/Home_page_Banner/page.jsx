import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MusicPlayer from "@/Components/musicPlayer/page";
import { motion, useAnimation } from "framer-motion";
import  HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation"
import { useInView } from "react-intersection-observer";
import styles from "@/Components/Home_page_Banner/Banner.module.css";
import "./scroll.css"
gsap.registerPlugin(ScrollTrigger);

const Animation = ({ loadImage, counter }) => {
  const [info, setInfo] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  const [loading, setLoading] = useState(true);
  const [loadingCounter, setLoadingCounter] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true); 

  console.log(loadingCounter)

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
        canvas.width = 1700;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 1600) {
        canvas.width = 1600;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 1599) {
        canvas.width = 1300;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 1200) {
        canvas.width = 1301;
        canvas.height = windowHeight * 1;
      }else if (windowWidth >= 1180) {
        canvas.width = 1303;
        canvas.height = windowHeight * 1;
      }
       else if (windowWidth >= 1024) {
        canvas.width = 1304;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 768) {
        canvas.width = 1305;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 500) {
        canvas.width = 1300;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 425) {
        canvas.width = 1300;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 375) {
        canvas.width = 1300;
        canvas.height = windowHeight * 1;
      } else if (windowWidth >= 320) {
        canvas.width = 1300;
        canvas.height = windowHeight * 1;
      } else {
        canvas.width = 400;
        canvas.height = windowHeight * 0.6;
      }

      ScrollTrigger.update();
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const frameCount = 280;
    const currentFrame = (index) =>
      `https://interiormaata.humbeestudio.xyz/assets/frames/newfinal/${(index + 1)
        .toString()
        .padStart(4, "0")}.jpg`;

        // https://interiormaata.humbeestudio.xyz/assets/frames/new/0001.jpg
    let imgL = [];
    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
      imgL.push(img.src);
    }

    const loadImages = async () => {
      try {
        const loadImagePromises = imgL.map((imageUrl, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              setLoadingCounter(index + 1);
              resolve();
            };
          });
        });

        await Promise.all(loadImagePromises);

        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    loadImages();
    console.log(imgL);
    // const lCouner = Math.floor()
    console.log("Counter", loadingCounter);
    const animationTimeline = gsap.timeline({
      onUpdate: render,
      onComplete: () => setAnimationEnded(true), // Set animationEnded to true when animation completes
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: true,
        smooth:2,
        // smoothTouch: 0.1,
        end: "+=1800%",
      },
    });

    animationTimeline.to(airpodsRef.current, {
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
  }, [loadingCounter]);

  console.log(loadImage(loading));

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

  const loadingProgress = (loadingCounter / 250) * 100;
  console.log(counter(loadingProgress))

  const scrollDownByTenPercent = () => {
    const tenPercentOfHeight = window.innerHeight * 2;
    window.scrollBy({
      top: tenPercentOfHeight, // move down by 10% of the viewport height
      behavior: 'smooth' // smooth scroll
    });
    setIsVisible(false); // Hide the button after scrolling
  };
  


  const [ref9, inView9] = useInView({
    triggerOnce: false,
  });

 
  const controls9 = useAnimation();
  const imageAnimations = [
    {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 2,
          delay: 20,
          x: { duration: 2 },
          type: "spring",
          stiffness: 100,
        },
      },
    },
    // second slider animations
  ];

  useEffect(() => {
    if (inView9) {
      controls9.start("visible");
    }
  }, [controls9, inView9]);


  useEffect(() => {
    // Function to handle scroll direction and video visibility
    const handleScroll = () => {
      const video = document.querySelector(`.${styles.videoBg}`);
      if (window.scrollY > 0) { // Check if window has scrolled down
        video.style.visibility = "hidden";
      } else {
        video.style.visibility = "visible";
      }
    };
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  
  const [refButton, inViewButton] = useInView({
    triggerOnce: false,
  });
  const controlsx = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 5 }, // Move the button down initially
    visible: { opacity: 1, y: -130 }, // Move the button up to its original position
  };

  useEffect(() => {
    if (inViewButton) {
      controlsx.start("visible");
    }
  }, [inViewButton, controlsx]);







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
      {/* {scrollPercentage >= 10 && (
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
      )} */}

     <div class="scroll-down-wrap">
     {isVisible && <div
      className="section-down-arrow " onClick={scrollDownByTenPercent} ref={ref9}>Click here to dive
     </div>}
     </div>

     
     <video className={styles.videoBg}  width="750" height="500"  autoPlay loop muted>
      <source src="./video/testing.mp4" type="video/mp4"/>
     </video>

    <MusicPlayer />

    <motion.div
        ref={refButton}
        initial="hidden"
        animate={inViewButton ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6, delay: 0 }}
        // className={styles.buttonOuter}
      >
        <button onClick={() => router.push("/Consultancy")} className={styles.buttonX} role="button">
        <span className={styles.textX}>Contact Us | +917404040286</span>
      </button>
      </motion.div>
    </section>
  );
};

export default Animation;
