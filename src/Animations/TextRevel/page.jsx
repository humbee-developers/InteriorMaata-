import {React, useEffect, useRef,} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/Animations/TextRevel/textRevel.module.css"
gsap.registerPlugin(ScrollTrigger);
const page = () => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const textRef = useRef(null);
    const contextRef = useRef(null);

    const phrase =
    "Get Your Home Designed In The Comfort Of Your Home Without Any Hassle. Our Team Of Excellent Designers Will Guide You In Designing Your Home Exactly The Way You Want."
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top 30%`,
        end: `+=${window.innerHeight / 1.55}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      color: "#c3a464",
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };




  return (
    <>
       <div className={styles.scroll_text_wrapper}>
        <div ref={container} className={styles.main}>
          <div ref={body} className={styles.body}>
            {splitWords(phrase)}
          </div>
        </div>
      </div>
    </>
  )
}

export default page
