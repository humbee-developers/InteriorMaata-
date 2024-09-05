"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/Components/ProjectPage/projectPage.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import StarSvg from "@/svgs/Star.svg";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";


const Projects = () => {
  const itemsPerPage = 4;
  const [projectName, setProjectName] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const projectsRef = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tabUrl, setTabUrl] = useState("");
  const [projectsData, setProjectsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://interiormaataassets.humbeestudio.xyz/wp-json/acf/v3/posts/?per_page=20")
    // fetch("https://interiormaataassets.humbeestudio.xyz/wp-json/acf/v3/posts") by default it will only show 10 projects
    // fetch("https://interiormaataassets.humbeestudio.xyz/wp-json/acf/v3/posts/?per_page=X") for showing 1 project 
      .then((res) => res.json())
      // .then((data) => setProjectsData(data));
      .then((data) => {
        // Sort projectsData by year in descending order
        const sortedData = data.sort((a, b) => b.acf.year - a.acf.year);
        setProjectsData(sortedData);
      });
  }, []);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    if (pathname + hash === "/Projects#residential") {
      setCurrentData(projectsData.filter((data) => data.acf.select_category === "residential"));
    } else if (pathname + hash === "/Projects#architecture") {
      setCurrentData(projectsData.filter((data) => data.acf.select_category === "architecture"));
    } else {
      setCurrentData(projectsData.filter((data) => data.acf.select_category === "commercial"));
    }

    setTabUrl(pathname + hash);
    setPageNumber(1);
  }, [pathname, searchParams, projectsData]);

  const lastIndex = pageNumber * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const displayedData = currentData.slice(firstIndex, lastIndex);

  return (
    <div ref={projectsRef} className={styles.projectPageOuter}>
      <div className={styles.ProjectSection_header}>
        <div>
          <div className={styles.ProjectSection_headerText}>
            <div className={`${styles.tabItem} ${tabUrl === "/Projects#residential" && styles.active}`}>
              <Link href={"/Projects#residential"}>Residential</Link>
              <Image
                src={StarSvg}
                alt="star"
                className={`${styles.svg} ${tabUrl === "/Projects#residential" && styles.active}`}
              />
            </div>
            <div className={`${styles.tabItem} ${tabUrl === "/Projects#architecture" && styles.active}`}>
              <Link href={"/Projects#architecture"}>ARCHITECTURE</Link>
              <Image
                src={StarSvg}
                alt="star"
                className={`${styles.svg} ${tabUrl === "/Projects#architecture" && styles.active}`}
              />
            </div>
            <div className={`${styles.tabItem} ${tabUrl === "/Projects#commercials" && styles.active}`}>
              <Link href={"/Projects#commercials"}>COMMERCIALS</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ProjectSection_Content}>
        {displayedData.map((data, index) => (
          <div key={index}>
            <div className={styles.ProjectSection_imageContent}>
              <Image
                className={styles.ProjectSection_image}
                alt="image"
                src={data.acf.heading_image}
                onClick={() => router.push(`/Single_Project_Layout#${data.id}`)}
                width={1000}
                height={200}
              />
              <div
                onClick={() => router.push(`/Single_Project_Layout#${data.id}`)}
                className={styles.overlay}
              ></div>
            </div>
            <div className={styles.project_heading}>
              <span>{data.acf.project_name}</span>
            </div>
            <div className={styles.ProjectSection_textContent}
            data-category={data.acf.select_category}>
              <div className={styles.section_1}>
                <div className={styles.year}>
                  <span>{data.acf.year}</span>
                </div>
               {/* Conditionally render client name if category is not "architecture" or "commercial" */}
{/*                {data.acf.select_category !== "architecture" && data.acf.select_category !== "commercial" && (
               <div>
                    <span>CLIENT | </span>
                    {data.acf.client_name}
                  </div>
                )} */}
                 {data.acf.select_category !== "architecture" && data.acf.select_category !== "commercial" && (
                <div>
                  <span>PROJECT | </span>
                  {data.acf.select_category}
                </div>
                 )}
              </div>

              <div className={styles.section_2}>
                <div>
                  <span>LOCATION | </span>
                  {data.acf.location}
                </div>
              </div>

              <div className={styles.section_3}></div>
            </div>
          </div>
        ))}
      </div>

      {currentData.length > 0 && (
        <div className={styles.projects_pagination}>
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
        </div>
      )}
    </div>
  );
};

export default Projects;
