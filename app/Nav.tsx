"use client";
import { Navbar } from "./styles";
import Ima from "next/image";
import { LuKeyboard } from "react-icons/lu";


export default function Nav() {
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
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Tracking</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="right">
            <button><LuKeyboard /> Get A Quotes</button>
        </div>
      </div>
    </Navbar>
  );
}
