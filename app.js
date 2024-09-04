document.getElementById('refresh-button').addEventListener('click', fetchWeatherData);

async function fetchWeatherData() {
    try {
        const response = await fetch('https://localhost:5001/api/weather');
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    const weatherDataContainer = document.getElementById('weather-data');
    weatherDataContainer.innerHTML = '';

    data.forEach(item => {
        const weatherItem = document.createElement('div');
        weatherItem.textContent = `${item.parameter}: ${item.value}`;
        weatherDataContainer.appendChild(weatherItem);
    });
}

// Fetch data on initial load
fetchWeatherData();
