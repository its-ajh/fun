function google() {
  localStorage.setItem('google', 'poop');
  location.reload();
}
function classroom() {
  localStorage.setItem('google', 'class');
  location.reload();
}
function resetnormal() {
   localStorage.setItem('google', '');
  location.reload();
}
if (localStorage.getItem("google") === "poop") {
  var things = [
  // Borrowed from xkcd password generator which borrowed it from wherever
  "addition","subtraction","math","multiplication","geometry","science","books","newsela","learn","learning","division","khan academy", "mathematics", "maths", "fun"
];
var thing = things[Math.floor(Math.random()*things.length)];
  var random = things[Math.floor(Math.random()*things.length)];
  
  document.querySelector("link[rel='icon']").href = "https://fun.ajh499.repl.co/google.ico";
  document.querySelector('title').textContent = thing + " " + random + " - Google Search";
  
  } else if (localStorage.getItem("google") === "class") {
  var things = ["Classes", "To do", "Calendar"]
  var thing = things[Math.floor(Math.random()*things.length)];
   document.querySelector('title').textContent = thing;
  document.querySelector("link[rel='icon']").href = "/favicon.png";
  }