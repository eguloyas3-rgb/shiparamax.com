"use client"
import Link from 'next/link'
import {Tracking} from './styles'


export default function TrackingID() {

    return(
        <Tracking>

          <div className="tackings">
           <div >
             <div className="wrietup">
               <span>Shiparamalogistics</span>
               <Link href='/faq'>FAQ</Link>
             </div>
             <div className="trackingnumber">
                <span>Tracking Number:</span>
                <h1><strong>3839927388383773737737 this is test</strong></h1>
             </div>

             <div className="updated">
                <p>This is test</p>
                <span>and another test for stlying</span>
                <hr />
                <div>
                 <span>Get More Out of Shiparamalogistics Tracking:</span>
                <span>Shiparama Tracking Plus</span>
                </div>
             </div>
              
              <div className="preparingfor">
                <span>Out for delivery</span>
              </div>

             <div className="arrived">
               <span>Arrievd</span>
               <span>Date</span>
             </div>

             <div className="movingthroug">
                <span>Moving Through Network</span>
                <span>In Transit to Next Facility</span>
                <span>put date</span>
             </div>

             <div className="arrviedourfacility">
                <span>Arrived at Shiparama Regional Facility</span>
                <span>Address from backend test</span>
             </div>
           </div>

          </div>



        </Tracking>
    )
}