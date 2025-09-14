"use client"
import Link from 'next/link'
import {Tracking} from './styles'
import { useState } from 'react'


export default function TrackingID() {

const [trackingId, setTrackingId] = useState("")
  const [track, setTrack] = useState(null)
 const [packages, setPackages] = useState([])
 const [loading, setLoading] = useState(false)

  const handleTrack = () => {
     if (!trackingId) return alert("Please enter a tracking ID")

   setLoading(true)
   setTrack(null)
    setPackages([])

    fetch(`http://127.0.0.1:8000/tracking/${trackingId}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Invalid Tracking ID")
       return res.json()
      })
      .then((data) => {
       setTrack(data.track)
        setPackages(data.packages)
       })
       .catch((err) => alert(err.message))
      .finally(() => setLoading(false))
   }


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


              <div key={index}>
                <p>Latest Update: {pkg?.latest_update}</p>
                <p>Status: {pkg?.delivered_or_complain}</p>
                <p>Arrived Location: {pkg?.Arrived_location}</p>
                <p>Arrived Date: {pkg?.Arrived_location_date}</p>
              </div>









// components/TrackingID.tsx
// "use client"
// import { useState } from "react"

// export default function TrackingID() {

//   const [trackingId, setTrackingId] = useState("")
//   const [track, setTrack] = useState(null)
//   const [packages, setPackages] = useState([])
//   const [loading, setLoading] = useState(false)

//   const handleTrack = () => {
//     if (!trackingId) return alert("Please enter a tracking ID")

//     setLoading(true)
//     setTrack(null)
//     setPackages([])

//     fetch(`http://127.0.0.1:8000/tracking/${trackingId}/`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Invalid Tracking ID")
//         return res.json()
//       })
//       .then((data) => {
//         setTrack(data.track)
//         setPackages(data.packages)
//       })
//       .catch((err) => alert(err.message))
//       .finally(() => setLoading(false))
//   }

//   return { trackingId, setTrackingId, track, packages, loading, handleTrack }
// }







// "use client"
// import TrackingID from "@/components/TrackingID"

// export default function Home() {
//   const { trackingId, setTrackingId, handleTrack, track, packages, loading } = TrackingID()

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter tracking ID"
//         value={trackingId}
//         onChange={(e) => setTrackingId(e.target.value)}
//       />
//       <button onClick={handleTrack}>Track</button>

//       {loading && <p>Loading...</p>}

//       {track && (
//         <div>
//           <h2>Tracking ID: {track.tracking_id}</h2>
//           {packages.map((pkg, index) => (
//             <div key={index}>
//               <p>Latest Update: {pkg.latest_update}</p>
//               <p>Status: {pkg.delivered_or_complain}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
