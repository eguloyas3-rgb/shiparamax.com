"use client"
import {Footers} from './styles'
export default  function Footer() {
    
    return(

        <Footers>
            <div className="footers">
               
               <div>
               
                <ul>
                    <li>We offers the industry’s most skilled</li>
                    <li>and superior technology. We solve</li>
                    <li>the smallest to the largest and mosts</li>
                    <li>complex logistics challenges</li>
                    <li>whether on a domestic or global level.</li>
                </ul>
               </div>

               <div>
                 <p>SERVICES</p>
                <ul>
                    <li> Cargo Transportation</li>
                    <li>Air Freight</li>
                    <li>Ocean Freight</li>
                    <li> Packaging And Storage</li>
                </ul>
               </div>

               <div>
                <p>SITE PAGES</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li> Services</li>
                    <li> Contact Us</li>
                </ul>
               </div>

               <div>
                <p>Location</p>
                <ul>
                    <li>30 Southwest Park, Westwood, MA 02090</li>
                    <li>Call Center</li>
                    <li>+1 517-216-1274</li>
                </ul>
                 <div className='subscribe'>
                    <input type="text" name="" id="" placeholder='subscribe....'/>
                    <button>Subscribe</button>
                 </div>

               </div>
            </div>

        </Footers>
    );}