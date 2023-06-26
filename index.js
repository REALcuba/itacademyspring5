var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var app = document.getElementById('app');
var API_1 = 'https://icanhazdadjoke.com/';
var API_2 = 'https://v2.jokeapi.dev/joke/Any';
// fetchWeatherAPI()
//--------Weather API-----------
var header = document.getElementById('header');
var weatherContainer = document.createElement('div');
weatherContainer.className = 'w-25 card m-5 opacity-75 text-bg-dark ';
header === null || header === void 0 ? void 0 : header.appendChild(weatherContainer);
var meteoAPI = 'https://api.open-meteo.com/v1/forecast?latitude=41.38879&longitude=2.159&timezone=Europe/Madrid&current_weather=true';
var WeatherAPIfetch = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(meteoAPI)
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    weatherContainer.innerHTML = "<p class=\"m-0 card-body pb-0\">temperature: ".concat(data.current_weather.temperature, "</p>\n    <p class=\" card-body pb-0\">hour: ").concat(data.current_weather.time, "</p><br>");
                    return data;
                }).catch(function (error) { return console.error(error); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
WeatherAPIfetch();
function resetButtons() {
    var scoreDiv = document.querySelectorAll('.score');
    scoreDiv.forEach(function (div) {
        div.classList.remove('bg-success');
    });
}
var getRandomAPI = function () {
    var randomNumber = Math.random();
    console.log(randomNumber);
    return randomNumber < 0.5 ? API_1 : API_2;
};
var fetchJokes = function () { return __awaiter(_this, void 0, void 0, function () {
    var randomAPI;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // getRandomAPI
                resetButtons();
                randomAPI = getRandomAPI();
                return [4 /*yield*/, fetch(randomAPI, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        var joke = '';
                        if (data.joke) {
                            joke = data.joke;
                        }
                        else if (data.setup) {
                            joke = data.setup;
                        }
                        jokesContainer.innerHTML = "<p class=\"text-center card-body pb-0\">joke from <strong>".concat(randomAPI, "</strong><br>").concat(joke, "</p>");
                    }).catch(function (error) { return console.error(error); })
                    // let scoreDiv = printScoreInput()
                    // jokesContainer.setAttribute("src", "jokeBackground")
                    // jokesContainer.style.backgroundImage =BlueBgSvg
                    // scoreContainer.className = jokesContainer.innerHTML === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 ';
                ];
            case 1:
                _a.sent();
                // let scoreDiv = printScoreInput()
                // jokesContainer.setAttribute("src", "jokeBackground")
                // jokesContainer.style.backgroundImage =BlueBgSvg
                // scoreContainer.className = jokesContainer.innerHTML === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 ';
                scoreContainer.className = jokesContainer.innerText !== '' ? scoreContainer.className.replace('d-none', 'd-block') : null;
                // jokesContainer.innerText===''? null: jokesContainer.append(scoreDiv)
                btn.innerHTML = 'Next Joke';
                return [2 /*return*/];
        }
    });
}); };
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
var scoreContainer = document.getElementById('scoreContainer');
var jokesContainer = document.getElementById('jokes');
var btn = document.getElementById('button');
// scoreContainer.className = jokesContainer.innerHTML === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 ';
// btn.className = 'btn btn-primary m-2 '
// btn.innerHTML = 'Get Joke'
// container.appendChild(btn)
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', fetchJokes);
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
var printScoreInput = function () {
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
    var scores = document.querySelectorAll('score');
    // const scoreValuesContainer= document.getElementById('scoreValuesContainer');
    // scoreDiv.appendChild(scoreValuesContainer)
    // scoreValuesContainer.className = 'd-flex flex-row justify-content-around'
    var handleScore = function (e) {
        e.preventDefault();
        var score = e.target;
        console.log(score);
        return score;
    };
    scores.forEach(function (score) {
        score.addEventListener('click', function (e) {
            // jokesContainer.innerText !== '' ? handleScore(e): null
            // score.classList.contains('bg-success') ? addJokeToReport(jokesContainer.innerText, score.classList.add('bg-success')):score.classList.remove('bg-success');
            handleScore(e);
        });
    });
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
var reportAcudits = [];
// Función para agregar un chiste al reporte
function addJokeToReport(joke, resultado) {
    var fecha = new Date().toISOString();
    var chiste = { joke: joke, resultado: resultado, date: fecha };
    reportAcudits.push(chiste);
    //   console.log(chiste);
    console.log(reportAcudits);
}
