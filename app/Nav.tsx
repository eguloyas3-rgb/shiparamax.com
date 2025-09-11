"use client";
import { Navbar } from "./styles";
import Ima from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuKeyboard } from "react-icons/lu";


export default function Nav() {
 
  const [dropdown, setDropdown] = useState(false)
  const [service, setService] = useState(false)
  const [tracking, setTracking] = useState(false)

  const Aboutdrop = () => {
    setDropdown(prev => !prev)
  }
  const servicedrop = () => {
    setService(prev => !prev)
  }
  const Trackingdowp = () => {
    setTracking(prev => !prev)
  }

  const Closeall = () => {
    setDropdown(false)
    setService(false)
    setTracking(false)
  }
  



  return (
    <Navbar>
      <div className="main">
        <div className="left">
          <div className="logo">
            <Ima
            className="images"
              src="/image/logo.png"
              alt="Logo"
              width={70}
              height={100}
              priority
            />
          </div>
        </div>

        <div className="middle">

          <Link onClick={Closeall} href='/'>Home</Link>

          <div className="about" onClick={() => {setService(false)}}>
          <p onClick={() => {Aboutdrop(); setTracking(false)}}>About</p>
          {dropdown && (
           <div className="openabouton">
            <Link href=''>FAQ</Link>
            <Link href='/about'>About</Link>
           </div>
        
          )}
           </div>

          <div className="about" onClick={() => {setDropdown(false)}}>
          <p onClick={() => {servicedrop(); setTracking(false);}}>Service</p>
          {service && (
           <div className="openabout">
            <Link href=''>Cargo Transportation</Link>
            <Link href=''>Air Freight</Link>
            <Link href=''>Ocean Freight</Link>
            <Link href='/packaging'>Packaging and Storage</Link>
            
           </div>
          )}

          </div>

            <div className="about" onClick={() => {setDropdown(false)}}>
          <p onClick={() => {Trackingdowp(); setService(false);}}>Tracking</p>
          {tracking && (
           <div className="openabout">
            <Link href=''>Tracking Your Order</Link>
            <Link href='/About'>Sign-in</Link>
           </div>
          )}

          </div>
           <Link onClick={Closeall} href=''>Contact Us</Link>
        </div>

        <div className="right">
            <button><LuKeyboard /> Get A Quotes</button>
        </div>
      </div>
    </Navbar>
  );
}
