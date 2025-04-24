function weatherApp() {
  let cityName = document.querySelector("#cityName").value;
  console.log(cityName);
  let API_KEY = "88952da22c6885902b0c639e423c1c87";
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    )
    .then(function (response) {
      console.log(response);
      document.querySelector("#temp").innerHTML = `${response.data.main.temp} &degC`;
      // document.querySelector("#humidity").innerHTML = `Humidity ${response.data.main.humidity} %`;
      let sunriseUnix = response.data.sys.sunrise;
      let sunriseDate = new Date(sunriseUnix * 1000);
      let localSunriseTime = sunriseDate.toLocaleTimeString();
      let sunsetUnix = response.data.sys.sunset;
      let sunsetDate = new Date(sunsetUnix * 1000);
      let localSunsetTime = sunsetDate.toLocaleTimeString();
      document.querySelector("#sunRise").innerHTML = `Sunrise: ${localSunriseTime}`;
      document.querySelector("#sunSet").innerHTML = `SunSet: ${localSunsetTime}`;
      document.querySelector("#countryName").innerHTML = `Country:${response.data.sys.country}`;
      document.querySelector("#LocalClock").innerHTML = `Local Time:${response.data.timezone}`;
      // Weather Condition and Wallpaper Handling
      let WeatherCondition = response.data.weather[0].main.toLowerCase(); // convert to lowercase for easier comparison
      document.querySelector("#condition").innerHTML =`Weather Condition: ${WeatherCondition}`;
      document.body.classList.remove("rain", "clouds", "clear", "default")
      if (WeatherCondition === "rain"){
        document.body.classList.add("rain")
      }
        else if(WeatherCondition ==="clouds")
          {
            document.body.classList.add("clouds")
        }
  else if (WeatherCondition === "clear"){
    document.body.classList.add("clear")
  }
  // else if (WeatherCondition === "haze"){
  //   document.body.classList.add("haze")
  // }
       else{
        document.body.classList.add("default")
       }
    })
    .catch(function (error) {
      document.querySelector("#temp").innerHTML = "Invalid City";
      document.querySelector("#humidity").innerHTML = "Something Went Wrong";
      document.querySelector("#sunRise").innerHTML = "Something Went Wrong";
      document.querySelector("#sunSet").innerHTML = "Something Went Wrong";
      document.querySelector("#LocalClock").innerHTML = "Something Went Wrong";
      document.querySelector("#condition").innerHTML = "Something Went Wrong";
    });
}
function time() {
  let currTime = moment().format('LTS');
document.getElementById("clock").textContent=currTime;
}
time()
setInterval(time , 1000)