
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog, WiThunderstorm } from 'weather-icons-react';

export default function WeatherCard(props) {

  return (
    <>
      <div className="border rounded p-1 max-w-fit">
        <h2 className="underline">{props.date}</h2>
          <p className='text-4xl'>{getWeatherIcon(props.iconCode)}</p>
        <div>
          <p>
            High: {props.hi}°
          </p>
          <p>
            Low: {props.lo}°
          </p>
        </div>
      </div>
    </>
  );
}

const getWeatherIcon = (code) => {
  if (code === 0) return <WiDaySunny />;
  if (code >= 1 && code <= 3) return <WiCloud />;
  if ([51, 53, 55, 61, 63, 65].includes(code)) return <WiRain />;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <WiSnow />;
  if ([45, 48].includes(code)) return <WiFog />;
  if ([95, 96, 99].includes(code)) return <WiThunderstorm />;
  return <WiCloud />;
}
