
import {swipe} from "./swipe.js";
import {sleep} from "./fnc.js";
import {createList,form,closeForm,addForm} from "./list.js";

//INIT DATA
const data = JSON.parse(localStorage.getItem("data") || "[]");
if (data != null) {
  data.forEach((element) => {
    const parent=document.querySelector('.'+element.state)
    createList(parent, element.name, element.description, element.date);
  });
}

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
    logo.src = "assets/images/logo-dark.svg";//change logo
  }
});

swipe();

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

