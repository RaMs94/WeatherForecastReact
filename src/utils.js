import React from 'react';

export async function leggeMeteo(entita, lat, lon, api_key) {
  let str = `https://api.openweathermap.org/data/2.5/${entita}?lat=${lat}&lon=${lon}&appid=${api_key}`;
  let ris;
  await fetch(
    str
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      ris = data;
    })
    .catch(e => console.log("error", e));
  return ris;
}

export async function leggeMeteoSettimanale(lat, lon, api_key) {
  let str = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${api_key}&q=${lat},${lon}&format=json&num_of_days=7&tp=24`;
  let ris;
  await fetch(
    str
  )
  .then(response => {
    return response.json()
  })
  .then(data => {
    ris = data;
  })
  .catch(e => console.log("error", e));
  return ris;
}


export const ImageTempo = (CondTempo) => {
  switch (CondTempo) {
    case "Moderate rain at times":
    case "Moderate or heavy rain shower":
    case "Light rain shower":
    case "Patchy rain possible": {
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
    case "Clear": {
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
}

export const ImageTempo1 = (CondTempo1) => {
  switch (CondTempo1) {
    case "Moderate rain at times":
    case "Moderate or heavy rain shower":
    case "Light rain shower":
    case "Patchy rain possible": {
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
    case "Clear": {
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
}

export const ImageTempo2 = (CondTempo2) => {
  switch (CondTempo2) {
    case "Moderate rain at times":
    case "Moderate or heavy rain shower":
    case "Light rain shower":
    case "Patchy rain possible": {
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
    case "Clear": {
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
}

export const ImageTempo3 = (CondTempo3) => {
  switch (CondTempo3) {
    case "Moderate rain at times":
    case "Moderate or heavy rain shower":
    case "Light rain shower":
    case "Patchy rain possible": {
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
    case "Clear": {
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
}

export const ImageTempo4 = (CondTempo4) => {
  switch (CondTempo4) {
    case "Moderate rain at times":
    case "Moderate or heavy rain shower":
    case "Light rain shower":
    case "Patchy rain possible": {
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
    case "Clear": {
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
}

export const ImageTempo5 = (CondTempo5) => {
  switch (CondTempo5) {
    case "Moderate rain at times":
    case "Moderate or heavy rain shower":
    case "Light rain shower":
    case "Patchy rain possible": {
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
    case "Clear": {
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
}

export const ImageTempo6 = (CondTempo6) => {
  switch (CondTempo6) {
    case "Moderate rain at times":
    case "Moderate or heavy rain shower":
    case "Light rain shower":
    case "Patchy rain possible": {
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
    case "Clear": {
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
}