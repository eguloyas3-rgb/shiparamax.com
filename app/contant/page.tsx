"use client"
import {Cntacts} from '../styles'

import Mycontact from "next/image";



export default function Contact() {


    return(
        <Cntacts> 
            <Mycontact src="/image/contact.jpg" alt="contact" className="image" fill />
            
            <div className='contactsupt'>
            <button> Contact support </button>
</div>

            <div className='contactform'>
                <form action="">
                    <h1>Contact Us</h1>
                  <div>
                    <input type="text" name="" id="" placeholder='Fullname'/>
                  </div>
                  <div>
                    <input type="text" name="" id="" placeholder='Email address'/>
                  </div>
                  <div>
                    <textarea name="" id="" placeholder='Enter your message....'></textarea>
                  </div>

                  <div className='sendmess'>
                    <button>Send</button>
                  </div>
                </form>
            </div>

         


        </Cntacts>
    );
}