"use client";
import { Navbar } from "./styles";
import Ima from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuKeyboard } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";



export default function Nav() {
 
  const [dropdown, setDropdown] = useState(false)
  const [service, setService] = useState(false)
  const [tracking, setTracking] = useState(false)


  const [openQuote, setOpenQuote] = useState(false)

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
  


  // open quotes
 const Openqute = () => {
  setOpenQuote(prev => !prev)
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

            <div className="menubar">
            <FiMenu />
          </div>

        <div className="middle">

          <Link onClick={Closeall} href='/'>Home</Link>

          <div className="about" onClick={() => {setService(false)}}>
          <p onClick={() => {Aboutdrop(); setTracking(false)}}>About</p>
          {dropdown && (
           <div className="openabouton">
            <Link onClick={() => {setDropdown(false)}} href='/faq'>FAQ</Link>
            <Link onClick={() => {setDropdown(false)}} href='/about'>About</Link>
           </div>
        
          )}
           </div>

          <div className="about" onClick={() => {setDropdown(false)}}>
          <p onClick={() => {servicedrop(); setTracking(false);}}>Service</p>
          {service && (
           <div className="openabout">
            <Link onClick={() => {setService(false)}} href='/car-go'>Cargo Transportation</Link>
            <Link onClick={() => {setService(false)}} href='/air'>Air Freight</Link>
            <Link onClick={() => {setService(false)}} href='/ocean'>Ocean Freight</Link>
            <Link onClick={() => {setService(false)}} href='/packaging'>Packaging and Storage</Link>
            
           </div>
          )}

          </div>

            <div className="about" onClick={() => {setDropdown(false)}}>
          <p onClick={() => {Trackingdowp(); setService(false);}}>Tracking</p>
          {tracking && (
           <div className="openabout">
            <Link onClick={() => {setTracking(false)}} href='/tracking'>Tracking Your Order</Link>
            <Link onClick={() => {setTracking(false)}} href='/'>Sign-in</Link>
           </div>
          )}

          </div>
           <Link onClick={Closeall} href='/contant'>Contact Us</Link>
        </div>

        <div className="right">
            <button onClick={Openqute}><LuKeyboard /> Get A Quotes</button>
        </div>
      </div>

      <div className="quotes">
         {openQuote && (
          <form action="">
          <div style={{marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'}}>
            <span>GET A FREE QUOTE</span>
            <span onClick={() => {setOpenQuote(false);}}><IoMdClose /></span>
          </div>
          <div>
            <input type="text" name="" id="" placeholder="Name" />
          </div>
          <div>
           <input type="text" name="" id="" placeholder="Email..."/>
          </div>
          <div>
            <textarea name="" id="" placeholder="Message.."></textarea>
          </div>
          <div>
            <button>Send Message</button>
          </div>
        </form>
         )}

      </div>
    </Navbar>
  );
}
