
import {swipe} from "./swipe.js";
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

//Darkmode Tasha's changes 
let darkmode = false;
const modeButton = document.querySelector("#mode");
const logo = document.getElementsByClassName("logo")[0];
const svgs = Array.from(document.querySelectorAll(".svg"));

document.addEventListener("DOMContentLoaded", () => {
  svgs.forEach((svg) => {
    svg.classList.add("svgLightMode");
  });
});

modeButton.addEventListener("click", () => {
  
  if (darkmode) {
    darkmode=false;
    document.documentElement.setAttribute("data-theme", "light");
      svgs.forEach((svg) => {
      svg.classList.remove("svgDarkMode");//remove class to change color to light mode
      svg.classList.add("svgLightMode");
    });
    //tasha
    logo.src = "assets/images/logo-light.svg";
  } else {
    darkmode=true;
    document.documentElement.setAttribute("data-theme", "dark");
      svgs.forEach((svg) => {
      svg.classList.remove("svgLightMode");
      svg.classList.add("svgDarkMode");
      
    });
    logo.src = "assets/images/logo-dark.svg";
  }
});

swipe();
// async function test() {
//     while(true) {
//         await sleep(1000)
//         document.documentElement.setAttribute('data-theme', 'dark');
//         svgs.forEach(svg => {
//             svg.classList.add('svgDarkMode')
//             svg.classList.remove('svgLightMode')
//         });
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

