"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { ContactFormSchemas1 } from "../../schema/Contact_form_schema";
import Image from "next/image";
import From_image from "@/images/Form_image.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@/Assets/Buttons/button4";
import styles from "@/Common/Form/Form.module.css";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./immx.css";
const Page = () => {
  const [formResponse, setFormResponse] = useState("");
  const initialValues = {
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
    select: "",
    Description: "",
  };

  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: ContactFormSchemas1,
    onSubmit: (value, action) => {
      console.log("value", value);
      emailjs
        .send(
          "service_s8jkgxd",
          "template_ld39jwp",
          values,
          "SCLviec62g3U8MFm4"
        )
        .then((response) => {
          console.log("Email sent successfully....", response);
          setFormResponse(response);
          action.resetForm();
        })
        .catch((error) => {
          console.error("Error", error);
        });
      submitMessage();
    },
  });

  console.log(values);
  console.log("response", formResponse.text);

  return (
    <div className={styles.Contact_form_section}>
      <div className={styles.contact_form}>
        <div className={styles.contact_form_wrapper}>
          <h1 className={styles.contact_form_title}>Reach out to us</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <input  
              type="text"
                className={styles.form_field}
                placeholder="Full Name"
                name="Name"
                onChange={handleChange}
                value={values.Name} />
              <label htmlFor="Name" className={styles.form_label}>
                Full Name
              </label>
              {/* <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                type="text"
                name="Name"
                onChange={handleChange}
                value={values.Name}
              /> */}
              {touched.Name && errors.Name && (
                <div className={styles.error}>{errors.Name}</div>
              )}
              {!touched.Name && !errors.Name && (
                <div style={{ visibility: "hidden" }}>&nbsp;</div>
              )}
            </div>
            {/* <div className={styles.form_group}>
              <input
                type="text"
                className={styles.form_field}
                placeholder="Last Name"
                name="LastName"
                onChange={handleChange}
                value={values.LastName}
              />
              <label for="LastName" className={styles.form_label}>
                Last Name
              </label>
              {touched.LastName && errors.LastName && (
                <div className={styles.error}>{errors.LastName}</div>
              )}
              {!touched.LastName && !errors.LastName && (
                <div style={{ visibility: "hidden" }}>&nbsp;</div>
              )}
            </div> */}

            <div className={styles.form_group}>
            <input
                type="email"
                className={styles.form_field}
                placeholder="Email *"
                name="Email"
                onChange={handleChange}
                value={values.Email}
              />
              <label htmlFor="Email" className={styles.form_label}>
                Email
              </label>
              {/* <TextField
                id="outlined-basic"
                label="Email *"
                variant="outlined"
                type="email"
                name="Email"
                onChange={handleChange}
                value={values.Email}
              /> */}
              {touched.Email && errors.Email && (
                <p className={styles.error}>{errors.Email}</p>
              )}
              {!touched.Email && !errors.Email && (
                <p style={{ visibility: "hidden" }}>&nbsp;</p>
              )}
            </div>

            <div className={styles.form_group}>
            <input
                type="number"
                className={styles.form_field}
                placeholder="Phone No"
                name="Phone"
                onChange={handleChange}
                value={values.Phone}
              />
              <label htmlFor="Phone" className={styles.form_label}>
                Phone No
              </label>
              {/* <TextField
                id="outlined-basic"
                label="Phone No"
                variant="outlined"
                type="tel"
                name="Phone"
                onChange={handleChange}
                value={values.Phone}
              /> */}
              {touched.Phone && errors.Phone && (
                <p className={styles.error}>{errors.Phone}</p>
              )}
              {!touched.Phone && !errors.Phone && (
                <p style={{ visibility: "hidden" }}>&nbsp;</p>
              )}
            </div>

            <div className={styles.form_group1}>
            <textarea
               rows={4}
                className={styles.form_field_address}
                placeholder="Address"
                name="Address"
                onChange={handleChange}
                value={values.Address}
              ></textarea>
              <label htmlFor="Address" className={styles.form_label}>
                Address
              </label>
              {/* <FormControl fullWidth>
                <TextField
                  name="Address"
                  id="outlined-multiline-static"
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={4}
                  className={styles.field_Address}
                  onChange={handleChange}
                  value={values.Address}
                ></TextField>
              </FormControl> */}
              {touched.Address && errors.Address && (
                <p className={styles.error1}>{errors.Address}</p>
              )}
              {!touched.Address && !errors.Address && (
                <p style={{ visibility: "hidden" }}>&nbsp;</p>
              )}
            </div>

            {/* <div className={styles.field}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  How many BHK ( Bedroom ) is your new home
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.select}
                  label="How many BHK ( Bedroom ) is your new home"
                  onChange={handleChange}
                  name="select"
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
              {touched.select && errors.select && (
                <p className={styles.error}>{errors.select}</p>
              )}
              {!touched.select && !errors.select && (
                <p style={{ visibility: "hidden" }}>&nbsp;</p>
              )}
            </div> */}

            <div className={styles.form_group1}>
            <textarea
               rows={4}
                className={styles.form_field_address}
                placeholder="Brief description of your Project"
                name="Description"
                onChange={handleChange}
                value={values.Description}
              ></textarea>
              <label htmlFor="Address" className={styles.form_label}>
              Brief description of your Project
              </label>
              {/* <FormControl fullWidth>
                <TextField
                  name="Description"
                  id="outlined-multiline-static"
                  label="Brief description of your Project"
                  variant="outlined"
                  multiline
                  rows={4}
                  className={styles.field_Address}
                  value={values.Description}
                  onChange={handleChange}
                ></TextField>
              </FormControl> */}
              {touched.Description && errors.Description && (
                <p className={styles.error1}>{errors.Description}</p>
              )}
              {!touched.Description && !errors.Description && (
                <p style={{ visibility: "hidden" }}>&nbsp;</p>
              )}
            </div>

            <div className={styles.field}>
              <div className={styles.Submit_button_outer}>
                <Button button_text="Submit" />
                {formResponse.text === "OK" && (
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
                )}
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
  );
};

export default Page;
