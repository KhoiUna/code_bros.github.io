let person = window.prompt("Hi there!\nWhat's your name?");
let txt;

if (person === null || person === "") {
  txt = '"Welcome to Our Projects!"';
} else {
  txt = '"Hello ' + person + '! Welcome to Our Projects!"';
}

document.getElementById("hello").innerHTML = txt.toUpperCase();
