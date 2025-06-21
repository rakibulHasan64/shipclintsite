import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
   iconUrl: markerIcon,
   iconRetinaUrl: markerIcon2x,
   shadowUrl: markerShadow,
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34],
   shadowSize: [41, 41],
});

function BangladeshMap({ serviesCenter }) {
   return (
      <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
         <MapContainer
            center={[23.6850, 90.3563]}
            zoom={7}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
         >
            <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviesCenter.map((district, index) => (
               <Marker
                  key={index}
                  position={[district.latitude, district.longitude]}
                  icon={customIcon}
               >
                  <Popup>
                     <div>
                        <strong>{district.district}</strong><br />
                        City: {district.city}<br />
                        Areas: {district.covered_area.join(', ')}
                     </div>
                  </Popup>
               </Marker>
            ))}
         </MapContainer>
      </div>
   );
}

export default BangladeshMap;
