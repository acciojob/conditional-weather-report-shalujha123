import React from "react";

const WeatherDisplay = ({ weather }) => {
  return (
    <div>
      <p>
        <span
          style={weather.temperature > 20 ? { color: "red" } : { color: "blue" }}
        >
          Temperature: {weather.temperature}
        </span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
