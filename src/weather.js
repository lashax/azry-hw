import {useState} from "react";

const Weather = () => {
    const [weather, setWeather] = useState("");

    return (
        <div>
            <h1>Current Weather</h1>
            <input type="text" id="city" />
            <button id="myBtn" onClick={() => getWeather(setWeather)}>Find</button>
            <p>{weather}</p>
        </div>
    );
}

const getWeather = (setWeather) => {
    let val = document.getElementById("city").value;
    let weather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=d4afa176bb90eb2c02cb9639c35342d4`);

    weather
        .then(res => res.json())
        .then(data => {
            let info = "";
            console.log(data);
            if (data.cod === "404") {
                info = `City ${val} not found.`;
            } else {
                info = `City ${data.name}; Temperature: ${data.main.temp};
                        Info: ${data.weather[0].main}`
            }
            setWeather(info);
        })
}


export default Weather;