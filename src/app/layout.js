"use client";
import Form from "@/Common/Form/page";
import Headers from "@/Common/headers/index";
import Footer from "@/Common/Footer/page";
import { Poppins } from 'next/font/google';
import Refresh from "@/Components/Refresh/page";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`} >
      <body>
        <Headers />
        <Refresh/>
        {children}
      
            <Form />
            <Footer />
      
      </body>
    </html>
  );
}