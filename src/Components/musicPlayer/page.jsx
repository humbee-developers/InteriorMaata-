import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import playPause from "@/svgs/tt.gif"
import styles from "@/Components/musicPlayer/music.module.css"

const MusicPlayer = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(true);
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

  useEffect(() => {
    const handleScroll = () => {
      let scrollPercentage;
      if (window.innerWidth > 1600) {
        scrollPercentage = 94;
      } else if (window.innerWidth <= 500) {
        scrollPercentage = 91;
      } else {
        scrollPercentage = 92.5;
      }
      

      const currentScrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (currentScrollPercentage >= scrollPercentage) {
        setIsVisible(false);
        if (isPlaying) {
          audioRef.current.pause(); 
          setIsPlaying(false); 
        }
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div>
      <audio loop autoPlay ref={audioRef} src={"https://interiormaata.humbeestudio.xyz/assets/audio/3dbackgroundmusic.mp3"} type="audio/mp3" />
      {isVisible && ( 
        <button className={`${styles.playPause} ${isPlaying ? styles.playing : ''}`} onClick={togglePlay}>
          <Image className={styles.waves} src={playPause} alt="playPause"   />
          {/* {isPlaying ? 'Pause' : 'Play'} */}
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;
