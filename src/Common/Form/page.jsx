"use client";
import React, { useState } from "react";
import Image from "next/image";
import From_image from "@/images/contact-us-img.jpg";
import Button from "@/Common/Buttons/button4";
import styles from "@/Common/Form/Form.module.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./immx.css";
import { Dropdown } from "primereact/dropdown";

const Page = () => {
  const [fullName, setfullName] = useState("");
  const [TextName, setTextName] = useState("");
  const [SqftName, setSqftName] = useState("");
  const [Emaildata, setEmaildata] = useState("");
  const [Phonedata, setPhonedata] = useState("");
  const [Addressdata, setAddressdata] = useState("");
  const [Descriptiondata, setDescriptiondata] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subSelectedCategory, setSubSelectedCategory] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };

  const sendMail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

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
          SqftName,
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
    } finally {
      setIsSubmitting(false);
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
      { name: "1BHK", code: "1BHK" },
      { name: "2BHK", code: "2BHK" },
      { name: "3BHK", code: "3BHK" },
      { name: "4BHK", code: "4BHK" },
      { name: "5BHK", code: "5BHK" },
      { name: "Other", code: "Other" },
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
                  placeholder="Full Name*"
                  name="Name"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
                  required
                />
                <label htmlFor="fullName" className={styles.form_label}>
                  Full Name*
                </label>
              </div>
              <div className={styles.form_flex}>
                <div className={styles.form_groupp}>
                  <input
                    type="email"
                    className={styles.form_field}
                    placeholder="Email *"
                    name="Email"
                    id="email"
                    value={Emaildata}
                    onChange={(e) => {
                      setEmaildata(e.target.value);
                    }}
                    required
                  />
                  {/* {!validateEmail(Email) && (
                  <span style={{ color: "red" }}>Invalid email address</span>
                )} */}
                  <label htmlFor="email" className={styles.form_label}>
                    Email*
                  </label>
                </div>

                <div className={styles.form_groupp}>
                  <input
                    type="tel"
                    className={styles.form_field}
                    placeholder="Phone No *"
                    name="Phone"
                    id="phone"
                    value={Phonedata}
                    onChange={(e) => {
                      setPhonedata(e.target.value);
                    }}
                    required
                  />
                  {!validatePhone(Phonedata) && Phonedata.length > 0 && (
                    <span style={{ color: "red" }}>
                      Phone number must be 10 digits
                    </span>
                  )}
                  <label htmlFor="phone" className={styles.form_label}>
                    Phone No*
                  </label>
                </div>
              </div>

              <div className={styles.form_flex}>
                <div className={styles.form_groupp}>
                  <Dropdown
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    options={categories}
                    optionLabel="name"
                    placeholder="Select category*"
                    className={`dropdown_city ${
                      selectedCategory ? "half-width" : ""
                    }`}
                  />
                </div>
                {selectedCategory &&
                  selectedCategory.code === "Residential" && (
                    <div className={styles.form_groupp}>
                      <Dropdown
                        value={subSelectedCategory}
                        onChange={(e) => setSubSelectedCategory(e.value)}
                        options={subCategories[selectedCategory.code]}
                        optionLabel="name"
                        placeholder="Select BHK"
                        className="dropdown_city half-width"
                        // required
                      />
                    </div>
                  )}

                {selectedCategory &&
                  selectedCategory.code === "Architecture" && (
                    <div className={styles.form_group111}>
                      <input
                        type="text"
                        className={styles.form_field}
                        placeholder="Enter Area"
                        name="Text"
                        id="area"
                        value={TextName}
                        onChange={(e) => {
                          setTextName(e.target.value);
                        }}
                        required
                      />
                      <label htmlFor="area" className={styles.form_label}>
                        Enter Area
                      </label>
                    </div>
                  )}

                {selectedCategory && selectedCategory.code === "Commercial" && (
                  <div className={styles.form_group111}>
                    <input
                      type="text"
                      className={styles.form_field}
                      placeholder="Enter Sq.ft"
                      name="Text"
                      id="sqft"
                      value={SqftName}
                      onChange={(e) => {
                        setSqftName(e.target.value);
                      }}
                      required
                    />
                    <label htmlFor="sqft" className={styles.form_label}>
                      Enter Sq.ft
                    </label>
                  </div>
                )}
              </div>

              <div className={styles.form_group1}>
                <textarea
                  rows={2}
                  className={styles.form_field_address}
                  placeholder="Address"
                  name="Address"
                  id="addresses"
                  value={Addressdata}
                  onChange={(e) => {
                    setAddressdata(e.target.value);
                  }}
                  required
                ></textarea>
                <label htmlFor="addresses" className={styles.form_label}>
                  Address*
                </label>
              </div>

              <div className={styles.form_group1}>
                <textarea
                  rows={2}
                  className={styles.form_field_address}
                  placeholder="Brief description of your Project"
                  name="Description"
                  id="description"
                  value={Descriptiondata}
                  onChange={(e) => {
                    setDescriptiondata(e.target.value);
                  }}
                  required
                ></textarea>
                <label htmlFor="description" className={styles.form_label}>
                  Brief description of your Project
                </label>
              </div>

              <div className={styles.field}>
                <div className={styles.Submit_button_outer}>
                  {isSubmitting ? (
                    <Button
                      type="button"
                      button_text="Submitting..."
                      disabled={true}
                    />
                  ) : (
                    <Button
                      type="button"
                      button_text="Submit"
                      disabled={isSubmitting}
                      onClick={sendMail}
                    />
                  )}{" "}
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
            <Image src={From_image} alt="none" className={styles.contact_img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
