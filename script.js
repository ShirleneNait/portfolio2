/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Hello 🌎");

const display = document.getElementById("motivato");

const motivation = [
  {
    quote:  "Do not wait for inspiration. It comes while working.",
    person: "Henri Matisse",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    person: "John Johnson",
  },
  {
    quote: "Use the strobe function to disorientate your attacker",
    person: "Flashlight",
  },
  {
    quote: "Before software can be reusable it first has to be usable",
    person: "Ralph Johnson",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    person: "Kent Beck",
  },
];

function motivateMe() {
  const listLength = motivation.length;
  const randVal = motivation[Math.floor(Math.random() * listLength)];
  display.innerHTML = `<blockquote>"${randVal.quote}"</blockquote><cite>${randVal.person}</cite>`;
}

motivateMe();

var changeThemeButton = document.querySelector("#change-theme");

changeThemeButton.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");
  console.log(document.body.classList.contains("dark-theme"));
});