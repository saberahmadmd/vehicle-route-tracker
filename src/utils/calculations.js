export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  return Math.sqrt(dLat * dLat + dLon * dLon) * 111.32;
}

export function calculateSpeed(prev, curr) {
  if (!prev || !curr) return 0;
  const dist = calculateDistanceKm(prev.lat, prev.lng, curr.lat, curr.lng);
  const timeH = (new Date(curr.timestamp) - new Date(prev.timestamp)) / 3600000;
  return timeH > 0 ? dist / timeH : 0;
}

export function calculateTotalDistance(data, index) {
  let dist = 0;
  for (let i = 1; i <= index; i++) {
    dist += calculateDistanceKm(data[i - 1].lat, data[i - 1].lng, data[i].lat, data[i].lng);
  }
  return dist;
}

export function calculateElapsedTime(start, end) {
  if (!start || !end) return '--:--:--';
  const diff = (new Date(end) - new Date(start)) / 1000;
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = Math.floor(diff % 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function calculateAverageSpeed(dist, ms) {
  const hrs = ms / 3600000;
  return hrs > 0 ? dist / hrs : 0;
}