import * as Yup from 'yup';
export const ContactFormSchemas1 = Yup.object({
  Name: Yup.string().required('Full Name is required'),
  LastName: Yup.string().required('Last Name is required'),
  Email: Yup.string().email('Invalid email address').required('Email is required'),
  Phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Phone number is required'),
  Address: Yup.string().required('Address is required'),
  select: Yup.string().required('Please select any one option'),
  Description: Yup.string().required('Description is required'),
});