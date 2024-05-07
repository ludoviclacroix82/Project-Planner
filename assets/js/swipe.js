/**
 * Swipe : gère le défilement horizontal 
 * Les variables initialX, moveX et plannerOffset sont déclarées pour stocker les positions initiales et de déplacement lors de l'interaction tactile.
 * écouteur d'événements  touchstart touchmove
 * @param {*} reverse détermine la direction du défilement. -- boolean true : drag&drop ; false swipe noraml 
 */
export function swipe(reverse) {
    let initialX,moveX ,plannerOffset;
    const swipePlanner = document.querySelector('#planner');
    //console.log(swipePlanner.scrollWidth - swipePlanner.offsetWidth);

    swipePlanner.addEventListener('touchstart', event => {
        initialX = event.touches[0].pageX;
        plannerOffset = swipePlanner.scrollLeft;
        //console.log('initialx:'+ initialX);
        //console.log('plannerOffset:'+ plannerOffset);
    });

    swipePlanner.addEventListener("touchmove", event => {
        let currentX = event.touches[0].pageX;
        if (reverse)
            moveX = currentX - initialX;
        else
            moveX = initialX - currentX;

        //console.log('move:'+moveX);
        let newOffset = plannerOffset + moveX;
        //console.log('newOffset:'+ newOffset);

        if (newOffset >= 0 && newOffset <= (swipePlanner.scrollWidth - swipePlanner.offsetWidth)) {
            swipePlanner.scrollLeft = newOffset;
        }
    });
}