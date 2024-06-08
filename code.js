const weatherAPI = {
    key: '4c8a86f65bf23e80b130471e17d20c67',
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?'
}

const defaultCity = 'Bareilly';

document.addEventListener('DOMContentLoaded', ()=> {
    getWeatherReport(defaultCity)
    document.querySelector('.app-main').style.display = 'block'
})

const searchInputBox = document.getElementById('input-box')

searchInputBox.addEventListener('keypress', (event)=>{
    if(event.keyCode == 13) {
        console.log(searchInputBox.value)
        getWeatherReport(searchInputBox.value)
        document.querySelector('.app-main').style.display = 'block'
    }

})

function getWeatherReport(city) {
    fetch(`${weatherAPI.baseURL}q=${city}&appid=${weatherAPI.key}&units=metric`)
    .then(weather => {
        return weather.json()
    }).then(showWeatherReport)
}
console.log()

function showWeatherReport(weather)
{

    let city = document.getElementById('city')
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let temperature = document.getElementById('temp')
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minMax = document.getElementById('min-max')
    minMax.innerHTML = `<p>Some sun, then turning cloudy with rain and a thunderstorm this afternoon <span><h3>Hi: ${Math.ceil(weather.main.temp_max)}&deg;C</h3></span></p> <p>Tonight: Occasional rain and a thunderstorm this evening; otherwise, considerable cloudiness <span><h3> Lo: ${Math.floor(weather.main.temp_min)}&deg;C</h3></span></p> `

    let weatherType = document.getElementById('weather')
    weatherType.innerText = `${weather.weather[0].main}`

    let weatherDescription = document.getElementById('description')
    weatherDescription.innerText = `${weather.weather[0].description}`

    let humidity = document.getElementById('humidity')
    humidity.innerHTML = `<p>Humidity:   ${weather.main.humidity}</p>`

    let wind = document.getElementById('wind')
    wind.innerHTML = `<p>Wind speed:   WNW ${weather.wind.speed}km/hour</p>`

    let windGust = document.getElementById('wind-gust')
    windGust.innerHTML = `<p>Wind Gusts:   ${weather.wind.gust}km/hour</p>`

    let pressure = document.getElementById('pressure')
    pressure.innerHTML = `<p>Pressure:   ${weather.main.pressure}`

    let now = new Date()
    let date = document.getElementById('date')
    date.innerText = dateManage(now)

    let time = document.getElementById('time')
    time.innerText = timeManage(now)

    if(weatherType.textContent =='Clear')
    {
        document.body.style.backgroundImage = `url('images/clear.jpg')`
    }
    else if(weatherType.textContent =='Clouds')
    {
        document.body.style.backgroundImage = `url('images/cloud.jpg')`
    }
    else if(weatherType.textContent =='Haze')
    {
        document.body.style.backgroundImage = `url('images/haze.jpeg')`
    }
    else if(weatherType.textContent =='Sunny')
    {
        document.body.style.backgroundImage = `url('images/sunny.jpg')`
    }
    else if(weatherType.textContent =='Rain')
    {
        document.body.style.backgroundImage = `url('images/rain1.jpg')`
    }
    else if(weatherType.textContent =='Snow')
    {
        document.body.style.backgroundImage = `url('images/snow.jpg')`
    }
    else if(weatherType.textContent =='Thunderstorm')
    {
        document.body.style.backgroundImage = `url('images/thunderstorm.jpeg')`
    }
    else if(weatherType.textContent =='Mist')
    {
        document.body.style.backgroundImage = `url('images/mist.jpeg')`
    }
    else if(weatherType.textContent =='Smoke')
    {
        document.body.style.backgroundImage = `url('images/smoke.jpeg')`
    }
}

function dateManage(dateArg)
{
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    let month = months[dateArg.getMonth()]
    let date = dateArg.getDate()
    let day = days[dateArg.getDay()]

    return ` ${day}, ${month} ${date}`
}
function timeManage() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    return `${hours}:${minutes}`
}


// mobile nav

const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
    Nav.classList.toggle("mobile-nav-hide");
});



