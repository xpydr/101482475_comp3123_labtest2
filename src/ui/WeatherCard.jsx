
import { useState } from "react";

// props.high props.low props.date

export default function WeatherCard(props) {
  

  return (
    <div className="border rounded p-1 max-w-fit">
      <h2 className="underline">{props.date}</h2>
      <div>
        <p>
          High: {props.hi}
        </p>
        <p>
          Low: {props.lo}
        </p>
      </div>
    </div>
  );
}
