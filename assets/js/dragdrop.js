import { swipe } from "./swipe.js";

const listItems = document.querySelectorAll(".task");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

listItems.forEach((listItem) => {
    listItem.addEventListener("dragstart", (event) => dragDropStart(event, listItem));
    listItem.addEventListener("dragend", dragDropEnd);
    listItem.addEventListener("touchstart", (event) => TouchStart(event, listItem));
    listItem.addEventListener("touchend", TouchEnd);
});

lists.forEach((list) => {
    list.addEventListener("dragenter", (event) => dragDropEnter(event, list));
    list.addEventListener("dragover", preventDefaultTouch);
    list.addEventListener("dragleave", (event) => dragDropLeave(event, list));
    list.addEventListener("drop", (event) => Drop(event, list));
    list.addEventListener("touchstart", preventDefaultTouch);
    list.addEventListener("touchmove", preventDefaultTouch);
    list.addEventListener("touchend", preventDefaultTouch);
});


function dragDropStart(event, listItem) {
    console.log("drag start");
    draggedItem = listItem;
    setTimeout(() => {
        event.target.classList.add("dragging");
    }, 0);
}

function dragDropEnd(event) {
    console.log("drag end");
    draggedItem = null;
    setTimeout(() => {
        event.target.classList.remove("dragging");
    }, 0);
}

function TouchStart(event, listItem) {
    console.log("touch start");
    draggedItem = listItem;
    console.log(draggedItem);
    setTimeout(() => {
        event.target.classList.add("dragging");
    }, 0);
    swipe(true); // Appel de la fonction swipe si nécessaire
}

function TouchEnd(event) {
    console.log("touch end");
    draggedItem = null;
    setTimeout(() => {
        event.target.classList.remove("dragging");
    }, 0);
    swipe(true); // Appel de la fonction swipe si nécessaire
}

function Drop(event, list) {
    list.appendChild(draggedItem);
    list.classList.remove("zonetasks");
}

function dragDropEnter(event, list) {
    event.preventDefault();
    list.classList.add("zonetasks");
}

function dragDropLeave(event, list) {
    list.classList.remove("zonetasks");
}

function preventDefaultTouch(event) {
    event.preventDefault();
}

