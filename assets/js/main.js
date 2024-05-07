import { sleep } from "./fnc.js";
import {swipe} from "./swipe.js";

//Darkmode
document.documentElement.setAttribute('data-theme', 'light');
const svgs=Array.from(document.querySelectorAll('.svg'));
svgs.forEach(svg => {
    svg.classList.add('svgLightMode')
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

//         await sleep(1000)
//         document.documentElement.setAttribute('data-theme', 'light');
//         svgs.forEach(svg => {
//             svg.classList.remove('svgDarkMode')
//             svg.classList.add('svgLightMode')
//         });
//     }
// }
// test()