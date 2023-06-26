
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
          div.classList.remove('bg-success')
      })
     }
const getRandomAPI = ()=>{
 let randomNumber:number = Math.random()
console.log(randomNumber);

 return randomNumber < 0.5 ? API_1 :  API_2 

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
    // let scoreDiv = printScoreInput()
    // jokesContainer.setAttribute("src", "jokeBackground")
    // jokesContainer.style.backgroundImage =BlueBgSvg
// scoreContainer.className = jokesContainer.innerHTML === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 ';
scoreContainer.className = jokesContainer.innerText !== '' ? scoreContainer.className.replace('d-none','d-block') :null ;
    
    // jokesContainer.innerText===''? null: jokesContainer.append(scoreDiv)
    btn.innerHTML = 'Next Joke'
    // console.log(getRandomAPI());

}

//Interface
// const container:HTMLElement = document.createElement('div');
// container.className = "align-items-center border bg-light shadow-lg rounded-4 container d-flex flex-column justify-content-center mt-5 w-50"
// container.innerHTML = '<h3 class="text-center mt-3">Let\'\s have <strong>FUN</strong> </h3>'

// app?.appendChild(container)
// 
// const jokesContainer = document.getElementById('jokes')
// jokesContainer.className = 'card bg-text-ligth m-5 test'
// jokesContainer.id='jokes'

// container?.appendChild(jokesContainer)
const scoreContainer= document.getElementById('scoreContainer')
const jokesContainer = document.getElementById('jokes')
const btn =document.getElementById('button')

// scoreContainer.className = jokesContainer.innerHTML === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 ';

// btn.className = 'btn btn-primary m-2 '
// btn.innerHTML = 'Get Joke'
// container.appendChild(btn)
btn?.addEventListener('click', fetchJokes)

type powerScore ='Malo:1'|'Pasable:2'|'Genial:3'
// let scores:powerScore[]=['Malo:1','Pasable:2','Genial:3']

// const svg = document.createElement('img')
// svg.src =  
// <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
// <path fill="#0F62FE" d="M18.8,-17.1C34.9,-8.8,65.9,-13,77.1,-5.3C88.3,2.4,79.8,21.8,67.9,36.1C55.9,50.5,40.5,59.8,26,60.2C11.5,60.6,-2.2,52.1,-17,46.7C-31.9,41.3,-47.9,39.1,-61.1,29C-74.4,19,-84.9,1.1,-76.1,-7.2C-67.3,-15.6,-39.1,-14.3,-23.2,-22.5C-7.3,-30.8,-3.6,-48.5,-1.2,-47.2C1.3,-45.8,2.7,-25.3,18.8,-17.1Z" transform="translate(100 100)" />
// </svg>
// container.appendChild(svg)
// const jokeBackground= ()=> {
//       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"> <path fill="#0F62FE" d="M18.8,-17.1C34.9,-8.8,65.9,-13,77.1,-5.3C88.3,2.4,79.8,21.8,67.9,36.1C55.9,50.5,40.5,59.8,26,60.2C11.5,60.6,-2.2,52.1,-17,46.7C-31.9,41.3,-47.9,39.1,-61.1,29C-74.4,19,-84.9,1.1,-76.1,-7.2C-67.3,-15.6,-39.1,-14.3,-23.2,-22.5C-7.3,-30.8,-3.6,-48.5,-1.2,-47.2C1.3,-45.8,2.7,-25.3,18.8,-17.1Z" transform="translate(100 100)" /></svg>
      
//     }
//     jokeBackground()
    // export default jokeBackground

//print score input
const printScoreInput= ()=>{
    // container.appendChild(scoreContainer)
    // scoreContainer.id= "scoreContainer"
    // const jokesContainer = document.getElementById('jokes')

    // const scoreDiv = document.getElementsByClassName('scoreDiv');
    // scoreDiv.id = 'scoreDiv';
    // document.getElementById('scoreDiv')?.remove()
    // container.appendChild(scoreDiv)
    // const scoreTitle= document.createElement('h3');

    // scoreTitle.className = 'text-nowrap text-center'
    // scoreDiv.appendChild(scoreTitle)
    // scoreTitle.innerHTML = 'Having Fun?'
    // scoreContainer.className = jokesContainer.innerText !== '' ? scoreContainer.className.replace('d-none','d-block') :null ;
    const scores = document.querySelectorAll('score')
    
    // const scoreValuesContainer= document.getElementById('scoreValuesContainer');
    // scoreDiv.appendChild(scoreValuesContainer)
    // scoreValuesContainer.className = 'd-flex flex-row justify-content-around'
    const handleScore = (e:Event)=>{
e.preventDefault()
let score = e.target 
    console.log(score);
   return score
    }
    scores.forEach(score=>{

        score.addEventListener('click', (e)=>{
                    // jokesContainer.innerText !== '' ? handleScore(e): null
                    // score.classList.contains('bg-success') ? addJokeToReport(jokesContainer.innerText, score.classList.add('bg-success')):score.classList.remove('bg-success');
                    handleScore(e)
                    
                })
    
    })
    // const handleScoreState = ( scoreInput:HTMLElement):boolean => {
    //     if(!scoreInput.classList.contains('bg-success')){
    //         resetButtons()
    //         scoreInput.classList.toggle('bg-success')

    //     }else{
    //         scoreInput.classList.toggle('bg-success')
    //     }
    //     return true
    // }
    
    // scores.forEach((score:string)=>{
    //     const scoreInput= document.createElement('button');
    //     scoreInput.innerText = score;
    //     scoreValuesContainer.appendChild(scoreInput)
    //     scoreInput.className = 'm-1 score' 
    //     scoreInput.addEventListener('click', (e)=>{
    //         jokesContainer.innerText !== '' ? handleScoreState( scoreInput): null
    //         scoreInput.classList.contains('bg-success') ? addJokeToReport(jokesContainer.innerText, scoreInput.innerText):scoreInput.classList.remove('bg-success');
            
            
    //     })
    // }
    // )
    // return scoreContainer
};
// jokesContainer.innerText===''? null: printScoreInput(scores)
  

// btn.className = 'btn btn-primary m-2 '

type ReportAcudits={
    joke:string,
    resultado:string,
    date:string

}
const reportAcudits: ReportAcudits[]=[]


// Función para agregar un chiste al reporte
function addJokeToReport(joke:string, resultado:string):void {
  const fecha = new Date().toISOString();
  const chiste = { joke, resultado, date: fecha };
  reportAcudits.push(chiste);
//   console.log(chiste);
  console.log(reportAcudits);
  
}
