"use client";
import Form from "@/Common/Form/page";
import Headers from "@/Common/headers/index";
import Footer from "@/Common/Footer/page";
import Refresh from "@/Components/Refresh/page";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
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