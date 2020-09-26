const colckContainer = document.querySelector(".js-clock");
clockTitle = colckContainer.querySelector("h1");

function getTime() {
  const date = new Date(); //Date()는 원래있는 함수임
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours <10 ? `0${hours}`: hours}:${minutes<10? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); //실시간 시간흐름
}

init();