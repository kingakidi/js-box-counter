function containerBox(color) {
  return `<div style="background-color:${color}"></div>`;
}
function showContainer(color) {
  let container = document.getElementById("container");
  container.innerHTML += containerBox(color);
}

// SHOW FUNCTION CONTAINING BOX COLORS AND CONTAINER
function ShowBox() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red}, ${green}, ${blue})`;
  containerBox(color);
  showContainer(color);
}

setInterval(() => {
  ShowBox();
}, 2000);
