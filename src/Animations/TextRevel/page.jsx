import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '@/Animations/TextRevel/textRevel.module.css';

gsap.registerPlugin(ScrollTrigger);

const TextRevel = ({ phrase }) => {
  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: 'top 70%',
          end: 'bottom 70%',
        },
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
        color: '#7f7047',
      });
    };

    createAnimation();

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [phrase]);

  const splitWords = phrase => {
    return phrase.split(' ').map((word, i) => {
      const letters = splitLetters(word);
      return (
        <p key={word + '_' + i}>
          {letters}
        </p>
      );
    });
  };

  const splitLetters = word => {
    return word.split('').map((letter, i) => (
      <span
        key={letter + '_' + i}
        ref={el => {
          refs.current.push(el);
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className={styles.scroll_text_wrapper}>
      <div ref={container} className={styles.main}>
        <div className={styles.body}>
          {splitWords(phrase)}
        </div>
      </div>
    </div>
  );
};

export default TextRevel;
