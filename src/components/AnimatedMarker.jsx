import React, { useEffect, useRef } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

const vehicleIcon = L.divIcon({
  className: 'text-2xl',
  html: '<span class="text-red-600">🚗</span>',
  iconSize: [24, 24],
});

function AnimatedMarker({ position, duration = 800 }) {
  const markerRef = useRef(null);
  const map = useMap();

  useEffect(() => {
    if (markerRef.current && position) {
      const marker = markerRef.current;
      const start = marker.getLatLng();
      const end = L.latLng(position);
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const lat = start.lat + (end.lat - start.lat) * progress;
        const lng = start.lng + (end.lng - start.lng) * progress;
        marker.setLatLng([lat, lng]);
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      map.panTo(end, { animate: true, duration: 0.5 });
    }
  }, [position, duration, map]);

  return <Marker ref={markerRef} position={position} icon={vehicleIcon} />;
}

export default AnimatedMarker;