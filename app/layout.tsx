import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";



import "./globals.css";
import Nav from "./Nav";
import Chatbox from './chatbox';
import Footer from './Footer';
import Fedex from "./Fedex";
import GoogleTranslate from "./GoogleTranslate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiparamax",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <GoogleTranslate />
        <Nav />
        {children}
        
        <Fedex />
        <Chatbox />
        <Footer/>
      </body>
    </html>
  );
}



