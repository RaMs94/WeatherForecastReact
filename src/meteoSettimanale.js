import React from "react";
import "./styles.css";

const api_key = "c689571660374f97823214424191705";

class MeteoSettimanale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datiTempo: [],
      lat: this.props.dati.lat,
      lon: this.props.dati.lon
    };
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
      case "Partly cloudy": {
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

  leggeMeteoSettimanale() {
    let str = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${api_key}&q=${this.state.lat},${this.state.lon}&format=json&num_of_days=7&tp=24`;
    let ris;
    fetch(str)
      .then(response => response.json())
      .then(data => {
        this.setState({
          datiTempo: data.data.weather
        });
        console.log("Dati Forecast", data);
        console.log("Dati Tempo", this.state.datiTempo);
      })
      .catch(e => console.log("error", e));
    return ris;
  }

  componentDidMount() {
    this.leggeMeteoSettimanale();
  }

  render() {
    return (
      <div style={{padding: "0.5em 3em"}}>
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
