const title = document.querySelector("#title");

const BASE_COLOR = "rgb(43, 43, 43)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick); //호출할때 ()이거 안쓰는거 주의!!
}
init();
