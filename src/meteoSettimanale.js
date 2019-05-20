import React from "react";
import "./styles.css";
import { leggeMeteoSettimanale } from "./utils";

const api_key = "c689571660374f97823214424191705";

class MeteoSettimanale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datiTempo: [],
      lat: 0,
      lon: 0
    };
    navigator.geolocation.getCurrentPosition(
      this.showPosition.bind(this),
      this.showError.bind(this)
    );
  }

  async showPosition(position) {
    this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
    let data = await leggeMeteoSettimanale(
      api_key,
      this.state.lat,
      this.state.lon
    );
    console.log("Dati Forecast", data);
    this.setState({
      datiTempo: data.data.weather
    });
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
      default:
        console.log("Default Error");
    }
  }

  ImageTempo = value => {
    switch (value) {
      case "Moderate rain at times":
      case "Moderate or heavy rain shower":
      case "Light rain shower":
      case "Patchy rain possible": {
        // console.log("Piove")
        return (
          <div>
            <img
              className="weather"
              src="https://i.ibb.co/X5Rb2hN/Combined-Shape.png"
              alt="Temporale"
            />
          </div>
        );
      }
      case "Partly cloudy":
      case "Cloudy": {
        // console.log("Nuvoloso")
        return (
          <div>
            <img
              className="oval-1"
              src="https://i.ibb.co/yXJx4XT/Nuvoloso.png"
              alt="Nuvoloso"
            />
          </div>
        );
      }
      case "Sunny": {
        // console.log("Soleggiato")
        return (
          <div>
            <img
              className="weather"
              src="https://i.ibb.co/51vhdfh/Clear.png"
              alt="Sereno"
            />
          </div>
        );
      }
      default:
    }
  };

  getDataGiorno(value) {
    var d = new Date(value);
    var dayName = d.toString().split(" ")[0];
    var n = new Date(value);
    var numberDate = n.getDate();
    // console.log(dayName);
    return [dayName, " ", numberDate];
  }

  render() {
    return (
      <div style={{ padding: "0.5em 3em" }}>
        <div className="rectangle">
          {this.state.datiTempo.map(element => (
            <div className="rectangleInvisible">
              <div name="data" className="data">
                {this.getDataGiorno(element.date)}
              </div>
              <div>
                {this.ImageTempo(element.hourly[0].weatherDesc[0].value)}
              </div>
              <div className="data">
                {element.maxtempC}°-{element.mintempC}°
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MeteoSettimanale;
