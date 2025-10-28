import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import AnimatedMarker from './AnimatedMarker';
import Controls from './Controls';
import L from 'leaflet';

const INITIAL_CENTER = [17.385044, 78.486671];

const startIcon = L.divIcon({
  className: 'text-green-600 text-xl',
  html: '<span>🏁</span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const endIcon = L.divIcon({
  className: 'text-red-600 text-xl',
  html: '<span>🎯</span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

function VehicleMap({ routeData, currentIndex, currentPosition, isPlaying, togglePlay, resetSimulation }) {
  if (!routeData || routeData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 text-gray-600">
        No route data available
      </div>
    );
  }

  const fullRoute = routeData.map(p => [p.lat, p.lng]);
  const traveledRoute = routeData.slice(0, currentIndex + 1).map(p => [p.lat, p.lng]);
  const startPoint = [routeData[0].lat, routeData[0].lng];
  const endPoint = [routeData[routeData.length - 1].lat, routeData[routeData.length - 1].lng];

  return (
    <div className="relative h-screen w-full">
      <MapContainer center={INITIAL_CENTER} zoom={15} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline positions={fullRoute} pathOptions={{ color: 'gray', weight: 3, opacity: 0.6 }} />
        <Polyline positions={traveledRoute} pathOptions={{ color: 'red', weight: 5, opacity: 0.9 }} />

        <Marker position={startPoint} icon={startIcon}>
          <Popup>Start Point</Popup>
        </Marker>

        <Marker position={endPoint} icon={endIcon}>
          <Popup>End Point</Popup>
        </Marker>

        <AnimatedMarker position={[currentPosition.lat, currentPosition.lng]} />
      </MapContainer>

      {/* Floating Controls */}
      <Controls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        resetSimulation={resetSimulation}
        currentPosition={currentPosition}
        currentIndex={currentIndex}
        routeData={routeData}
      />
    </div>
  );
}

export default VehicleMap;