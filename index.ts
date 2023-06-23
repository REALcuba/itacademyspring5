// import getsvg from './getsvg';
// import WeatherAPIfetch from './fechtWeatherAPI'
const app = document.getElementById('app')
const API_1 = 'https://icanhazdadjoke.com/'
const API_2 = 'https://v2.jokeapi.dev/joke/Any'


function resetButtons():void{
    let scoreDiv =document.querySelectorAll('.score')  
      scoreDiv.forEach(div=>{
          div.classList.remove('bg-success')
      })
     }
const getRandomAPI = ()=>{
 let randomNumber:number = Math.random()
//  return randomNumber
console.log(randomNumber);

 return randomNumber < 0.5 ? API_1 : randomNumber > 0.5 ? API_2 : 'https://api.adviceslip.com/advice'

}

const fetchJokes = async (): Promise<void> => {
    // getRandomAPI
    resetButtons()
    const randomAPI =getRandomAPI()
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
    let scoreDiv = printScoreInput(scores)
    jokesContainer.innerText===''? null: jokesContainer.append(scoreDiv)
    btn.innerHTML = 'Next Joke'
    // console.log(getRandomAPI());

}

//Interface
const container:HTMLElement = document.createElement('div');
container.className = "align-items-center border bg-light shadow-lg rounded-4 container d-flex flex-column justify-content-center mt-5 w-50"
container.innerHTML = '<h3 class="text-center mt-3">Let\'\s have <strong>FUN</strong> </h3>'

app?.appendChild(container)

const jokesContainer = document.createElement('div')
jokesContainer.className = 'card bg-text-ligth m-5 test'
jokesContainer.id='jokes'

container?.appendChild(jokesContainer)
const scoreContainer= document.createElement('div')

const btn =document.createElement('button')

btn.className = 'btn btn-primary m-2 '
btn.innerHTML = 'Get Joke'
container.appendChild(btn)
btn?.addEventListener('click', fetchJokes)

let scores:string[]=['Malo:1','Pasable:2','Genial:3']

//print score input
const printScoreInput= (scores:string[])=>{
    container.appendChild(scoreContainer)
    scoreContainer.id= "scoreContainer"
    const scoreDiv = document.createElement('div');
    scoreDiv.id = 'scoreDiv';
    document.getElementById('scoreDiv')?.remove()
    container.appendChild(scoreDiv)
    const scoreTitle= document.createElement('h3');

    scoreTitle.className = 'text-nowrap text-center'
    scoreDiv.appendChild(scoreTitle)
    scoreTitle.innerHTML = 'Having Fun?'
    scoreContainer.className = jokesContainer.innerText === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 scoreCon';
    
    
    const scoreValuesContainer= document.createElement('div');
    scoreDiv.appendChild(scoreValuesContainer)
    scoreValuesContainer.className = 'd-flex flex-row justify-content-around'
    
    const handleScoreState = ( scoreInput:HTMLElement):boolean => {
        if(!scoreInput.classList.contains('bg-success')){
            resetButtons()
            scoreInput.classList.toggle('bg-success')

        }else{
            scoreInput.classList.toggle('bg-success')
        }
        return true
    }
    
    scores.forEach((score:string)=>{
        const scoreInput= document.createElement('button');
        scoreInput.innerText = score;
        scoreValuesContainer.appendChild(scoreInput)
        scoreInput.className = 'm-1 score' 
        scoreInput.addEventListener('click', (e)=>{
            jokesContainer.innerText !== '' ? handleScoreState( scoreInput): null
            scoreInput.classList.contains('bg-success') ? addJokeToReport(jokesContainer.innerText, scoreInput.innerText):scoreInput.classList.remove('bg-success');
            
            
        })
    })
    return scoreContainer
};
jokesContainer.innerText===''? null: printScoreInput(scores)
  
scoreContainer.className = jokesContainer.innerHTML !== '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 scoreCon';

btn.className = 'btn btn-primary m-2 '

type ReportAcudits=[{
    joke:string,
    resultado:string,
    date:string

}]
const reportAcudits: ReportAcudits=[
  {  joke:'string',
    resultado:'string',
    date:'string'}
]


// Función para agregar un chiste al reporte
function addJokeToReport(joke:string, resultado:string):void {
  const fecha = new Date().toISOString();
  const chiste = { joke, resultado, date: fecha };
  reportAcudits.push(chiste);
//   console.log(chiste);
  console.log(reportAcudits);
  
}
// fetchWeatherAPI()
//--------Weather API-----------
const weatherContainer = document.createElement('div')
weatherContainer.className = 'align-items-center card m-5 opacity-75 text-bg-dark '
app?.appendChild(weatherContainer)

interface Weather{
    current_weather: {
        temperature: number,
        time: string
    }
}  
const API = 'https://api.open-meteo.com/v1/forecast?latitude=41.38879&longitude=2.159&timezone=Europe/Madrid&current_weather=true'
const WeatherAPIfetch= async (): Promise<Weather[]> => await fetch(API)
.then(response => response.json())
.then(data =>{
    weatherContainer.innerHTML = `<p class="m-0 card-body pb-0">temperature: ${data.current_weather.temperature}</p>
    <p class=" card-body pb-0">hour: ${data.current_weather.time}</p><br>`
    return data
}
    
).catch(error =>console.error(error)
)

WeatherAPIfetch()