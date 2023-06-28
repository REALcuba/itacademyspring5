// import green_bg from './img/green_bg.svg'
const app = document.getElementById('app')
const API_1:string = 'https://icanhazdadjoke.com/'
const API_2:string = 'https://v2.jokeapi.dev/joke/Any'
let WeatherAPIfetch: Promise<Weather> | any;



// fetchWeatherAPI()
//--------Weather API-----------
const header = document.getElementById('header')
const weatherContainer = document.createElement('div')
weatherContainer.className = ' d-flex  '
header?.appendChild(weatherContainer)

const meteoAPI:string = 'https://api.open-meteo.com/v1/forecast?latitude=41.38879&longitude=2.159&timezone=Europe/Madrid&current_weather=true'
// console.log(green_bg);

interface Weather{
    current_weather: {
        temperature: number,
        time: string
    }
}  

 WeatherAPIfetch= async ()=> await fetch(meteoAPI)
.then(response => response.json())
.then(data =>{
    weatherContainer.innerHTML = `<p class="m-0 pb-0 text-warning"> ${data.current_weather.temperature} ºC</p>
      <p class="m-0 pb-0 ps-2 text-warning"> Date&Time: ${data.current_weather.time}</p>`
    return data
}
    
).catch(error =>console.error(error)
)
WeatherAPIfetch()

//-------------------
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
function getRandomBg():void {
    const container = document.getElementById('container')
    const classNames = ["shapeBg", "shapeBg1", "shapeBg2"];
    const currentClass = container.className;
    
    classNames.forEach((className) => {
      if (currentClass.includes(className)) {
        container.classList.remove(className);
      }
    });
    const randomIndex = Math.floor(Math.random() * classNames.length);
    const randomClass = classNames[randomIndex];
    
    container.classList.add(randomClass);
}
let fetchJokes: Promise<Object> | any;

//Fetch Jokes
fetchJokes = async ():Promise<typeof fetchJokes> => {
    // getRandomAPI
    resetButtons()
    
    const randomAPI = getRandomNumber() < 0.5 ? API_1 :  API_2 
 await fetch(randomAPI,{
    
    headers: {
        'Accept': 'application/json'
    }})
.then(response => response.json())
.then((data:{
    joke: string,
    setup:string,
}) => {
    let joke =''
    
    if(data.joke){
        joke = data.joke
    }else if(data.setup){
         joke = data.setup
    
    }
    getRandomBg()
    jokesContainer.innerHTML = `<p class="text-center card-body pb-0">joke from <strong>${randomAPI}</strong><br>${joke}</p>`
    }).catch(error =>console.error(error)
    )
    scoreContainer.className = jokesContainer.innerText !== '' ? scoreContainer.className.replace('d-none','d-block') :null ;
    btn.innerHTML = 'Next Joke'
}


const scoreContainer= document.getElementById('scoreContainer')
const jokesContainer = document.getElementById('jokes')
const btn =document.getElementById('button')


btn?.addEventListener('click', fetchJokes)
//--------------------
//Scores
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

// Función para agregar un chiste al reporte
type ReportAcudits={
    joke:string,
    resultado:string,
    date:string

}
const reportAcudits: ReportAcudits[]=[]


function addJokeToReport(joke:string, resultado:string):void {
  const date = new Date().toISOString();
  const chiste = { joke, resultado, date };
  reportAcudits.push(chiste);
  console.log(reportAcudits);
  
}
