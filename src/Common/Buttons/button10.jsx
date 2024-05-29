'use client'
import { useRouter } from 'next/navigation'
import React from "react";
import './button10.css'
import Image from 'next/image';
import youtubeSvg from "@/svgs/youtubesvg.svg";
const Button = (props) => {
  const router = useRouter()
  return (
    <div>
    
     <button onClick={()=>router.push("/")} className="button2" role="button"><Image src={youtubeSvg} alt='none' /><span className="text">{props.button_text}</span></button>
    </div>
  )
}
export default Button