# COMP3123 Lab Test 2 – Weekly Weather Forecast App  
**Student ID:** 101482475

A simple, responsive React weather application that displays a 7-day forecast using the **Open-Meteo** public API. Users can enter any latitude and longitude to retrieve the weekly high/low temperatures and a basic weather icon for each day.

## Features
- 7-day daily forecast (maximum and minimum temperature)
- Weather condition icons powered by `weather-icons-react`
- Real-time location input via latitude and longitude
- Built with React 18, Vite, Tailwind CSS (v4), and the official Open-Meteo SDK
- Fully responsive and minimal UI

## Technologies Used
- **React** ^18.3.1
- **Vite** ^7.2.4 (build tool)
- **Tailwind CSS** ^4.1.17 (styling)
- **Axios** ^1.13.2 (HTTP requests)
- **openmeteo** ^1.2.2 (Open-Meteo API client)
- **weather-icons-react** ^1.2.0 (weather icons)

## Project Structure
src/
├── App.jsx               # Root component
├── WeatherApp.jsx        # Main logic and forecast fetching
├── ui/
│   └── WeatherCard.jsx   # Individual day card with icon mapping
└── index.css             # Tailwind imports


## Setup Instructions

### Prerequisites
- Node.js ≥ 18.x
- npm

### 1. Clone or download the project
```bash
git clone <your-repository-url>
cd 101482475_comp3123_labtest2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
- The application will be available at http://localhost:5173 (or the port shown in the terminal)


## Usage

- 1. Open the app in your browser.
- 2. The default location is set to approximately Brantford, Ontario (43.1424, -80.2713).
- 3. Replace the latitude and longitude values in the input fields with any coordinates you wish to check.
- 4. The forecast updates automatically when the inputs change (thanks to the useEffect dependency on the constructed URL).

### API
- This project uses the free Open-Meteo API (https://api.open-meteo.com/v1/forecast) – no API key required.

### Notes
- Temperature values are returned in Celsius by default (Open-Meteo behaviour for most coordinates).

### License
- This project is for academic evaluation purposes only.
