import { swipe } from "./swipe.js";

/**
 * Drag drop les task dans les zone todo - doing - done
 */
export function dragDrop() {
    const listItems = document.querySelectorAll(".task");
    const lists = document.querySelectorAll(".list");

    let draggedItem = null;

    // Ajout d'un écouteur d'événements à chaque élément de liste pour "dragstart" et "dragend"
    listItems.forEach((listItem) => {
        listItem.addEventListener("dragstart", (event) => {
            console.log("drag start");
            draggedItem = listItem;
        });

        listItem.addEventListener("dragend", (event) => {
            console.log("drag end");
            draggedItem = null;
        });
        
        // Événements tactiles
        listItem.addEventListener("touchstart", (event) => {
            console.log("drag start");
            draggedItem = listItem;
            console.log(draggedItem);
            swipe(true);
        });

        listItem.addEventListener("touchend", (event) => {
            console.log("drag end");
            draggedItem = null;
            swipe(true);
        });
    });

    // Écouteurs d'événements pour les listes
    lists.forEach((list) => {
        list.addEventListener("dragenter", (event) => {
            event.preventDefault();
        });

        list.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        list.addEventListener("dragleave", (event) => {
            event.preventDefault();
        });
        list.addEventListener("drop", (event) => {
            if (draggedItem != null)
                list.appendChild(draggedItem);
        });

        // Événements tactiles
        list.addEventListener("touchstart", (event) => {
            console.log("touch start");
            event.preventDefault();
        });
        list.addEventListener("touchmove", (event) => {
            console.log("touch move");
            event.preventDefault();
        });
        list.addEventListener("touchend", (event) => {
            console.log("touch end");
            event.preventDefault();
            if (draggedItem != null)
                list.appendChild(draggedItem);
        });
    });
}
