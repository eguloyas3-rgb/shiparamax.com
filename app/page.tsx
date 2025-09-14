"use client"
import Image from "next/image";
import {useEffect} from 'react'
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
import Track from "next/image";
import Comment from './comment'
import Deliverynything from './deliveryanything'
import AOS from 'aos';
import 'aos/dist/aos.css';








export default function Home() {


        useEffect(() => {
        AOS.init({
          duration: 2000,
          once: false,   
        });
        AOS.refresh();
      }, []);
    

  useEffect(() => {
    fetch("https://your-backend.onrender.com/ping/")
      .catch((err) => console.log("Ping failed:", err));
  }, []);


  return (
    <Homepages>
      <div className="bakcimh">
        <Image src='/image/background.jpg' alt="background" fill className="images" />
      </div>

      <form className="middlewrite" data-aos="zoom-in-up">
        <div className="track">
          <span>WELCOME TO Shiparamalogistics  & SECURITY COMPANY</span>
          <span>Unbeatable Tracking and Transport Service</span>
          <div className="trackinID">
            <input type="text" name="" id="" placeholder="Tracking Id"/>
            <button>TRACKING</button>
          </div>
        </div>
      </form>

      <div className="shipment" data-aos="flip-left">

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


         <div className="img" data-aos="slide-right" >
           <Whoarewe src="/image/about_img01.png" alt="" className="whoweareimage" width={400} height={100} priority  />
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" className="whoare">
          <h2>Who We Are</h2>
          <h3>About Our Cargo Delivery</h3>
          <p><strong>Shiparamalogistics  & Security Company</strong> is your global transportation management solution.
Our comprehensive services include order management, shipment tracking and tracing, business intelligence, and freight auditing.</p>
       
          <div className="botton">
          <button>ABOUT US</button>
        </div>

       </div>
      </div>



      <div className="Delivery" data-aos="zoom-in" >

        <div className="deliver">
          <p>Delivery innovative service</p>
        <h2>About Cargo Delivery</h2>
        <span>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service is useful for companies of various effective logistics scale.</span>
      
        </div>
      
      </div>

      <div className="fastdeliry" data-aos="flip-left">
        <div className="fast">

          <div className="box">
            <div className="imgaesbox">
              <Boxig src='/image/sel.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
             <div className="witep">
              <p>Fast Delivery</p>
            <span>
When it comes to logistics, timely delivery is crucial for the success of your business. At Shiparamalogistics  & Security Company, we understand the importance of meeting deadlines and ensuring on-time delivery, everytime.</span>
          
             </div>
          </div>
          <div className="box">
            <div className="imgaesbox">
              <Boxi src='/image/services_img02.jpg' alt="" width={400} height={200} className="imgs"  priority />
            </div>
            <div className="witep">
               <p>24/7 Telephone Support</p>
            <span>At Shiparamalogistics  & Security Company, we understand the importance of seamless communication and round-the-clock assistance for our valued clients.</span>
          
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


   <Comment />

   <Deliverynything />





    <div className="extrafeatures">

      <div className="Extra" data-aos="zoom-out">
        <span>Extra Features</span>
        <h1>Unbeatable Tracking and Transport <span>Services</span></h1>
        <div>
          <p>At Shiparamalogistics  & Security Company., we take great pride in offering unbeatable tracking and transport services that are designed to meet all your logistics needs. With our commitment to excellence and customer satisfaction, we have established ourselves as a trusted name in the industry.</p>
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
