//--------Weather API-----------
const header = document.getElementById('header')
const weatherContainer = document.createElement('div')
weatherContainer.className = 'align-items-center card m-5 opacity-75 text-bg-dark '
header?.appendChild(weatherContainer)
// weatherContainer.innerHTML="tiempo"

//  interface WeatherAPI {
//     latitude:              number;
//     longitude:             number;
//     generationtime_ms:     number;
//     utc_offset_seconds:    number;
//     timezone:              string;
//     timezone_abbreviation: string;
//     elevation:             number;
//     current_weather:       CurrentWeather;
// }

 interface CurrentWeather {
    temperature:   number;
    windspeed:     number;
    winddirection: number;
    weathercode:   number;
    is_day:        number;
    time:          string;
}
// type Weather=CurrentWeather   
export const API = 'https://api.open-meteo.com/v1/forecast?latitude=2.15899&longitude=41.38879&timezone=Europe/Madrid&current_weather=true'
 const weatherAPIfetch = async () => await fetch(API)
.then((response) => response.json() )
.then(data =>{
    console.log(data)
    weatherContainer.innerHTML = `<p class="m-0 card-body pb-0">temperature: ${data.temperature}</p>
    <p class=" card-body pb-0">hour: ${data.time}</p><br>`
}
    
)
weatherAPIfetch()
// export default weatherAPIfetch;