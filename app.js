// 6170a35b49084c29a8770835250301 api key

async function getWeather() {
  let temp = document.getElementById("temp");
  let wind = document.getElementById("wind");
  let feels = document.getElementById("feels");
  let loc = document.getElementById("loc");
  let humi = document.getElementById("humi");
  let icon = document.getElementById("icon");
//   let reg = document.getElementById("reg");
  let input = document.getElementById("input").value;
  let url =
    "http://api.weatherapi.com/v1/current.json?key=3ba69b4cafcc48c0aca75139250301&q=" +
    input;
  let response = await fetch(url);
  let data = await response.json();

  temp.innerHTML = "Temprature : " +  data.current.temp_c + " °C";
  wind.innerHTML = "Wind : " +  data.current.wind_kph + " km/h";
  feels.innerHTML = "Feels like : " +  data.current.feelslike_c + " °C";
  humi.innerHTML = "Humidity : "+ data.current.humidity + " %";
  loc.innerHTML = "City : " + data.location.name;
//   reg.innerHTML = "Province : " + data.location.region;
  icon.src = data.current.condition.icon;
}
let btn = document.getElementById("btn");
function search() {
  getWeather();
  let weather = document.getElementById("weather");
  weather.classList.remove("hide");
}

// {
// country :  "Pakistan"
// lat :  30.1872
// localtime :  "2025-01-03 13:01"
// localtime_epoch :  1735891270
// lon :  67.0125
// name :  "Quetta"
// region :  "Balochistan"
// tz_id :  "Asia/Karachi"
// feelslike_c :  21.3
// humidity :  29
// temp_c :  21.3
// wind_kph : 7.2
// code: 1153
// icon : "//cdn.weatherapi.com/weather/64x64/day/266.png"
// text : "Light drizzle"
//}
