function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "2d4f050t38oe3346d712149ffb544a18";

  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);
