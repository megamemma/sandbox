const apiKey = "76365358b2a5cd215d7ce03243621be7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const mainInfo = document.querySelector(".main-info");
const weatherStats = document.querySelector(".weather-stats");
const icons = {
    Clouds: "clouds.png",
    Rain: "rain.png",
    Drizzle: "drizzle.png",
    Mist: "mist.png",
    Clear: "clear.png",
    Snow: "snow.png",
}; 
const toast = document.querySelector(".toast");


function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    mainInfo.classList.add("hidden");
    weatherStats.classList.add("hidden");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    
    if(!response.ok) {
        showToast("City not found");
        return; 
    }

    mainInfo.classList.remove("hidden");
    weatherStats.classList.remove("hidden");

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

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkWeather(searchBox.value);
    }
})

 