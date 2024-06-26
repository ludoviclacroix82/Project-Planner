
import { swipe } from "./swipe.js";
import { sleep } from "./fnc.js";
import { createList, form, closeForm, addForm } from "./list.js";
import { sort } from "./sort.js";



//INIT DATA
const data = JSON.parse(localStorage.getItem("data") || "[]");
if (data != null) {
  data.forEach((element) => {
    const parent=document.querySelector('#'+element.state)
    createList(parent, element.name, element.description, element.date, element.taskID);
  });
}

const index = JSON.parse(localStorage.getItem("index") || 0);
if (index == 0) {
  localStorage.setItem('index', index)
}

//INIT SWIPE
swipe()


//INIT SORT
sort()

//INIT ADD TASK
document.querySelector('#addTodo').addEventListener('click', () => {
  form('todo');
})
document.querySelector('#addDoing').addEventListener('click', () => {
  form('doing');
})
document.querySelector('#addDone').addEventListener('click', () => {
  form('done');
})
document.querySelector('#closeForm').addEventListener('click', () => {
  closeForm();
})
document.querySelector('#addButton').addEventListener('click', () => {
  addForm();
})

//Darkmode Tasha's changes 
let darkmodeChoice = localStorage.getItem('darkmode');
if (darkmodeChoice == null) {
  localStorage.setItem('darkmode', false)
  lightmode()
} else if (darkmodeChoice == 'true') {
  darkmode()
} else {
  lightmode()
}

const modeButton = document.querySelector("#mode");
modeButton.addEventListener("click", () => {
  darkmodeChoice = localStorage.getItem('darkmode');
  if (darkmodeChoice == 'true') {
    lightmode()
  } else {
    darkmode()
  }
})


// const modeButton = document.querySelector("#mode");
// modeButton.addEventListener("click", () => {

//   if (darkmode) {
//     darkmode = false;
//     document.documentElement.setAttribute("data-theme", "light");
//     const logo = document.querySelector(".logo");
//     const mode = document.querySelector(".mode");
//     const svgs = Array.from(document.querySelectorAll(".svg"));
//     svgs.forEach((svg) => {
//       svg.classList.remove("svgDarkMode");//remove class to change color to light mode
//       svg.classList.add("svgLightMode");
//     });
//     //tasha
//     logo.src = "assets/images/logo-light.svg";
//     mode.src = "assets/images/icons/moon.svg";
//   } else {
//     darkmode = true;
//     document.documentElement.setAttribute("data-theme", "dark");
//     svgs.forEach((svg) => {
//       svg.classList.remove("svgLightMode");
//       svg.classList.add("svgDarkMode");
//     });
//     logo.src = "assets/images/logo-dark.svg";
//     mode.src = "assets/images/icons/sun.svg";
//   }
// })

export function lightmode() {
  const logo = document.getElementsByClassName("logo")[0];
  const mode = document.querySelector(".mode");
  const svgs = Array.from(document.querySelectorAll(".svg"));
  localStorage.setItem('darkmode', false)
  document.documentElement.setAttribute("data-theme", "light");
  svgs.forEach((svg) => {
    svg.classList.add("svgLightMode");
    svg.classList.remove("svgDarkMode");

  });
  logo.src = "assets/images/logo-light.svg";
  mode.src = "assets/images/icons/moon.svg";
}

export function darkmode() {
  const logo = document.getElementsByClassName("logo")[0];
  const mode = document.querySelector(".mode");
  const svgs = Array.from(document.querySelectorAll(".svg"));
  localStorage.setItem('darkmode', true)
  document.documentElement.setAttribute("data-theme", "dark");
  svgs.forEach((svg) => {
    svg.classList.add("svgDarkMode");//remove class to change color to light mode
    svg.classList.remove("svgLightMode");
  });
  //tasha
  logo.src = "assets/images/logo-dark.svg";
  mode.src = "assets/images/icons/sun.svg";
}

