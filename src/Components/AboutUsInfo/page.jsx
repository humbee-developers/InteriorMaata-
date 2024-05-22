import Project from "@/Components/AboutUsInfo/index"
import img1 from "@/images/la_grange 1.png"
import img2 from "@/images/mambo_mambo 1.png"
import img3 from "@/images/jomor_design 1.png"
import img4 from "@/images/nothing_design_studio 1.png"
import img5 from "@/images/mambo_mambo 2.png"
import NewRevel from "@/Animations/newRevel/page";
import styles from "@/Components/AboutUsInfo/AboutUsInfo.module.css"
export default function Home() {
  const paragraph = 'Crafting Dreamy Interiors That Speak Volumes, Merging Style With Soul To Redefine Your Living Experience. Elevate Your image Space With Us!';
  const projects = [
    {
      title1: "Crafting dreamy Interiors",
      title2: "",
      src: img1,
      url: "/Projects"
    },
    {
      title1: "that speak volumes,",
      title2: "merging style",
      src: img2,
      url: "/Projects"
    },
    {
      title1: "",
      title2: "with soul to redefine your",
      src: img3,
      url: "/Projects"
    },
    {
      title1: "living experience.",
      title2: "Elevate your",
      src: img4,
      url: "/Projects"
    },
    {
      title1: "",
      title2: "space with us!",
      src: img5,
      url: "/Projects"
    }
  ]

  return (
   <>
     <main className={styles.main}>
      <div className={styles.gallery}>
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
      <div className={styles.outerClass}>
      <NewRevel paragraph={paragraph}/>
      </div>
   </>
  )
}