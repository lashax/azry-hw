function getWeather() {
    let val = document.getElementById("city").value;
    console.log(val);
    let weather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=d4afa176bb90eb2c02cb9639c35342d4`);

    weather
        .then(res => res.json())
        .then(data => {
            let html = ``;
            if (data.cod === "404") {
                html = `City ${val} not found.`;
            } else {
                html = `<p>City: ${data.name}; Temperature: ${data.main.temp};
                           Info: ${data.weather[0].main}</p>`;
            }
            document.querySelector(".demo").innerHTML = html;
        });
}