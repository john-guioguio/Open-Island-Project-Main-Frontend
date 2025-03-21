

import * as React from 'react';
import "@fontsource/inter"; // Defaults to 400 weight
import "@fontsource/inter/300.css"; // Light
import "@fontsource/inter/500.css"; // Medium
import "@fontsource/inter/700.css"; // Bold

import { ReactNode } from "react";
import '@/app/css/main.css';
import landingPageIMG from "../Images/landingpageBG.png";
export default function RootLayout({ children }: { children: ReactNode }) {

  // const pages = ['Products', 'Pricing', 'Blog'];
  // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  return (
    <html lang="en"> 
      <body style={{
        backgroundImage: `URL(${landingPageIMG.src})`,  // Apply the image as a background
        backgroundSize: 'Cover',                   // Ensure the image covers the entire Box
        backgroundPositionY: '34%',              // Align the image to the center
        backgroundPositionX: 'center',              // Align the image to the center
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        justifyContent: 'center',                  // Center horizontally
        alignItems: 'center',                      // Center vertically
        color: 'black',                            // Change text color to white (optional, depends on background image)
        fontSize: '2rem',                          // Optional: Adjust font size (for visibility)
        textAlign: 'center',
        width: '100%',
        margin: '0',
        padding: '0'
      }}>


        {children}
      </body>
    </html>
  );
}
