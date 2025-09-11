"use client"
import {Aboutus} from '../styles'
import Imag from 'next/image';



export default function Faq(){

    return(
     <Aboutus>
     <Imag src="/image/background.jpg" alt="background" fill  priority className='background' />
       
       <div className='aboutus'>
         <h1>ABOUT US</h1>
       </div>

       <div className="mainabout">
        <div>
            <img src="" alt="" />
        </div>

        <div className="aboutwriteup">
            
        </div>
       </div>


      
     </Aboutus>
    );
}