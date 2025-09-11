"use client"
import {useState} from 'react'
import { CiStar } from "react-icons/ci";
import Tony from "next/image";
import {Commets} from './styles'
import Luna from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


export default function Comment() {
  
      const [current, setCurrent] = useState(0);
      const next = () => setCurrent((prev) => (prev === 1 ? 0 : prev + 1)); // change 1 to number of reviews -1
      const prev = () => setCurrent((prev) => (prev === 0 ? 1 : prev - 1));

    return(
        <Commets>
       <section className="review">
      {/* Review 1 */}
      <div style={{ display: current === 0 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>shipping Cargo</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>I’ve been using this Cargo delivery for my deliveries, and I’m genuinely impressed...</p>
          <div className="comments">
            <div>
              <Tony src="/image/testi_avatar01.png" alt="Tony" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Tony Alexander</span>
              <span>Business Person</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div style={{ display: current === 1 ? "block" : "none" }} className="myreview">
        <div className="tipic">
          <p>Happy Customer Quotes</p>
          <h2>Our Top Reviews</h2>
        </div>
        <div className="cargoship">
          <p>Fast & Reliable</p>
          <div className="stars">
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
            <span><CiStar /></span>
          </div>
          <p>This shipping service is amazing! Packages always arrive on time...</p>
          <div className="comments">
            <div>
              <Luna src="/image/testi_avatar02.png" alt="Sarah" width={80} height={80} priority />
            </div>
            <div className="nameofcomment">
              <span>Luna Dexander</span>
              <span>E-commerce</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigatecomment">
        <span onClick={prev}><FaChevronLeft /></span>
        <span onClick={next}><FaChevronRight /></span>
      </div>
    </section>
    </Commets>
    );
}