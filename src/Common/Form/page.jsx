"use client";
import React, { useState } from "react";
import Image from "next/image";
import From_image from "@/images/Form_image.png";
import Button from "@/Common/Buttons/button4";
import styles from "@/Common/Form/Form.module.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./immx.css";

import { Dropdown } from "primereact/dropdown";

const Page = () => {
  const [fullName, setfullName] = useState("");
  const [TextName, setTextName] = useState("");
  const [Emaildata, setEmaildata] = useState("");
  const [Phonedata, setPhonedata] = useState("");
  const [Addressdata, setAddressdata] = useState("");
  const [Descriptiondata, setDescriptiondata] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subSelectedCategory, setSubSelectedCategory] = useState(null);
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
          selectedCategory,
          subSelectedCategory,
          TextName,
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
      setSelectedCategory(null);
      setSubSelectedCategory(null);
      submitMessage();
      console.log(await response.json());
    } catch (error) {
      toast.error("Error Submitting Form");
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

  const categories = [
    { name: "Interior", code: "Residential" },
    { name: "Architecture", code: "Architecture" },
    { name: "Commercial", code: "Commercial" },
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.value);
    setSubSelectedCategory(null); 
  };

  const subCategories = {
    Residential: [
      { name: "Living Room", code: "LR" },
      { name: "Bedroom", code: "BR" },
    ],
    Architecture: [
      { name: "Modern", code: "MOD" },
      { name: "Classical", code: "CLA" },
    ],
    Commercial: [
      { name: "Retail", code: "RET" },
      { name: "Office", code: "OFF" },
    ],
  };
  return (
    <>
      <div className={styles.Contact_form_section}>
        <div className={styles.contact_form}>
          <div className={styles.contact_form_wrapper}>
            <h1 className={styles.contact_form_title}>Reach out to us</h1>
            <form onSubmit={sendMail} className={styles.formSpacing}>
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
              <div className={styles.form_flex}>
                <div className={styles.form_groupp}>
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

                <div className={styles.form_groupp}>
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
              </div>

              <div>
                <div>
                  <Dropdown
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    options={categories}
                    optionLabel="name"
                    placeholder="Select category"
                    className={`dropdown_city ${
                      selectedCategory ? "half-width" : ""
                    }`}
                  />
                </div>
                {selectedCategory &&
                  selectedCategory.code === "Residential" && (
                    <div>
                      <Dropdown
                        value={subSelectedCategory}
                        onChange={(e) => setSubSelectedCategory(e.value)}
                        options={subCategories[selectedCategory.code]}
                        optionLabel="name"
                        placeholder="Select subcategory"
                        className="dropdown_city half-width"
                      />
                    </div>
                  )}
                {selectedCategory &&
                  selectedCategory.code === "Architecture" && (
                    <div className={styles.form_group}>
                      <input
                        type="text"
                        className={styles.form_field}
                        placeholder="Enter text"
                        name="Text"
                        id="Text"
                        value={TextName}
                        onChange={(e) => {
                             setTextName(e.target.value);
                           }}
                        required
                      />
                    </div>
                  )}
                {selectedCategory && selectedCategory.code === "Commercial" && (
                  <div>
                    <Dropdown
                      value={subSelectedCategory}
                      onChange={(e) => setSubSelectedCategory(e.value)}
                      options={subCategories[selectedCategory.code]}
                      optionLabel="name"
                      placeholder="Select subcategory"
                      className="dropdown_city half-width"
                    />
                  </div>
                )}
              </div>

              <div className={styles.form_group1}>
                <textarea
                  rows={2}
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
                  rows={2}
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
                  <Button type="button" button_text="Submit" />
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
