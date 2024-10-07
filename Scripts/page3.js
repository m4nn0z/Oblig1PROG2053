function getData(link, city) {
    fetch(link)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error: " + response.status);
        }
        return response.json();
    })
    .then((data) => {
        let container = document.getElementById(city);

        // Empty the container so new data doesn't stack on top of eachother
        container.innerHTML = ""; 

        // Creates the html elements and adds content from the fetch
        const temperature = document.createElement("p");
        temperature.textContent = "Temperature: " + data.current_weather.temperature + "°C";

        const weathercode = document.createElement("p");
        weathercode.textContent = "Weathercode: " + data.current_weather.weathercode;

        const windDirection = document.createElement("p");
        windDirection.textContent = "Wind direction: " + data.current_weather.winddirection;

        const windSpeed = document.createElement("p");
        windSpeed.textContent = "Wind speed: " + data.current_weather.windspeed + "km/h";

        // Appends the content from the fetch to the html page
        container.appendChild(temperature);
        container.appendChild(weathercode);
        container.appendChild(windDirection);
        container.appendChild(windSpeed);
    })
}

// Calls the getData() function with specific API calls for each city
function getAllData() {
    getData("https://api.open-meteo.com/v1/forecast?latitude=59.9127&longitude=10.7461&current_weather=true", "oslo");
    getData("https://api.open-meteo.com/v1/forecast?latitude=53.3331&longitude=-6.2489&current_weather=true", "dublin");
    getData("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true", "london");
    getData("https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current_weather=true", "paris");
    getData("https://api.open-meteo.com/v1/forecast?latitude=54.3523&longitude=18.6491&current_weather=true", "gdansk");
}

getAllData();

// Gets new data every minute
setInterval(getAllData, 60000);