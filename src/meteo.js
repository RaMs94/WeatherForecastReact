import React from "react";
import "./styles.css";

// const api_key = "8b4a1cfe7b37f251dcce8b232975fd6d";

const Meteo = ({ dati }) => {
  const CondTempo = dati.weatherMain;
  const ImageTempo = () => {
    switch (CondTempo) {
      case "Thunderstorm": {
        console.log("Thunderstorm");
        return (
          <div>
            <img
              className="TempoAttuale"
              src="https://i.ibb.co/X5Rb2hN/Combined-Shape.png"
              alt="Temporale"
            />
          </div>
        );
      }
      case "Rain": {
        console.log("Rain");
        return (
          <div>
            <img
              className="TempoAttuale"
              src="https://i.ibb.co/X5Rb2hN/Combined-Shape.png"
              alt="Pioggia"
            />
          </div>
        );
      }
      case "Clouds": {
        console.log("Thunderstorm");
        return (
          <div>
            <img
              className="TempoAttuale"
              src="https://i.ibb.co/JyFjkVk/Nuvoloso.png"
              alt="Nuvoloso"
            />
          </div>
        );
      }
      case "Clear": {
        console.log("Clear");
        return (
          <div>
            <img
              className="TempoAttuale"
              src="https://i.ibb.co/51vhdfh/Clear.png"
              alt="Sereno"
            />
          </div>
        );
      }
      default:
    }
  };
  //da Kelvin a Celsius
  var TempCelsius = 0;
  let TempKelvin = dati.temp;
  const DiffCelsius = 273.15;
  TempCelsius = parseInt(TempKelvin - DiffCelsius, 10);

  return (
    <div>
      <div style={{ display: "-webkit-inline-box" }}>
        <img
          className="marker"
          src="https://i.ibb.co/DGkyvSb/marker.png"
          alt="marker"
        />
        <h1 className="rome">{dati.name}</h1>
      </div>
      <h1 className="TempoAttuale">{ImageTempo(dati.weatherMain)}</h1>
      <h1 className="Temperatura">{TempCelsius}°</h1>
      <h4 className="feels-like">Feels like: {TempCelsius}°</h4>
      <h4 className="humidity">Humidity: {dati.humidity}%</h4>
      <div className="divider" />
    </div>
  );
};

export default Meteo;
