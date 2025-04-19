import React,{useState} from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";


const App = () => {
  const [temp] = useState([ {temperature: 25, conditions: "Sunny"} ]);
  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay temp={temp} />
    </div>
  );
};

export default App;
