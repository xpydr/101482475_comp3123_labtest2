
import { useState, useEffect } from 'react';
import axios from "axios";
import WeatherCard from './ui/WeatherCard';

export default function WeatherApp() {

  const [latitude, setLatitude] = useState(43.142357);
  const [longitude, setLongitude] = useState(-80.27127);
  const [forecast, setForecast] = useState([]);

  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=7&timezone=auto`;

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(URL);
      const daily = res.data.daily;
      const parsed = daily.time.map((time, i) => ({
        date: time,
        hi: daily.temperature_2m_max[i],
        lo: daily.temperature_2m_min[i],
        code: daily.weathercode[i]
      }));
      console.log(parsed)
      setForecast(parsed);
    }
    fetchData();
  }, [URL]);

  return (
    <>
      <div className='border rounded p-12'>
        <div className='flex gap-2'>
          <h1>Weekly Forecast for</h1>
          <input type='number' placeholder='Latitude' value={latitude}
            onChange={(e) => setLatitude(e.target.value)} className='border rounded' />
          <input type='number' placeholder='Longitude' value={longitude}
            onChange={(e) => setLongitude(e.target.value)} className='border rounded' />
        </div>

        <div className='my-8 flex gap-4'>
          {forecast.map((day, i) => (
            <WeatherCard key={i} date={day.date} hi={day.hi} lo={day.lo} iconCode={day.code} />
          ))}
        </div>
      </div>
    </>
  );
}
