// Purpose: To get the weather of the city entered by the user.
async function getWeather() {
  let temp = document.getElementById("temp"); // getting the element by id
  let wind = document.getElementById("wind"); // getting the element by id
  let feels = document.getElementById("feels"); // getting the element by id
  let loc = document.getElementById("loc"); // getting the element by id
  let humi = document.getElementById("humi");  // getting the element by id
  let icon = document.getElementById("icon"); // getting the element by id
  const apiKey = "3ba69b4cafcc48c0aca75139250301"; // api key
  let input = document.getElementById("input").value; // getting the value of the input field
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input},Pakistan&aqi=yes`; // api url
  let response = await fetch(url); // fetching the data from the api
  let data = await response.json(); // converting the data into json

  temp.innerHTML = "Temprature : " + data.current.temp_c + " °C"; // setting the value of the temp element to the temp of the city
  wind.innerHTML = "Wind : " + data.current.wind_mph + " Km/h"; // setting the value of the wind element
  feels.innerHTML = "Feels like : " + data.current.feelslike_c + " °C"; // setting the value of the feels element
  humi.innerHTML = "Humidity : " + data.current.humidity + " %";  // setting the value of the humi element
  loc.innerHTML = "City : " + data.location.name;  // setting the value of the loc element
  icon.src = data.current.condition.icon; // setting the value of the icon element
}
let btn = document.getElementById("btn"); // getting the element by id
function search() { // function
  getWeather(); // calling the getWeather function
  let weather = document.getElementById("weather"); // getting the element by id
  weather.classList.remove("hide"); // removing the hide class from the weather element
} // end of function
 

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

