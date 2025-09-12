"use client"
import Imgas from "next/image";
import {Trackins} from '../styles'


export default function Tracking() {

    return(
        <Trackins>
        <Imgas src="/image/tracking.png" alt="Tracking"  fill className="images" />
          
          <div className="Mains">
            <form action="">
                <div className="topis">
                    <h1>Track and Track</h1>
                    <p>Enter Tracking ID</p>
                </div>
             <div>
              <input type="text" name="" id="" placeholder="Tracking ID...." />
                <button>Track Now</button>
             </div>
            </form>
          </div>
        </Trackins>
    );}