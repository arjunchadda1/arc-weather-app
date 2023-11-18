const apiKey = '183cff377bc4e666c391d108ca6d4c27'; // Replace with your actual API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const cityName = prompt('Enter city name:');
    if (!cityName) return;

    const url = `${apiUrl}?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
