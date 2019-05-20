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

export async function leggeMeteoSettimanale(api_key, lat, lon) {
  let str = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${api_key}&q=${lat},${lon}&format=json&num_of_days=7&tp=24`;
  let ris;
  await fetch(str)
    .then(response => response.json())
    .then(data => {
      ris = data;
    })
    .catch(e => console.log("error", e));
  return ris;
}
