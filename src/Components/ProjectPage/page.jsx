"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/Components/ProjectPage/projectPage.module.css";
import projectsData from "./projectData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import StarSvg from "@/svgs/Star.svg";
import { useRouter } from "next/navigation";
const Projects = () => {
  const itemsPerPage = 4;
  const [projectName, setProjectName] = useState(0);
  const [currentData, setCurrentData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const projectsRef = useRef(null);

  const handleClick = (e) => {
    setProjectName(e);
    setCurrentData(projectsData[e]);
    setPageNumber(1);
  };

  useEffect(() => {
    setCurrentData(projectsData[0]);
  }, []);

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
  return (
    <div ref={projectsRef}>
      <div className={styles.ProjectSection_header}>
        <div>
          <div className={styles.ProjectSection_headerText}>
            <div
              className={`${styles.tabItem} ${
                projectName === 0 && styles.active
              }`}
              onClick={() => handleClick(0)}
            >
              INTERIOR
              <Image
                src={StarSvg}
                alt="star"
                className={`${styles.svg} ${
                  projectName === 0 && styles.active
                }`}
              />
            </div>
            <div
              className={`${styles.tabItem} ${
                projectName === 1 && styles.active
              }`}
              onClick={() => handleClick(1)}
            >
              ARCHITECTURE
              <Image
                src={StarSvg}
                alt="star"
                className={`${styles.svg} ${
                  projectName === 1 && styles.active
                }`}
              />
            </div>
            <div
              className={`${styles.tabItem} ${
                projectName === 2 && styles.active
              }`}
              onClick={() => handleClick(2)}
            >
              COMMERCIALS
              {/* <Image src={StarSvg} alt='star' className={`${styles.svg} ${projectName === 2 && styles.active}`} /> */}
            </div>
          </div>

          {/* <div className={styles.ProjectSection_headerText}>
                        <div className={`${styles.tabItem} ${projectName === 3 && styles.active}`} onClick={() => handleClick(3)}>HOTELS
                        <Image src={StarSvg} alt='star' className={`${styles.svg} ${projectName === 3 && styles.active}`} />
                        </div>
                        <div className={`${styles.tabItem} ${projectName === 4 && styles.active}`} onClick={() => handleClick(4)}>COMMERCIAL
                        <Image src={StarSvg} alt='star' className={`${styles.svg} ${projectName === 4 && styles.active}`}/>
                        </div>
                        <div className={`${styles.tabItem} ${projectName === 5 && styles.active}`} onClick={() => handleClick(5)}>GOVERNMENT
                            {/* <svg width="33" height="33" viewBox="0 0 33 33" fill='#D9D9D9' xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                            <path d="M29 18.5C31.1667 19.5 31.75 21.0833 30.75 23.25C29.75 25.25 28.1667 25.75 26 24.75L18.5 19.5L20 28.75C20 29.5833 19.5833 30.4167 18.75 31.25C18.0833 31.9167 17.25 32.25 16.25 32.25C15.4167 32.25 14.6667 31.9167 14 31.25C13.3333 30.4167 13 29.5833 13 28.75L14.25 20.25L8 26C6 27.1667 4.33333 26.8333 3 25C1.83333 23 2.25 21.3333 4.25 20L12 16.75L3.75 14.25C1.58333 13.25 1 11.75 2 9.74999C3 7.58332 4.58333 6.99999 6.75 8L14.5 13.25L13 3.99999C13 3.16666 13.3333 2.41666 14 1.74999C14.6667 0.916657 15.5 0.49999 16.5 0.49999C16.8333 0.49999 17.25 0.583323 17.75 0.749987C18.25 0.916662 18.5833 1.16666 18.75 1.49999C19.0833 1.83332 19.3333 2.24999 19.5 2.74999C19.8333 3.08332 20 3.49999 20 3.99999L18.5 12.5L25 6.74998C26.8333 5.58332 28.3333 5.99999 29.5 8C30.8333 9.83333 30.5833 11.4167 28.75 12.75L20.75 16L29 18.5Z" />
                        </svg> */}
          {/* </div>
                    </div> */}
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
              </div>

              <div className={styles.ProjectSection_textContent}>
                <div className={styles.section_1}>
                  <div>
                    <span>{data.title}</span>
                  </div>
                  <div className={styles.year}>
                    <span>{data.year}</span>
                  </div>
                  <div>
                    <span>PROJECT | </span>
                    {data.project}
                  </div>
                  <div>
                    <span>ARCHITECT | </span>
                    {data.architect}
                  </div>
                  <div>
                    <span>INTERIOR DESIGN | </span>
                    {data.interiordesign}
                  </div>
                  <div>
                    <span>DEVELOPER | </span>
                    {data.developer}
                  </div>
                </div>

                <div className={styles.section_2}>
                  <div>
                    <span>LOCATION | </span>
                    {data.location}
                  </div>
                  <div>
                    <span>USAGE | </span>
                    {data.usage}
                  </div>
                  <div>
                    <span>STUDIO | </span>
                    {data.studio}
                  </div>
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
