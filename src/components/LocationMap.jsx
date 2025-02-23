import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationMap() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Error getting location:", err);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    position ? (
      <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          url="process.env.SENSITIVE_VALUE_1"
          attribution='&copy; <a href="process.env.SENSITIVE_VALUE_2">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            You are here!
          </Popup>
        </Marker>
      </MapContainer>
    ) : (
      <p>Loading location...</p>
    )
  );
}

export default LocationMap;
