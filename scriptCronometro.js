let timerSegundos = document.getElementById("segundos");
let timerMinutos = document.getElementById("minutos");
let timerHoras = document.getElementById("horas");
let div = document.getElementById("divi");
let seg = 0;
let min = 0;
let hr = 0;
var interval;
let isRunning = false;

let t = 0;

let divMarkTime = document.getElementById("local_mark_time");
let buttonMark = document.getElementById("button_volta");

condctionInicialButtonMark();

function formatTime(num) {
  return num < 10 ? "0" + num : num;
}

function timer() {
  timerSegundos.innerHTML = formatTime(seg);
  timerMinutos.innerHTML = formatTime(min);
  timerHoras.innerHTML = formatTime(hr);
  seg++;
  if (seg >= 60) {
    min++;
    limparSeg();
  }
  if (min >= 60) {
    hr++;
    limparSeg();
    limparMin();
  }
}

function startTimer() {
  if (!isRunning) {
    interval = setInterval(timer, 1000);
    isRunning = true;
  }
  let clearButton = document.getElementById("button_clear");
  if (clearButton) {
    clearButton.remove();
  }
  activateButtonMark();
}

function breakTimer() {
  clearInterval(interval);
  isRunning = false;
  if (seg != 0) {
    if (!document.getElementById("button_clear")) {
      let newButton = document.createElement("button");
      newButton.id = "button_clear";
      newButton.innerHTML = "Clear";
      newButton.setAttribute("onclick", "clean()");
      div.appendChild(newButton);
    }
  }
  condctionInicialButtonMark();
}

function clean() {
  limparSeg();
  limparMin();
  limparHoras();
}

function limparSeg() {
  seg = 0;
  timerSegundos.innerHTML = "00";

  let clearButton = document.getElementById("button_clear");
  if (clearButton) {
    clearButton.remove();
  }
}

function limparMin() {
  min = 0;
  timerMinutos.innerHTML = "00";
}

function limparHoras() {
  hr = 0;
  timerHoras.innerHTML = "00";
}

function markTime() {
  let lenghtMarkClass = document.getElementsByClassName("mark-class").length;

  if (lenghtMarkClass < 4) {
    let newMark = document.createElement("h1");
    newMark.innerHTML =
      formatTime(hr) + ":" + formatTime(min) + ":" + formatTime(seg);
    newMark.classList.add("mark-class");
    divMarkTime.appendChild(newMark);
  }

  if (lenghtMarkClass + 1 >= 4) {
    condctionInicialButtonMark();
  }
}

buttonMark.addEventListener("click", markTime);

function markTime() {
  let lenghtMarkClass = document.getElementsByClassName("mark-class").length;

  if (lenghtMarkClass < 4) {
    let newMark = document.createElement("h1");
    newMark.innerHTML =
      formatTime(hr) + ":" + formatTime(min) + ":" + formatTime(seg);
    newMark.classList.add("mark-class");
    divMarkTime.appendChild(newMark);
  }

  if (lenghtMarkClass + 1 >= 4) {
    condctionInicialButtonMark();
  }
}

buttonMark.addEventListener("click", markTime);

function removeNewMark() {
  let marks = document.getElementsByClassName("mark-class");
  if (marks.length > 0) {
    let lastMark = marks[marks.length - 1];
    divMarkTime.removeChild(lastMark);
  }

  if (marks.length <= 4) {
    activateButtonMark();
  }
}

function removeNewMarkAll() {
  let marks = document.getElementsByClassName("mark-class");
  
  while (marks.length > 0) {
    let lastMark = marks[0]; 
    lastMark.parentNode.removeChild(lastMark); 
  }

  if (marks.length <= 4) {
    activateButtonMark();
  }
}

function condctionInicialButtonMark() {
  buttonMark.disabled = true;
  buttonMark.style.opacity = "50%";
  buttonMark.style.cursor = "default";
}

function activateButtonMark() {
  buttonMark.disabled = false;
  buttonMark.style.opacity = "100%";
  buttonMark.style.cursor = "pointer";
}
