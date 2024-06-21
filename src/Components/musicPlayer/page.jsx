import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import playPause from "@/svgs/tt.gif";
import styles from "@/Components/musicPlayer/music.module.css";

const MusicPlayer = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Initially not playing
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Start audio playback when the component mounts if autoplay is allowed
  useEffect(() => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Autoplay started
        setIsPlaying(true);
      }).catch(error => {
        // Autoplay was prevented
        console.error("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
  
      // Define the trigger percentage based on the total scrollable height of the webpage
      const triggerPercentage = 91; // Adjust as needed
  
      if (scrollPercentage >= triggerPercentage) {
        // If audio is playing, pause it
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]); // Added isPlaying as a dependency
  

  return (
    <div>
      <audio loop autoPlay={true} ref={audioRef} src={"https://interiormaataassets.humbeestudio.xyz/mainsiteassets/sound/3dbackgroundmusic.mp3"} type="audio/mp3" />
      {isVisible && ( 
        <button className={`${styles.playPause} ${isPlaying ? styles.playing : ''}`} onClick={togglePlay}>
          <Image className={styles.waves} src={playPause} alt="playPause" />
        </button>
      )}
        <div className={styles.sound}>SOUND</div>
    </div>
  );
};

export default MusicPlayer;
