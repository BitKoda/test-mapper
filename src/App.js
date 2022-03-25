import React, { useEffect, useState } from 'react';

// Data importing
import axios from 'axios';

// Leaflet imports
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
//import { Icon } from 'leaflet';

// CSS imports
import './App.css';

function App() {
  const [lon, setLon] = useState("-2.280786");
  const [lat, setLat] = useState("53.475617");
  const pcode = "M5+3AB";
  const url = `http://api.getthedata.com/postcode/${pcode}`;
  
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setLon(Number(response.data.data.longitude));
        setLat(Number(response.data.data.latitude));
      })
  }, [url]);
  
  return (
    <MapContainer center={[lat, lon]} zoom={20}>
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
      <Marker position={[lat, lon]}>
        <Popup>
          Data type: {typeof lat} <br /> 
          Post Code: {pcode}<br />
          Latitude: {lat} <br /> Longitude: {lon}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
