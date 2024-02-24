import React, { useState } from 'react'
import GoogleMap from './GoogleMap'
// import MapComponent from './MapComponent';
import './tes.css'

function Tester() {

    const [selectedLocation, setSelectedLocation] = useState({
        lat: 28.7041,
        lng: 77.1025,
      });
  return (
   <>

   {/* <GoogleMap/> */}

   <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap setSelectedLocation={setSelectedLocation} />
      {/* <MapComponent selectedLocation={selectedLocation} /> */}
    </div>
   
   
   
   
   </>
  )
}

export default Tester