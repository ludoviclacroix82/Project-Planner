import {sleep} from "./fnc.js";
import {createList} from "./list.js";

//INIT DATA
const data = JSON.parse(localStorage.getItem("data") || "[]");
if (data != null) {
  data.forEach((element) => {
    const parent=document.querySelector('.'+element.state)
    createList(parent, element.name, element.description, element.date);
  });
}

//Darkmode
let darkmode = false;
const modeButton = document.querySelector("#mode");
modeButton.addEventListener("click", () => {
  if (darkmode) {
    darkmode=false
    document.documentElement.setAttribute("data-theme", "light");
    const svgs = Array.from(document.querySelectorAll(".svg"));
    svgs.forEach((svg) => {
      svg.classList.add("svgLightMode");
    });
  } else {
    darkmode=true
    document.documentElement.setAttribute("data-theme", "dark");
    const svgs = Array.from(document.querySelectorAll(".svg"));
    svgs.forEach((svg) => {
      svg.classList.add("svgDarkMode");
    });
  }
});

// const data = [
//     {
//         state:'todo',
//         name:'',
//         description:'',
//         date:''
//     },
//     {
//         state:'doing',
//         name:'',
//         description:'',
//         date:''
//     },
// ]

