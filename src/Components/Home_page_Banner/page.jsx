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
      const canvas = canvasRef.current;
      const originalWidth = 1632;
      const originalHeight = 918;
      const aspectRatio = originalWidth / originalHeight;

      const availableWidth = window.innerWidth;
      const availableHeight = window.innerHeight;
      const heightByWidth = availableWidth / aspectRatio;

      if (availableWidth < 1024) {
        canvas.style.width = "1301px"; // Set canvas width to 1301px width to be given according screen Sizes
        canvas.style.height = "100vh"; // Set canvas height to window height or any height specified
      } else {
        canvas.width = originalWidth;
        canvas.height = originalHeight;
        canvas.style.width = "100%"; // Set canvas width to 100% of container
        canvas.style.height = "100vh"; // this will  Allow canvas to maintain aspect ratio
      }
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
        end: "+=1400%",
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

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    const tenPercentOfHeight = window.innerHeight * 1.7;
    window.scrollBy({
      top: tenPercentOfHeight, // move down by 10% of the viewport height
      behavior: 'smooth' // smooth scroll
    });
    setIsVisible(true); // Hide the button after scrolling
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
          style={{
            width: "100%", // Set canvas width to 100% initially
            height: "100vh" // Allow canvas to maintain aspect ratio
          }}
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

     <div class="scroll-down-wrap no-border">
     
     {isVisible && <div
      className="section-down-arrow" onClick={scrollDownByTenPercent} ref={ref9}>
       <svg class="nectar-scroll-icon" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
      <path class="nectar-scroll-icon-path" fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z">
      </path>
    </svg>
     </div>}
     </div>

     
     <video className={styles.videoBg}  width="750" height="500"  autoPlay loop muted>
      <source src="./video/testing.mp4" type="video/mp4"/>
     </video>

    <MusicPlayer />

    {scrollPercentage >= 45 && (
      <div
        className={styles.buttonOuter}
      >
        <button className={styles.buttonX} role="button">
        <a href="tel:+917404040286" className={styles.textX}>Contact Us | +917404040286</a>
      </button>
      </div>
      )}
    </section>
  );
};

export default Animation;
