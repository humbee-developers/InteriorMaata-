"use client";
import Form from "@/Common/Form/page";
import Headers from "@/Common/headers/index";
import Footer from "@/Common/Footer/page";
import { usePathname } from 'next/navigation'
import { Poppins } from 'next/font/google';
import Refresh from "@/Components/Refresh/page";
import "./globals.css";
import DisableZoom from "@/Components/DisableZoom/page";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export default function RootLayout({ children }) {
  const location1 = usePathname()
  return (
    <html lang="en" className={`${poppins.variable}`} >
    {/* <meta http-equiv="refresh" content="3"/>  to refresh the website in every 3 seconds just for learning  */}  
      <body>
        <Headers />
        <Refresh/>
        <DisableZoom/>
        {children}
      
        {location1 !== '/SocialMedia' && <Form />}
            <Footer />
      
      </body>
    </html>
  );
}