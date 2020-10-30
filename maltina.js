// setTimeout(() => {
//   document.getElementById("body").style.backgroundColor = "red";
// }, 5000);
// let red = Math.floor(Math.random() * 256);
// let green = Math.floor(Math.random() * 256);
// let blue = Math.floor(Math.random() * 256);

// setTimeout(() => {
//   document.getElementById("malt").style.backgroundColor = colors(
//     red,
//     green,
//     blue
//   );
// }, 2000);

// let red, green, blue;

// document.write(red, "  ", green, " ", blue);

// function colors(red, green, blue) {
//   return `rgb(${red}, ${green}, ${blue})`;
// }

setInterval(() => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red}, ${green}, ${blue})`;
  let malt = document.getElementById("malt");
  let container = document.getElementById("container");
  //   malt.style.backgroundColor = color;
  container.innerHTML =
    container.innerHTML + `<div style="background-color:${color}"></div>`;
  console.log(container.innerHTML);
}, 2000);
