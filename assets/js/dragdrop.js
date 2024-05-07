import { swipe } from "./swipe.js";

const listItems = document.querySelectorAll(".task");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

listItems.forEach((listItem) => {
    listItem.addEventListener("dragstart", (event) => {
        console.log("drag start");
        draggedItem = listItem;
        setTimeout(() => {
            event.target.classList.add("dragging");
        }, 0);
    });


    listItem.addEventListener("dragend", (event) => {
        console.log("drag end");
        draggedItem = null;
        setTimeout(() => {
            event.target.classList.remove("dragging");
        }, 0);
    });
    // Événements tactiles
    listItem.addEventListener("touchstart", (event) => {
        console.log("drag start");
        draggedItem = listItem;
        console.log(draggedItem);
        setTimeout(() => {
            event.target.classList.add("dragging");
        }, 0);
        swipe(true);
    });

    listItem.addEventListener("touchend", (event) => {
        console.log("drag end");
        draggedItem = null;
        setTimeout(() => {
            event.target.classList.remove("dragging");
        }, 0);
        swipe(true);
    });
});

lists.forEach((list) => {
    list.addEventListener("dragenter", (event) => {
        event.preventDefault();
        list.classList.add("zonetasks");
    });

    list.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    list.addEventListener("dragleave", (event) => {
        list.classList.remove("zonetasks");
    });

    list.addEventListener("drop", (event) => {
        list.appendChild(draggedItem);
        list.classList.remove("zonetasks");
    });
    // Événements tactiles
    list.addEventListener("touchstart", (event) => {
        console.log("touch start");
        event.preventDefault();
        list.classList.add("zonetasks");
    });
    list.addEventListener("touchmove", (event) => {
        console.log("touch move");
        event.preventDefault();
    });
    list.addEventListener("touchend", (event) => {
        console.log("touch end");
        event.preventDefault();
            list.appendChild(draggedItem);
        list.classList.remove("zonetasks");
    });
});