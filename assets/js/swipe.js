/**
 * Swipe : gère le défilement horizontal 
 * Les variables initialX, moveX et plannerOffset sont déclarées pour stocker les positions initiales et de déplacement lors de l'interaction tactile.
 * écouteur d'événements  touchstart touchmove
 * @param {*} reverse détermine la direction du défilement. -- boolean true : drag&drop ; false swipe noraml 
 */
export function swipe(reverse) {
    let initialX, moveX, plannerOffset;
    const swipePlanner = document.querySelector('#planner');
    const parentNavPoint = document.querySelector('.points')
    const navPoints = parentNavPoint.querySelectorAll('.point');
    parentNavPoint.children[0].classList.add('navColor');
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

        let screenWidth = swipePlanner.scrollWidth - swipePlanner.offsetWidth

        if (newOffset >= 0 && newOffset <= screenWidth) {
            swipePlanner.scrollLeft = newOffset;
            
            navPoint(swipePlanner.offsetWidth,newOffset,navPoints)
       
        }

    });
}
/**
 * Met à jour l'indication de la zone du swipe dans les points de navigation.
 * @param {number} offsetWidth - Largeur du conteneur.
 * @param {number} newOffset - Nouvelle position de défilement.
 * @param {NodeList} nav - Liste des points de navigation.
 */
function navPoint(offsetWidth, newOffset, nav) {
    // taille du conainer (planner)
    const containerWidth = offsetWidth;
    // Calcul de l'index du conteneur actuel basé sur la position de défilement
    const containerIndex = Math.round(newOffset / containerWidth);
    
    // Met à jour les classes de couleur des points de navigation en fonction de l'index du conteneur actuel
    nav.forEach((point, index) => {
        if (index === containerIndex) {
            point.classList.add('navColor');
        } else {
            point.classList.remove('navColor');
        }
    });
}