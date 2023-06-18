// const app = document.getElementById('app')

const container = document.getElementById('container')

const jokesContainer = document.createElement('div')
jokesContainer.className = 'card bg-light'
jokesContainer.innerHTML = '<h1 class="text-center">Jokes</h1>'

container?.appendChild(jokesContainer)


const fetchJokes = async () => {
 await fetch('https://icanhazdadjoke.com/',{
    headers: {
        'Accept': 'application/json'
    }})
.then(response => response.json())
.then(data => {
jokesContainer.innerHTML = `<p class="text-center card-body pb-0">${data.joke}</p>`

}
)}

const btn =document.getElementById('button')
btn?.addEventListener('click', fetchJokes)

