import { sleep } from "./fnc.js";

//Darkmode
document.documentElement.setAttribute('data-theme', 'light');
const svgs=Array.from(document.querySelectorAll('.svg'));
svgs.forEach(svg => {
    svg.classList.add('svgLightMode')
});

let initialX = 0;
let moveX = 0;
let plannerOffset = 0; // Offset initial du planner
const swipePlanner = document.querySelector('#planner');
console.log(swipePlanner.scrollWidth - swipePlanner.offsetWidth);

swipePlanner.addEventListener('touchstart', event => {
    initialX = event.touches[0].pageX;
    plannerOffset = swipePlanner.scrollLeft; 
    console.log('initialx:'+ initialX);
    console.log('plannerOffset:'+ plannerOffset);
});

swipePlanner.addEventListener("touchmove", event => {
    let currentX = event.touches[0].pageX;
    moveX = currentX - initialX;

    console.log('move:'+moveX);
    let newOffset = plannerOffset + moveX; 
    console.log('newOffset:'+ newOffset);

    if (newOffset >= 0 && newOffset <= (swipePlanner.scrollWidth - swipePlanner.offsetWidth)) {
        swipePlanner.scrollLeft = newOffset;        
    }
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