# 🚗 Vehicle Route Tracker
A modern, responsive **Vehicle Tracking Web App** built with **React** and **Leaflet.js**.  
It visualizes vehicle movement in **real-time** along a defined route, displaying **start & end points**, a **moving marker**, and **interactive floating controls** (start, reset, pause, etc.).

## 🧭 Features
✅ **Live Map Visualization** using Leaflet (OpenStreetMap)  
✅ **Animated Vehicle Marker** showing current position  
✅ **Start & End Points** with unique icons 🏁 🎯  
✅ **Traveled vs Remaining Path** visualization  
✅ **Floating Control Panel** like a video player (start, reset, pause, etc.)  
✅ **Fully Responsive UI** – works seamlessly on desktop & mobile  
✅ **Reusable Components** for easy expansion  

## 🗂️ Project Structure

src/
│
├── components/
│ ├── VehicleMap.jsx # Map rendering and marker visualization
│ ├── AnimatedMarker.jsx # Animated marker logic
│ ├── Controls.jsx # Floating control panel
│
├── utils/
│ ├── calculations.js # Helper functions (speed, distance, etc.)
│
├── assets/ # Optional icons or images
│
├── App.jsx # Main entry component
├── index.js # React entry point
└── styles/ # Custom CSS files for responsiveness

## ⚙️ Tech Stack
| Tech                 | Purpose                        |
|--------------------- |--------------------------------|
| **React.js**         | Frontend framework             |
| **Leaflet.js**       | Interactive maps               |
| **React-Leaflet**    | React bindings for Leaflet     |
| **CSS / Flexbox**    | Styling and responsive design  |
| **Vite**             | Fast build and dev environment |

## 🧩 Setup Instructions

### 1. Clone Repository
git clone https://github.com/yourusername/vehicle-route-tracker.git
cd vehicle-route-tracker
2. Install Dependencies
npm install
3. Start the App
npm run dev
4. Open in Browser
Visit 👉 http://localhost:5173

📱 Responsiveness
Desktop View: Floating control panel at the bottom of the screen.
Mobile View: The control panel automatically adjusts and floats slightly above the bottom bar for easy access.

🚀 Usage
Click Start to begin the vehicle movement animation.
Watch the vehicle travel along the red route path.
The gray path shows the full route.
Click Reset to restart the route animation.

🎨 UI Overview
🏁 Start Icon: Beginning of route
🎯 End Icon: Destination
🔴 Red Path: Traveled portion
⚪ Gray Path: Remaining portion
🎮 Floating Controls: Start / Reset / Pause / Resume

📦 Dependencies
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-leaflet": "^4.2.1",
  "leaflet": "^1.9.4"
}

🧠 Future Improvements
🛰️ Real-time GPS tracking via backend API
📍 Route upload from CSV/JSON
📊 Vehicle speed and distance dashboard
🕹️ Manual route playback control slider

🏁 Conclusion
This project demonstrates:
Efficient use of React + Leaflet for real-time geospatial visualization
Modern, mobile-friendly UI/UX design
Reusable component structure for scalability





