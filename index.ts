// import getsvg from './getsvg';
const app = document.getElementById('app')

function resetButtons(){
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
  
    const scoreTitle= document.createElement('h3');
    scoreTitle.className = 'text-nowrap'
    scoreContainer.appendChild(scoreTitle)
    scoreTitle.innerHTML = 'Having Fun?'
    scoreContainer.className = jokesContainer.innerText === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 scoreCon';

    const scoreValuesContainer= document.createElement('div');
    scoreContainer.appendChild(scoreValuesContainer)
    scoreValuesContainer.className = 'd-flex flex-row justify-content-around'
    
    const handleScoreState = (e:MouseEvent, scoreInput:HTMLElement) => {
           resetButtons()
           
           scoreInput.classList.toggle('bg-success')
          
    }
    
    scores.forEach((score:string)=>{
        const scoreInput= document.createElement('button');
        scoreInput.innerText = score;
        scoreValuesContainer.appendChild(scoreInput)
        scoreInput.className = 'm-1 score' 
        scoreInput.addEventListener('click', (e)=>{
            jokesContainer.innerText === '' ? alert('No puedes dejar el chiste en blanco'):addJokeToReport(jokesContainer.innerText, scoreInput.innerText);

            jokesContainer.innerText !== '' ? handleScoreState( e, scoreInput): null

            })
        })
        
    };
printScoreInput(scores)
scoreContainer.className = jokesContainer.innerHTML !== '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 scoreCon';
console.log(jokesContainer.innerHTML.valueOf());


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
