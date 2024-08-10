"use client";
import { useEffect, useRef, useState } from "react";
// import styles from "@/Components/Social_media/social.module.css";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import styles from "@/Components/Project_brands/projectbrands.module.css";
import Stairs from "@/Animations/Stairs";

import logo1 from "@/images/brandslogo1.png";
import logo2 from "@/images/brandslogo2.png";
import logo3 from "@/images/brandslogo13.png";
import logo4 from "@/images/brandslogo14.png";
// import logo5 from "@/svgs/pg.svg";
import logo5 from "@/images/new_logo_rt1.png";
// import logo7 from "@/svgs/febindia.svg";
// import logo8 from "@/svgs/intel.svg";
// import logo9 from "@/svgs/pepperfry.svg";
// import logo10 from "@/svgs/ica.svg";



export default function Home() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

 

  const { height, width } = dimension;


  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <Stairs />
      {/* <main className={styles.main}> */}
        <div className={styles.spacerX} id="brands">
          <div className={styles.instagram1}>
            <p className={styles.center}>BRANDS WE USE</p>
            <div className={styles.brands_outer}>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo1} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo2} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo3} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo4} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo5} alt="" />
              </div>
              {/* <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo6} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo7} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo8} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo9} alt="" />
              </div>
              <div className={styles.brands_logo_outer}>
                <Image className={styles.brand_logo} src={logo10} alt="" /> */}
              {/* </div> */}
            </div>

          </div>
        </div>
      {/* </main> */}
    </>
  );
}

