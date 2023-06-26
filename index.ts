
const app = document.getElementById('app')
const API_1 = 'https://icanhazdadjoke.com/'
const API_2 = 'https://v2.jokeapi.dev/joke/Any'
// fetchWeatherAPI()
//--------Weather API-----------
const header = document.getElementById('header')
const weatherContainer = document.createElement('div')
weatherContainer.className = 'w-25 card m-5 opacity-75 text-bg-dark '
header?.appendChild(weatherContainer)

interface Weather{
    current_weather: {
        temperature: number,
        time: string
    }
}  
const meteoAPI = 'https://api.open-meteo.com/v1/forecast?latitude=41.38879&longitude=2.159&timezone=Europe/Madrid&current_weather=true'

const WeatherAPIfetch= async (): Promise<Weather[]> => await fetch(meteoAPI)
.then(response => response.json())
.then(data =>{
    weatherContainer.innerHTML = `<p class="m-0 card-body pb-0">temperature: ${data.current_weather.temperature}</p>
    <p class=" card-body pb-0">hour: ${data.current_weather.time}</p><br>`
    return data
}
    
).catch(error =>console.error(error)
)
WeatherAPIfetch()


function resetButtons():void{
    let scoreDiv =document.querySelectorAll('.score')  
      scoreDiv.forEach(div=>{
          div.classList.remove('selected')
          div.classList.remove('placeholder-wave')
         
      })
     }
const getRandomNumber = ()=>{
 let randomNumber:number = Math.random()
 return randomNumber 

}

const fetchJokes = async (): Promise<void> => {
    // getRandomAPI
    resetButtons()
    
    const randomAPI = getRandomNumber() < 0.5 ? API_1 :  API_2 
 await fetch(randomAPI,{
    
    headers: {
        'Accept': 'application/json'
    }})
.then(response => response.json())
.then((data:{
    // id: string,
    joke: string,
    setup:string,
    // status: number
}) => {
    let joke =''
    
    if(data.joke){
        joke = data.joke
    }else if(data.setup){
         joke = data.setup
    
    }

    jokesContainer.innerHTML = `<p class="text-center card-body pb-0">joke from <strong>${randomAPI}</strong><br>${joke}</p>`
    }).catch(error =>console.error(error)
    )
    // let scoreDiv = printScoreInput()
    // jokesContainer.setAttribute("src", "jokeBackground")
    // jokesContainer.style.backgroundImage =BlueBgSvg
// scoreContainer.className = jokesContainer.innerHTML === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 ';
scoreContainer.className = jokesContainer.innerText !== '' ? scoreContainer.className.replace('d-none','d-block') :null ;
    
    // jokesContainer.innerText===''? null: jokesContainer.append(scoreDiv)
    btn.innerHTML = 'Next Joke'
    // console.log(getRandomAPI());

}


const scoreContainer= document.getElementById('scoreContainer')
const jokesContainer = document.getElementById('jokes')
const btn =document.getElementById('button')


btn?.addEventListener('click', fetchJokes)

// type powerScore ='Malo:1'|'Pasable:2'|'Genial:3'
// let scores:powerScore[]=['Malo:1','Pasable:2','Genial:3']


const scoreValuesContainer: HTMLElement = document.getElementById("scoreValuesContainer");
const images: HTMLCollectionOf<HTMLImageElement> = scoreValuesContainer.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
         if(!images[i].classList.contains('selected')){
            resetButtons()
            images[i].classList.toggle('selected')
            images[i].classList.toggle("placeholder-wave");
            images[i].classList.contains('selected') ?  addJokeToReport(jokesContainer.innerText, images[i].getAttribute('value')):images[i].classList.remove('selected');

        }else{
            images[i].classList.toggle('selected')
            images[i].classList.toggle("placeholder-wave");
           
        }
  });
}

type ReportAcudits={
    joke:string,
    resultado:string,
    date:string

}
const reportAcudits: ReportAcudits[]=[]


// Función para agregar un chiste al reporte
function addJokeToReport(joke:string, resultado:string):void {
  const date = new Date().toISOString();
  const chiste = { joke, resultado, date };
  reportAcudits.push(chiste);
  console.log(reportAcudits);
  
}
