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
// import getsvg from './getsvg';
// import WeatherAPIfetch from './fechtWeatherAPI'
var app = document.getElementById('app');
function resetButtons() {
    var scoreDiv = document.querySelectorAll('.score');
    scoreDiv.forEach(function (div) {
        div.classList.remove('bg-success');
    });
}
var fetchJokes = function () { return __awaiter(_this, void 0, void 0, function () {
    var scoreDiv;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resetButtons();
                return [4 /*yield*/, fetch('https://icanhazdadjoke.com/', {
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        (jokesContainer.innerHTML = "<p class=\"text-center card-body pb-0\">".concat(data.joke, "</p>"));
                    })];
            case 1:
                _a.sent();
                scoreDiv = printScoreInput(scores);
                jokesContainer.innerText === '' ? null : jokesContainer.append(scoreDiv);
                return [2 /*return*/];
        }
    });
}); };
//Interface
var container = document.createElement('div');
container.className = "align-items-center border bg-light shadow-lg rounded-4 container d-flex flex-column justify-content-center mt-5 w-50";
container.innerHTML = '<h3 class="text-center mt-3">Let\'\s have <strong>FUN</strong> </h3>';
app === null || app === void 0 ? void 0 : app.appendChild(container);
var jokesContainer = document.createElement('div');
jokesContainer.className = 'card bg-text-ligth m-5 test';
jokesContainer.id = 'jokes';
container === null || container === void 0 ? void 0 : container.appendChild(jokesContainer);
var scoreContainer = document.createElement('div');
var btn = document.createElement('button');
btn.className = 'btn btn-primary m-2 ';
btn.innerHTML = 'Next Joke';
container.appendChild(btn);
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', fetchJokes);
var scores = ['Malo:1', 'Pasable:2', 'Genial:3'];
//print score input
var printScoreInput = function (scores) {
    var _a;
    container.appendChild(scoreContainer);
    scoreContainer.id = "scoreContainer";
    var scoreDiv = document.createElement('div');
    scoreDiv.id = 'scoreDiv';
    (_a = document.getElementById('scoreDiv')) === null || _a === void 0 ? void 0 : _a.remove();
    container.appendChild(scoreDiv);
    var scoreTitle = document.createElement('h3');
    scoreTitle.className = 'text-nowrap text-center';
    scoreDiv.appendChild(scoreTitle);
    scoreTitle.innerHTML = 'Having Fun?';
    scoreContainer.className = jokesContainer.innerText === '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 scoreCon';
    var scoreValuesContainer = document.createElement('div');
    scoreDiv.appendChild(scoreValuesContainer);
    scoreValuesContainer.className = 'd-flex flex-row justify-content-around';
    var handleScoreState = function (scoreInput) {
        if (!scoreInput.classList.contains('bg-success')) {
            resetButtons();
            scoreInput.classList.toggle('bg-success');
        }
        else {
            scoreInput.classList.toggle('bg-success');
        }
    };
    scores.forEach(function (score) {
        var scoreInput = document.createElement('button');
        scoreInput.innerText = score;
        scoreValuesContainer.appendChild(scoreInput);
        scoreInput.className = 'm-1 score';
        scoreInput.addEventListener('click', function (e) {
            jokesContainer.innerText === '' ? alert('No puedes dejar el chiste en blanco') : addJokeToReport(jokesContainer.innerText, scoreInput.innerText);
            jokesContainer.innerText !== '' ? handleScoreState(scoreInput) : null;
        });
    });
    return scoreContainer;
};
jokesContainer.innerText === '' ? null : printScoreInput(scores);
scoreContainer.className = jokesContainer.innerHTML !== '' ? 'd-none' : 'd-flex flex-column justify-content-between m-2 scoreCon';
// console.log(jokesContainer.innerHTML.valueOf());
btn.className = 'btn btn-primary m-2 ';
btn.innerText = 'Next Joke';
container.appendChild(btn);
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', fetchJokes);
var reportAcudits = [
    {
        joke: "string",
        resultado: "Genial",
        date: "string"
    }
];
// Función para agregar un chiste al reporte
function addJokeToReport(joke, resultado) {
    var fecha = new Date().toISOString();
    var chiste = { joke: joke, resultado: resultado, date: fecha };
    reportAcudits.push(chiste);
    console.log(chiste);
    console.log(reportAcudits);
}
// fetchWeatherAPI()
//--------Weather API-----------
var weatherContainer = document.createElement('div');
weatherContainer.className = 'align-items-center card m-5 opacity-75 text-bg-dark ';
app === null || app === void 0 ? void 0 : app.appendChild(weatherContainer);
var API = 'https://api.open-meteo.com/v1/forecast?latitude=41.38879&longitude=2.159&timezone=Europe/Madrid&current_weather=true';
var WeatherAPIfetch = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(API)
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    console.log(data);
                    weatherContainer.innerHTML = "<p class=\"m-0 card-body pb-0\">temperature: ".concat(data.current_weather.temperature, "</p>\n    <p class=\" card-body pb-0\">hour: ").concat(data.current_weather.time, "</p><br>");
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
WeatherAPIfetch();
