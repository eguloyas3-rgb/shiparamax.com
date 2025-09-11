"use client"
import B from "next/image";
import Brna from "next/image";
import Brn from "next/image";
import Brnad from "next/image";
import Br from "next/image";
import {Fedes} from './styles'


export default function Fedex(){
    return(
        <Fedes>
      <div className="mainotthercourir">
              <div className="otthercourir">
        <div>
         <B src="/image/brnad_logo01.png" alt="DHL" width={100} height={50}  priority />
        </div>
        <div>
         <Brna src="/image/brnad_logo02.png" alt="DHL" width={100} height={50}  priority />
        </div>
        <div>
         <Brn src="/image/brnad_logo03.png" alt="DHL" width={100} height={50}  priority />
        </div>
        <div>
         <Brnad src="/image/brnad_logo04.png" alt="DHL" width={100} height={50}  priority />
        </div>
        <div>
         <Br src="/image/brnad_logo05.png" alt="DHL" width={100} height={50}  priority />
        </div>

      </div>
      </div>
      </Fedes>
    )
}