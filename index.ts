// import getsvg from './getsvg';
// import WeatherAPIfetch from './fechtWeatherAPI'
const app = document.getElementById('app')

function resetButtons():void{
    let scoreDiv =document.querySelectorAll('.score')  
      scoreDiv.forEach(div=>{
          div.classList.remove('bg-success')
      })
     }

const fetchJokes = async (): Promise<void> => {
    
    resetButtons()
 await fetch('https://icanhazdadjoke.com/',{
    headers: {
        'Accept': 'application/json'
    }})
.then(response => response.json())
.then((data:{
    // id: string,
    joke: string,
    // status: number
}) => {(
    
    jokesContainer.innerHTML = `<p class="text-center card-body pb-0">${data.joke}</p>`
    )})
    let scoreDiv = printScoreInput(scores)
    jokesContainer.innerText===''? null: jokesContainer.append(scoreDiv)

}
//Interface
const container = document.createElement('div');
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
btn.innerHTML = 'Next Joke'
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
    
    const handleScoreState = ( scoreInput:HTMLElement) => {
        if(!scoreInput.classList.contains('bg-success')){
            resetButtons()
            scoreInput.classList.toggle('bg-success')

        }else{
            scoreInput.classList.toggle('bg-success')
        }
    }
    
    scores.forEach((score:string)=>{
        const scoreInput= document.createElement('button');
        scoreInput.innerText = score;
        scoreValuesContainer.appendChild(scoreInput)
        scoreInput.className = 'm-1 score' 
        scoreInput.addEventListener('click', (e)=>{
            jokesContainer.innerText === '' ? alert('No puedes dejar el chiste en blanco'):addJokeToReport(jokesContainer.innerText, scoreInput.innerText);
            
            jokesContainer.innerText !== '' ? handleScoreState( scoreInput): null
            
        })
    })
    return scoreContainer
};
jokesContainer.innerText===''? null: printScoreInput(scores)
  
scoreContainer.className = jokesContainer.innerHTML !== '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 scoreCon';
// console.log(jokesContainer.innerHTML.valueOf());


btn.className = 'btn btn-primary m-2 '
btn.innerText= 'Next Joke'
container.appendChild(btn)
btn?.addEventListener('click', fetchJokes)


type ReportAcudits=[{
    joke:string,
    resultado:string,
    date:string

}]
const reportAcudits: ReportAcudits=[
    {
        joke:"string",
        resultado: "Genial",
        date: "string"
    }
]


// Función para agregar un chiste al reporte
function addJokeToReport(joke:string, resultado:string):void {
  const fecha = new Date().toISOString();
  const chiste = { joke, resultado, date: fecha };
  reportAcudits.push(chiste);
  console.log(chiste);
  console.log(reportAcudits);
  
}
// fetchWeatherAPI()
//--------Weather API-----------
const weatherContainer = document.createElement('div')
weatherContainer.className = 'align-items-center card m-5 opacity-75 text-bg-dark '
app?.appendChild(weatherContainer)
// weatherContainer.innerHTML="tiempo"

type Weather=Promise<void>  
const API = 'https://api.open-meteo.com/v1/forecast?latitude=41.38879&longitude=2.159&timezone=Europe/Madrid&current_weather=true'
const WeatherAPIfetch= async (): Weather => await fetch(API)
.then(response => response.json())
.then(data =>{
    console.log(data)
    weatherContainer.innerHTML = `<p class="m-0 card-body pb-0">temperature: ${data.current_weather.temperature}</p>
    <p class=" card-body pb-0">hour: ${data.current_weather.time}</p><br>`
}
    
)
WeatherAPIfetch()