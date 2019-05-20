import React, { Component } from "react";
import ReactDOM from "react-dom";
import Meteo from "./meteo";
import MeteoSettimanale from "./meteoSettimanale";
import { leggeMeteo } from "./utils";
import "./styles.css";

const api_key = "fd415ab5b99861cdb71c052568fb325b";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      weatherMain: [],
      temp: [],
      humidity: [],
      pressure: [],
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
    let data = await leggeMeteo(
      "weather",
      this.state.lat,
      this.state.lon,
      api_key
    );
    console.log("Dati Weather", data);
    this.setState({
      name: data.name,
      weatherMain: data.weather[0].main,
      temp: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure
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

  rendermap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB96jyQzkw_52SG8q9gXOuoJFbtYPFgLJg&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.state.lat, lng: this.state.lon },
      zoom: 15
    });
    var marker = new window.google.maps.Marker({
      position: { lat: this.state.lat, lng: this.state.lon },
      map: map,
      title: "Ti trovi qui!"
    });
    marker.setMap(map);
  };

  componentDidMount() {
    this.rendermap();
  }

  render() {
    return (
      <div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Meteo dati={this.state} />
              <MeteoSettimanale />
            </div>
            <div className="flip-card-back">
              <div id="map" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
