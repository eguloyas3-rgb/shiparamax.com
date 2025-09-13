"use client"
import {Headerss} from './styles'
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";






export default function Header() {


    return(
        <Headerss>
            <div className='main'>

                <div>

                   <div className='left' >
                    <div className='phonecontact'>
                        <span><BiSupport /></span>
                    <span>+1 725 - 304 (5857)</span>
                   
                    </div>
                    <span>|</span>
                    <div className='emailcontact'>
                    <span><MdOutlineEmail/></span>
                    <span>supporrt@disparchecer</span>
                    </div>
                   </div>
                   <div className='address'>
                    <span><IoLocationSharp /></span>
                    <span> 2 Woodward Ave, Rm 644, Detroit, MI 48226</span>
                   </div>
                </div>

                <div className='right'>
                    <span>Follow us:</span>
                    <span>< FaFacebookF/></span>
                    <span><FaXTwitter /></span>
                    <span>< FaPinterestP/></span>
                    <span><FaLinkedinIn /></span>
                </div>
                
            </div>
        </Headerss>
    );}