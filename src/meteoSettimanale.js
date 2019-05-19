import React, { Component } from "react";
import "./styles.css";
import { leggeMeteoSettimanale } from "./utils";
import { ImageTempo, ImageTempo1, ImageTempo2 } from './utils';

const api_key = "c689571660374f97823214424191705";

class MeteoSettimanale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      maxtempC1: [],
      mintempC1: [],
      maxtempC2: [],
      mintempC2: [],
      maxtempC3: [],
      mintempC3: [],
      maxtempC4: [],
      mintempC4: [],
      maxtempC5: [],
      mintempC5: [],
      maxtempC6: [],
      mintempC6: [],
      maxtempC7: [],
      mintempC7: [],
      date1: [],
      date2: [],
      date3: [],
      date4: [],
      date5: [],
      date6: [],
      date7: [],
      condizione1: [],
      condizione2: [],
      condizione3: [],
      condizione4: [],
      condizione5: [],
      condizione6: [],
      condizione7: [],
      lat: 0,
      lon: 0,
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
      this.state.lat,
      this.state.lon,
      api_key,
    );
    console.log("Dati Forecast", data);
    this.setState({
      maxtempC0: data.data.weather[0].maxtempC,
      mintempC0: data.data.weather[0].mintempC,
      maxtempC1: data.data.weather[1].maxtempC,
      mintempC1: data.data.weather[1].mintempC,
      maxtempC2: data.data.weather[2].maxtempC,
      mintempC2: data.data.weather[2].mintempC,
      maxtempC3: data.data.weather[3].maxtempC,
      mintempC3: data.data.weather[3].mintempC,
      maxtempC4: data.data.weather[4].maxtempC,
      mintempC4: data.data.weather[4].mintempC,
      maxtempC5: data.data.weather[5].maxtempC,
      mintempC5: data.data.weather[5].mintempC,
      maxtempC6: data.data.weather[6].maxtempC,
      mintempC6: data.data.weather[6].mintempC,


      date1: data.data.weather[0].date,
      date2: data.data.weather[1].date,
      date3: data.data.weather[2].date,
      date4: data.data.weather[3].date,
      date5: data.data.weather[4].date,
      date6: data.data.weather[5].date,
      date7: data.data.weather[6].date,

      condizione1: data.data.weather[0].hourly[0].weatherDesc[0].value,
      condizione2: data.data.weather[1].hourly[0].weatherDesc[0].value,
      condizione3: data.data.weather[2].hourly[0].weatherDesc[0].value,
      condizione4: data.data.weather[3].hourly[0].weatherDesc[0].value,
      condizione5: data.data.weather[4].hourly[0].weatherDesc[0].value,
      condizione6: data.data.weather[5].hourly[0].weatherDesc[0].value,
      condizione7: data.data.weather[6].hourly[0].weatherDesc[0].value,


    });
    console.log("setStateForecast", this.state)

    this.setState({
      array: [{ "meteo": this.state.condizione1 }, { "meteo": this.state.condizione2 }, { "meteo": this.state.condizione3 }, { "meteo": this.state.condizione4 }, { "meteo": this.state.condizione5 }, { "meteo": this.state.condizione6 }]
    })
    console.log("Test Array", this.state.array);
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



  render() {

    const CondTempo = this.state.condizione1;
    const CondTempo1 = this.state.condizione2;
    const CondTempo2 = this.state.condizione3;
    const CondTempo3 = this.state.condizione4;
    const CondTempo4 = this.state.condizione5;
    const CondTempo5 = this.state.condizione6;
    const CondTempo6 = this.state.condizione7;



    var d = new Date(this.state.date2);
    var dayName = d.toString().split(' ')[0];

    var d1 = new Date(this.state.date3);
    var dayName1 = d1.toString().split(' ')[0];

    var d2 = new Date(this.state.date4);
    var dayName2 = d2.toString().split(' ')[0];

    var d3 = new Date(this.state.date5);
    var dayName3 = d3.toString().split(' ')[0];

    var d4 = new Date(this.state.date6);
    var dayName4 = d4.toString().split(' ')[0];

    var d5 = new Date(this.state.date5);
    var dayName5 = d5.toString().split(' ')[0];

    var d6 = new Date(this.state.date5);
    var dayName6 = d6.toString().split(' ')[0];

    var n = new Date(this.state.date2);
    var numberDate = n.getDate();

    return (
      <div style={{ padding: "0.5em", display: '-webkit-box' }}>
        <div className="rectangle">
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="day">{dayName} {numberDate}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }}>{ImageTempo(CondTempo)}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="data"> {this.state.maxtempC0}° - {this.state.mintempC0}°</div>
        </div>

        <div className="rectangleInvisible">
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="day">{dayName1} {numberDate + 1}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }}>{ImageTempo1(CondTempo1)}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="data"> {this.state.maxtempC1}° - {this.state.mintempC1}°</div>
        </div>

        <div className="rectangleInvisible">
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="day">{dayName2} {numberDate + 2}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }}>{ImageTempo2(CondTempo2)}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="data"> {this.state.maxtempC2}° - {this.state.mintempC2}°</div>
        </div>

        <div className="rectangleInvisible">
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="day">{dayName3} {numberDate + 3}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }}>{ImageTempo1(CondTempo3)}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="data"> {this.state.maxtempC3}° - {this.state.mintempC3}°</div>
        </div>

        <div className="rectangleInvisible">
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="day">{dayName4} {numberDate + 4}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }}>{ImageTempo1(CondTempo4)}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="data"> {this.state.maxtempC4}° - {this.state.mintempC4}°</div>
        </div>

        <div className="rectangleInvisible">
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="day">{dayName5} {numberDate + 5}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }}>{ImageTempo1(CondTempo5)}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="data"> {this.state.maxtempC5}° - {this.state.mintempC5}°</div>
        </div>

        <div className="rectangleInvisible">
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="day">{dayName6} {numberDate + 6}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }}>{ImageTempo1(CondTempo6)}</div>
          <div style={{ textAlign: 'center', padding: '0.5em' }} className="data"> {this.state.maxtempC6}° - {this.state.mintempC6}°</div>
        </div>
      </div>
    );
  }
}

export default MeteoSettimanale;
