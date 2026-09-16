const apiKey = "76365358b2a5cd215d7ce03243621be7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const icons = {
    Clouds: "clouds.png",
    Rain: "rain.png",
    Drizzle: "drizzle.png",
    Mist: "mist.png",
    Clear: "clear.png",
    Snow: "snow.png",
}; 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appId=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".degrees").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    weatherIcon.src = "./assets/images/" + (icons[data.weather[0].main] 
        || "clear.png"); 
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

