export async function leggeMeteo(entita, lat, lon, api_key) {
  let str = `https://api.openweathermap.org/data/2.5/${entita}?lat=${lat}&lon=${lon}&appid=${api_key}`;
  let ris;
  await fetch(str)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      ris = data;
    })
    .catch(e => console.log("error", e));
  return ris;
}

