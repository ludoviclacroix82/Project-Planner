import { swipe } from "./swipe.js";

/**
 * Drag drop les task dans les zone todo - doing - done
 */
export function dragDrop() {
    const listItems = document.querySelectorAll(".task");
    const lists = document.querySelectorAll(".list");

    let draggedItem = null;

    // Fonction pour gérer le début du glissement ou du toucher
    function DragStart(event) {
        console.log("drag start");
        draggedItem = event.target;
        console.log(event.target);
    }

    // Fonction pour gérer la fin du glissement ou du toucher
    function DragEnd(event) {
        console.log("drag end");
        draggedItem = null;
    }

    // Fonction pour gérer le dépôt d'un élément glissé
    function Drop(event) {
        event.preventDefault();
        if (draggedItem !== null)
            event.target.appendChild(draggedItem);
    }
    function DropMobile(event) {
        event.preventDefault();
        if (draggedItem !== null)
            event.target.appendChild(draggedItem);
    }
    function DragStartMobile(event) {
        console.log("drag start");
        /*draggedItem = e.targetTouches[0];
        console.log(event.target);
        swipe(true);*/

    }
    // événements pour les tasks
    listItems.forEach((listItem) => {
        listItem.addEventListener("dragstart",  DragStart);
        listItem.addEventListener("dragend", DragEnd);
        //événements tactiles 
        listItem.removeEventListener("touchstart",DragStartMobile);
        //listItem.removeEventListener("touchend", DragEnd);
    });

    // Ajouter les écouteurs d'événements pour les zone done-doing to do
    lists.forEach((list) => {
        list.addEventListener("dragenter", (event) => event.preventDefault());
        list.addEventListener("dragover", (event) => event.preventDefault());
        list.addEventListener("dragleave", (event) => event.preventDefault());
        list.addEventListener("drop", Drop);

        //événements tactiles 
        //list.addEventListener("touchstart",(event) => event.preventDefault());
        //list.addEventListener("touchmove", (event) =>event.preventDefault());
        //list.addEventListener("touchend", DropMobile);
    });
}