import { sleep } from "./fnc.js";

//Darkmode
let darkMode = false;
const modeButton = document.querySelector("#mode");
modeButton.addEventListener ("click", () => {
    if (darkMode) {
        
    }
    document.documentElement.setAttribute('data-theme', 'light');
    const svgs = Array.from(document.querySelectorAll('.svg'));
    svgs.forEach(svg => {
        svg.classList.add('svgLightMode')
    });
});


// async function test() {
//     while(true) {
//         await sleep(1000)
//         document.documentElement.setAttribute('data-theme', 'dark');
//         svgs.forEach(svg => {
//             svg.classList.add('svgDarkMode')
//             svg.classList.remove('svgLightMode')
//         });

//         await sleep(1000)
//         document.documentElement.setAttribute('data-theme', 'light');
//         svgs.forEach(svg => {
//             svg.classList.remove('svgDarkMode')
//             svg.classList.add('svgLightMode')
//         });
//     }
// }
// test()

//Tasha header
// //dark mode

// function darkMode() {
//     const mode = document.querySelector(".mode");
//     const header = document.querySelector("header");
//     const logo = document.querySelector(".logo");
//     const nom = document.querySelector(".nom");
//     const menu = document.querySelector(".menu");
//     const body = document.querySelector("body");

//     mode.addEventListener("click", event => {
//         if (header.classList.contains("dark")) {
//             header.classList.remove("dark");
//         } else {
//             header.classList.add("dark");
//         }
//     })
// }

// darkMode();