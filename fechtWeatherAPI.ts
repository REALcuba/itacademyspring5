//--------Weather API-----------
const app = document.getElementById('app')
const weatherContainer = document.createElement('div')
weatherContainer.className = 'align-items-center card m-5 opacity-75 text-bg-dark '
app?.appendChild(weatherContainer)
// weatherContainer.innerHTML="tiempo"

type Weather=Promise<void>  
const API = 'https://api.open-meteo.com/v1/forecast?latitude=2.15899&longitude=41.38879&timezone=Europe/Madrid&current_weather=true'
export const weatherAPIfetch= async (): Weather => await fetch(API)
.then(response => response.json())
.then(data =>{
    console.log(data)
    weatherContainer.innerHTML = `<p class="m-0 card-body pb-0">temperature: ${data.current_weather.temperature}</p>
    <p class=" card-body pb-0">hour: ${data.current_weather.time}</p><br>`
}
    
)
weatherAPIfetch()
// export default weatherAPIfetch;