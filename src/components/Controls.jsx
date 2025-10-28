import React from 'react';
import {
  calculateSpeed,
  calculateTotalDistance,
  calculateElapsedTime,
  calculateAverageSpeed,
} from '../utils/calculations';

const Controls = ({
  isPlaying,
  togglePlay,
  resetSimulation,
  currentPosition,
  currentIndex,
  routeData,
}) => {
  const prev = currentIndex > 0 ? routeData[currentIndex - 1] : null;
  const speed = calculateSpeed(prev, currentPosition);
  const totalDistance = calculateTotalDistance(routeData, currentIndex);
  const elapsedTime = calculateElapsedTime(routeData[0]?.timestamp, currentPosition.timestamp);
  const elapsedMs = new Date(currentPosition.timestamp) - new Date(routeData[0]?.timestamp);
  const avgSpeed = calculateAverageSpeed(totalDistance, elapsedMs);
  const progress = routeData.length ? ((currentIndex + 1) / routeData.length) * 100 : 0;

  return (
    <div
      className="
        fixed bottom-10 left-1/2 transform -translate-x-1/2
        bg-white/90 backdrop-blur-md border border-gray-200
        rounded-xl shadow-xl w-[95%] sm:w-[80%] md:w-[60%] lg:w-[45%]
        p-3 sm:p-4 z-[1000] transition-all duration-300
      "
    >
      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex justify-between text-[10px] sm:text-xs text-gray-700 mb-1">
          <span>Journey Progress</span>
          <span className="font-semibold text-blue-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-3">
        <Metric label="Speed" value={`${speed.toFixed(1)} km/h`} />
        <Metric label="Distance" value={`${totalDistance.toFixed(2)} km`} />
        <Metric label="Elapsed" value={elapsedTime} />
        <Metric label="Avg Speed" value={`${avgSpeed.toFixed(1)} km/h`} />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={togglePlay}
          className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-white font-semibold text-sm sm:text-base ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            }`}
        >
          {isPlaying ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetSimulation}
          className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-700 text-white rounded-lg text-sm sm:text-base hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const Metric = ({ label, value }) => (
  <div className="text-center bg-gray-50 rounded-lg p-2 sm:p-3">
    <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-semibold">{label}</div>
    <div className="text-sm sm:text-lg font-bold text-gray-800">{value}</div>
  </div>
);

export default Controls;