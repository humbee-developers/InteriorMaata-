import React, { useState } from 'react';
import styles from "@/Components/ConsultancyTab/Accordian.module.css";

const CustomizedAccordions = () => {
    const accordionData = [
        {
            id: 'panel1',
            heading: '15 Rs / Sqft',
            title: '2D Furniture Layout',
            text: 'Our team of excellent designers will help you build a design concept + furniture layout according to your need.',
            bgcolor: "#CC7D45",
            textcolor: "white",
        },
        {
            id: 'panel2',
            heading: '75 Rs / Sqft',
            title: '2D layout + 3D Design',
            text: 'Virtual Design for your entire home, Our team of excellent designers and architects will help you design your home. ',
            bgcolor: "#7F7047",                                                     
            textcolor: "white",
        },
        {
            id: 'panel3',
            heading: '105 Rs / Sqft',
            title: 'A to Z Design',
            text: 'Our team of talented designers will create a 3d + 2d (Autocad ) + Working design concept to help you design your Home. Save up to 20% of your total Interior cost. ',
            bgcolor: "#CC7D45",
            textcolor: "white",
        },
    ];

    const [expanded, setExpanded] = useState(accordionData[0].id); // Set initial state to the id of the first panel

    const toggleAccordion = (panel) => {
        setExpanded((prev) => (prev === panel ? null : panel));
    };

    return (
        <div className={styles.customAccordion} >
            {accordionData.map(({ id, heading, title, text, bgcolor, textcolor }) => (
                <div key={id}>
                    <div
                        className={styles.customAccordionSummary}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleAccordion(id)}
                        onKeyDown={() => toggleAccordion(id)}
                        style={{ backgroundColor: bgcolor, color: textcolor }}
                    >
                        {heading}
                    </div>
                    <div className={`${styles.customAccordionDetails} ${expanded === id ? styles.open : ''}`}>
                        <div style={{ color: bgcolor }} className={styles.accordian_title}>{title}</div>
                        <div className={styles.accordian_text}>{text}</div>
                        <div style={{ color: bgcolor, borderColor: bgcolor }} className={styles.accordian_btn}>{'Exclusive GST'}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomizedAccordions;
