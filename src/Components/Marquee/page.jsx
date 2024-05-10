import React from "react";
import Marquee from "react-fast-marquee";
import styles from "@/Components/Marquee/Marquee.module.css"
import "./marquee.css"
const Marquee1 = () => (
    <>
        <Marquee direction="right" speed={70} >
            <div className={styles.main_marquee}>
                <div className={styles.marquee_text}>
                  <p>interior moodboard - interior moodboard - interior moodboard - </p>
                </div>
            </div>
        </Marquee>

        <Marquee direction="left" speed={70} >
           
                <div className={styles.marquee_text}>
                  <p> interior moodboard - interior moodboard - interior moodboard - </p>
                </div>
          
        </Marquee>
    </> 
);

export default Marquee1;