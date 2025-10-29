import React, { useState, useEffect, useRef } from 'react';
import VehicleMap from './components/VehicleMap';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  const [routeData, setRouteData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch('/dummy-route.json');
        const data = await res.json();
        setRouteData(data.map(p => ({
          lat: p.latitude,
          lng: p.longitude,
          timestamp: p.timestamp,
        })));
      } catch (err) {
        console.error('Error loading route:', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (isPlaying && routeData.length > 0 && currentIndex < routeData.length - 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          const next = prev + 1;
          if (next >= routeData.length - 1) setIsPlaying(false);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentIndex, routeData]);

  const currentPosition = routeData[currentIndex] || { lat: 0, lng: 0, timestamp: '' };
  const togglePlay = () => setIsPlaying(p => !p);
  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100 text-lg font-medium">
        Loading route data...
      </div>
    );
  }

  return (
    <VehicleMap
      routeData={routeData}
      currentIndex={currentIndex}
      currentPosition={currentPosition}
      isPlaying={isPlaying}
      togglePlay={togglePlay}
      resetSimulation={resetSimulation}
    />
  );
}

export default App;
