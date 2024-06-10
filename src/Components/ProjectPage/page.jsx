"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/Components/ProjectPage/projectPage.module.css";
import projectsData from "./projectData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import StarSvg from "@/svgs/Star.svg";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
const Projects = () => {
  const itemsPerPage = 4;
  const [projectName, setProjectName] = useState(0);
  const [currentData, setCurrentData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const projectsRef = useRef(null);
  const [fullUrl, setFullUrl] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tabUrl, setTabUrl] = useState("");


  const handleClick = (e) => {
    setProjectName(e);
    setCurrentData(projectsData[e]);
    setPageNumber(1);
  };

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  // console.log("current", currentData)
  const lastIndex = pageNumber * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const displayedData = currentData?.slice(firstIndex, lastIndex);
  const router = useRouter();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
   

    // setFullUrl(url);
  
    if (pathname + hash === "/Projects#interior") {
      setCurrentData(projectsData[0]);
    } else if (pathname + hash === "/Projects#architecture") {
      setCurrentData(projectsData[1]);
    } else {
      setCurrentData(projectsData[2]);
    }

    setTabUrl(pathname + hash);
  }, [pathname, searchParams]);

  // useEffect(() => {
  //   setCurrentData(projectsData[0]);
  // }, []);


  return (
    <div ref={projectsRef} className={styles.projectPageOuter}>
      <div className={styles.ProjectSection_header}>
        <div>
          <div className={styles.ProjectSection_headerText}>
            <div
              className={`${styles.tabItem} ${
                tabUrl === "/Projects#interior" && styles.active
              }`}
              // onClick={() => handleClick(0)}
            >
              <Link href={"/Projects#interior"}>Residential</Link>
              <Image
                src={StarSvg}
                alt="star"
                className={`${styles.svg} ${
                  // projectName === 0 ||
                  tabUrl === "/Projects#interior" && styles.active
                }`}
              />
            </div>
            <div
              className={`${styles.tabItem} ${
                tabUrl === "/Projects#architecture" && styles.active
              }`}
              // onClick={() => handleClick(1)}
            >
              <Link href={"/Projects#architecture"}>ARCHITECTURE</Link>
              <Image
                src={StarSvg}
                alt="star"
                className={`${styles.svg} ${
                  // projectName === 1 ||
                  tabUrl === "/Projects#architecture" && styles.active
                }`}
              />
            </div>
            <div
              className={`${styles.tabItem} ${
                // projectName === 2 ||
                tabUrl === "/Projects#commercials" && styles.active
              }`}
              // onClick={() => handleClick(2)}
            >
              <Link href={"/Projects#commercials"}>COMMERCIALS</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ProjectSection_Content}>
        {/* mapping images and titles sequentially */}
        {displayedData &&
          displayedData.map((data, index) => (
            <div key={index}>
              <div className={styles.ProjectSection_imageContent}>
                <Image
                  className={styles.ProjectSection_image}
                  src={data.image}
                  alt={data.title}
                  onClick={() => router.push("/Single_Project_Layout")}
                />
                <div
                  onClick={() => router.push("/Single_Project_Layout")}
                  className={styles.overlay}
                ></div>
              </div>
              <div className={styles.project_heading}>
                <span>{data.title}</span>
              </div>
              <div className={styles.ProjectSection_textContent}>
                <div className={styles.section_1}>
                  <div className={styles.year}>
                    <span>{data.year}</span>
                  </div>
                  <div>
                    <span>PROJECT | </span>
                    {data.project}
                  </div>

                  <div>
                    <span>INTERIOR DESIGN | </span>
                    {data.interiordesign}
                  </div>
                </div>

                <div className={styles.section_2}>
                  <div>
                    <span>LOCATION | </span>
                    {data.location}
                  </div>
                  {/* <div>
                    <span>USAGE | </span>
                    {data.usage}
                  </div> */}
                  {/* <div>
                    <span>STUDIO | </span>
                    {data.studio}
                  </div> */}
                </div>

                <div className={styles.section_3}>
                  <div>
                    <span>{data.copyright}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.projects_pagination}>
        {currentData && (
          <Stack spacing={2} justifyContent="center">
            <Pagination
              count={Math.ceil(currentData.length / itemsPerPage)}
              color="primary"
              shape="rounded"
              page={pageNumber}
              size="small"
              variant="outlined"
              onChange={handlePageChange}
              hidePrevButton
              hideNextButton
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "transparent",
                  border: "1px solid #CC7D45",
                  color: "#CC7D45",
                  margin: "0 10px",
                  padding: "18px 13px  ",
                  fontSize: "20px",
                  borderRadius: "0px",
                  transition: "background-color 0.3s, color 0.3s",

                  "@media (max-width: 768px)": {
                    margin: "0 9px",
                    padding: "12px 8px  ",
                    fontSize: "15px",
                  },

                  "@media (max-width: 425px)": {
                    margin: "0 8px",
                    padding: "12px 8px  ",
                    fontSize: "12px",
                  },

                  "&.Mui-selected": {
                    backgroundColor: "#D9D9D9",
                    margin: "0 10px",
                    padding: "18px 13px  ",
                    fontSize: "20px",
                    color: "black",
                    border: "none",

                    "@media (max-width: 768px)": {
                      margin: "0 9px",
                      padding: "12px 10px  ",
                      fontSize: "15px",
                    },

                    "@media (max-width: 425px)": {
                      margin: "0 8px",
                      padding: "12px 10px  ",
                      fontSize: "12px",
                    },
                  },

                  "&.Mui-selected:hover": {
                    backgroundColor: "#c1c0c0",
                    color: "black",
                    border: "none",
                  },
                },
              }}
            />
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Projects;
