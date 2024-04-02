import Project from "@/Components/AboutUsInfo/index"
import img1 from "@/images/mambo_mambo.jpeg"
import img2 from "@/images/jomor_design.jpeg"
import img3 from "@/images/la_grange.jpeg"
import img4 from "@/images/deux_huit_huit.jpeg"
import img5 from "@/images/nothing_design_studio.png"
import styles from "@/Components/AboutUsInfo/AboutUsInfo.module.css"
export default function Home() {


  const projects = [
    {
      title1: "Crafting dreamy Interiors",
      title2: "",
      src: img1
    },
    {
      title1: "that speak volumes,",
      title2: "merging style",
      src: img2
    },
    {
      title1: "",
      title2: "with soul to redefine your",
      src: img3
    },
    {
      title1: "living experience.",
      title2: "Elevate your",
      src: img4
    },
    {
      title1: "",
      title2: "space with us!",
      src: img5
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
  )
}
