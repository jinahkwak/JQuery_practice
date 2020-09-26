const colckContainer = document.querySelector(".js-clock");
clockTitle = colckContainer.querySelector("h1");

function getTime() {
  const date = new Date(); //Date()는 원래있는 함수임
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();