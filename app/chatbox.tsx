"use client"
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import {Chatlive} from './styles'



export default function Chatbox() {

    return(
        <Chatlive className="chatwhatsap">
         <Link href='https://wa.link/nv476w' target="_blank">
         <BsWhatsapp />
         </Link>
        </Chatlive>
    );
}