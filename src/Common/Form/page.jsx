"use client";
// import { useFormik } from "formik";
import React, { useState } from "react";
// import { ContactFormSchemas1 } from "../../schema/Contact_form_schema";
import Image from "next/image";
import From_image from "@/images/Form_image.png";
import Button from "@/Assets/Buttons/button4";
import styles from "@/Common/Form/Form.module.css";
// import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./immx.css";
const Page = () => {
  const [fullName, setfullName] = useState("");
  const [Emaildata, setEmaildata] = useState("");
  const [Phonedata, setPhonedata] = useState("");
  const [Addressdata, setAddressdata] = useState("");
  const [Descriptiondata, setDescriptiondata] = useState("");

  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };


  const sendMail = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullName,
                Emaildata,
                Phonedata,
                Addressdata,
                Descriptiondata,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        setfullName("");
        setEmaildata("");
        setPhonedata("");
        setAddressdata("");
        setDescriptiondata("");
        submitMessage()
        console.log(await response.json());
    } catch (error) {
        console.error("Error:", error);
    }
};
// const validateEmail = (Emaildata) => {
//   const re = /\S+@\S+\.\S+/;
//   return re.test(Emaildata);
// };

const validatePhone = (Phonedata) => {
  return /^\d{10}$/.test(Phonedata);
};

  return (<>
  
    <div className={styles.Contact_form_section}>
      <div className={styles.contact_form}>
        <div className={styles.contact_form_wrapper}>
          <h1 className={styles.contact_form_title}>Reach out to us</h1>
          <form onSubmit={sendMail}>
            <div className={styles.form_group}>
              <input
                type="text"
                className={styles.form_field}
                placeholder="Full Name"
                name="Name"
                id="Name"
                value={fullName}
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
                required
              />
              <label htmlFor="Name" className={styles.form_label}>
                Full Name
              </label>
            </div>
            <div className={styles.form_group}>
              <input
                type="email"
                className={styles.form_field}
                placeholder="Email *"
                name="Email"
                id="Email"
                value={Emaildata}
                onChange={(e) => {
                  setEmaildata(e.target.value);
                }}
                required
              />
               {/* {!validateEmail(Email) && (
                  <span style={{ color: "red" }}>Invalid email address</span>
                )} */}
              <label htmlFor="Email" className={styles.form_label}>
                Email
              </label>
            </div>

            <div className={styles.form_group}>
              <input
                type="number"
                className={styles.form_field}
                placeholder="Phone No"
                name="Phone"
                id="Phone"
                value={Phonedata}
                onChange={(e) => {
                  setPhonedata(e.target.value);
                }}
              />
               {!validatePhone(Phonedata) && Phonedata.length > 0 && (
                  <span style={{ color: "red" }}>
                    Phone number must be 10 digits
                  </span>
                )}
              <label htmlFor="Phone" className={styles.form_label}>
                Phone No
              </label>
            </div>

            <div className={styles.form_group1}>
              <textarea
                rows={4}
                className={styles.form_field_address}
                placeholder="Address"
                name="Address"
                id="Address"
                value={Addressdata}
                onChange={(e) => {
                  setAddressdata(e.target.value);
                }}
                required
              ></textarea>
              <label htmlFor="Address" className={styles.form_label}>
                Address
              </label>
            </div>
            <div className={styles.form_group1}>
              <textarea
                rows={4}
                className={styles.form_field_address}
                placeholder="Brief description of your Project"
                name="Description"
                id="Description"
                value={Descriptiondata}
                onChange={(e) => {
                  setDescriptiondata(e.target.value);
                }}
                required
              ></textarea>
              <label htmlFor="Address" className={styles.form_label}>
                Brief description of your Project
              </label>
            </div>

            <div className={styles.field}>
              <div className={styles.Submit_button_outer}>
                <Button button_text="Submit" />
                {/* {formResponse.text === "OK" && ( */}
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={true}
                    theme="light"
                    transition={Slide}
                    className={"contactFormNotification"}
                  />
                {/* )} */}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.contact_us_image}>
        <div className={styles.FormImage_outer}>
          <Image
            src={From_image}
            alt=""
            srcSet=""
            className={styles.contact_img}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;