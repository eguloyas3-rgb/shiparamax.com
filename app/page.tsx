"use client"
import Image from "next/image";
import React, {useState} from "react";
import { BsTrainFreightFront } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import {Homepages} from './styles'
import  Whoarewe  from "next/image";
import Boxig from "next/image";
import Boxi from "next/image";
import Box from "next/image";
import { CiStar } from "react-icons/ci";
import Tony from "next/image";
import { IoLocation, IoPersonSharp} from "react-icons/io5";
import Luna from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import Track from "next/image";









export default function Home() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev === 1 ? 0 : prev + 1)); // change 1 to number of reviews -1
  const prev = () => setCurrent((prev) => (prev === 0 ? 1 : prev - 1));


  return (
    <Homepages>
      <div className="bakcimh">
        <Image src='/image/background.jpg' alt="background" fill className="images" />
      </div>

      <form className="middlewrite">
        <div className="track">
          <span>WELCOME TO AMPLIFIED INSURANCE & SECURITY COMPANY</span>
          <span>Unbeatable Tracking and Transport Service</span>
          <div className="trackinID">
            <input type="text" name="" id="" placeholder="Tracking Id"/>
            <button>TRACKING</button>
          </div>
        </div>
      </form>

      <div className="shipment">

        <div>
          <span><BsTrainFreightFront /></span>
          <span>SEA FREIGHT</span>
        </div>

        <div>
          <span><GiCommercialAirplane /></span>
          <span>AIR FREIGHT</span>
        </div>
        <div>
          <span><FaShieldAlt /></span>
          <span>INSURANCE</span>
        </div>
        <div>
          <span><MdWarehouse /></span>
          <span>WAREHOUSE</span>
        </div>
        <div>
          <span><FaBox /></span>
          <span>AIR FREIGHT</span>
        </div>
      </div>




    <div className="whoweae">
      <div className="main">


         <div className="img">
           <Whoarewe src="/image/about_img01.png" alt="" className="whoweareimage" width={400} height={100} priority  />
        </div>

        <div className="whoare">
          <h2>Who We Are</h2>
          <h3>About Our Cargo Delivery</h3>
          <p><strong>Amplified Insurance & Security Company</strong> is your global transportation management solution.
Our comprehensive services include order management, shipment tracking and tracing, business intelligence, and freight auditing.</p>
       
          <div className="botton">
          <button>ABOUT US</button>
        </div>

       </div>
      </div>



      <div className="Delivery">

        <div className="deliver">
          <p>Delivery innovative service</p>
        <h2>About Cargo Delivery</h2>
        <span>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service is useful for companies of various effective logistics scale.</span>
      
        </div>
      
      </div>

      <div className="fastdeliry">
        <div className="fast">

          <div className="box">
            <div className="imgaesbox">
              <Boxig src='/image/sel.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
             <div className="witep">
              <p>Fast Delivery</p>
            <span>
When it comes to logistics, timely delivery is crucial for the success of your business. At Amplified Insurance & Security Company, we understand the importance of meeting deadlines and ensuring on-time delivery, everytime.</span>
          
             </div>
          </div>
          <div className="box">
            <div className="imgaesbox">
              <Boxi src='/image/services_img02.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
            <div className="witep">
               <p>24/7 Telephone Support</p>
            <span>At Amplified Insurance & Security Company, we understand the importance of seamless communication and round-the-clock assistance for our valued clients.</span>
          
            </div>
          </div>
          <div className="box">
            <div className="imgaesbox">
              <Box src='/image/services_img03.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
             <div className="witep">
              <p>More Than Anywhere Shipping</p>
            <span>We take pride in being your gateway to the world. With our extensive network and expertise, we navigate the global market with finesse, ensuring that your goods reach international markets efficiently and securely.</span>
          
             </div>
          </div>
        </div>
      </div>


    <div className="review">
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
    </div>


    <div className="DeliverAnything">
       <div className="DeliverAny">
        <p>Deliver Anything</p>
      <h1>Our Service</h1>

       </div>
      <div className="freightmain">

        <div className="freight">
          <span className="icons"><FaBox /></span>
          <div>
            <p>Road Freight</p>
            <span>When it comes to transporting goods, road freight is a versatile and cost-effective solution that offers flexibility and convenience.</span>
          </div>
        </div>

        <div className="freight">
          <span className="icons"><IoLocation /></span>
          <div>
            <p>Air Freight</p>
            <span>Global Air Freight Network: With an extensive global network of airline partners and agents, we have the capability to handle air freight shipments to and from virtually any destination worldwide.</span>
          </div>
        </div>

        <div className="freight">
          <span className="icons"><SlLike /></span>
          <div>
            <p>Ocean Freight</p>
            <span>When it comes to transporting large quantities of goods across long distances, ocean freight is a trusted and cost-effective solution. At Amplified Insurance & Security Company., we specialize in providing reliable.</span>
          </div>
        </div>

        <div className="freight">
          <span className="icons"><IoPersonSharp /></span>
          <div>
            <p>Packaging & Storage</p>
            <span>When it comes to transporting large quantities of goods across long distances, ocean freight is a trusted and cost-effective solution. At Amplified Insurance & Security Company., we specialize in providing reliable</span>
          </div>
        </div>
      </div>

    </div>



    <div className="extrafeatures">

      <div className="Extra">
        <span>Extra Features</span>
        <h1>Unbeatable Tracking and Transport <span>Services</span></h1>
        <div>
          <p>At Amplified Insurance & Security Company., we take great pride in offering unbeatable tracking and transport services that are designed to meet all your logistics needs. With our commitment to excellence and customer satisfaction, we have established ourselves as a trusted name in the industry.</p>
        </div>
      </div>

      <div className="imagesdelivery">
        <Track src="/image/delivery_services_img.png" alt="delivery_services" width={300} height={200} priority />
      </div>
    </div>

 

      </div>


      
    </Homepages>
  );
}

<form action=""></form>
