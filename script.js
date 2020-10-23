let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}
/* 
TODO: submit Form validation needed
TODO: Add Images of past works 
TODO: Add gallery of images in about me section
*/

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

var year = new Date();

document.getElementById(
  "thisYear"
).innerHTML = `<div> © ${year.getFullYear()} Daniel Francis</div>`;


today = new Date();
var countDown = new Date(today.getFullYear(), 11, 23);
if (today.getMonth() == 11 && today.getDate() > 25) {
  countDown.setFullYear(countDown.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
var days = 99;
document.getElementById("countdown").innerHTML = `<h1> Day <strong class="red">${Math.ceil(
  (days - (countDown.getTime() - today.getTime()) / one_day) 
)}</strong> of my 100 days of coding challenge </h1>`;


