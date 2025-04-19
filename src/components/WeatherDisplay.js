import React from "react";

const WeatherDisplay = ({ temp }) => {
  return (
    <div>
      {temp.map((item, index) => (
        <div key={index}>
          <p>
            <span
              style={
                item.temperature > 20 ? { color: "red" } : { color: "blue" }
              }
            >
              {item.temperature}
            </span>
          </p>
          <p>{item.conditions}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;
