let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGE_PREFIX: "images/",
    IMAGE_SUFFIX: ".jpg",
    IMAGES: ['kaart1', 'kaart2', 'kaart3', 'kaart4', 'kaart5', 'kaart6'],
    executed: 0
}

const setup = () => {

    document.getElementById("btnStart").addEventListener("click", start);

}

const start = () => {

    const cardContainer = document.getElementById("cardContainer");
    if(global.executed === 0){
        for (let i = 0; i < 12; i++) {
            const img = document.createElement("img");
            img.src = `${global.IMAGE_PREFIX}achterkant${global.IMAGE_SUFFIX}`;
            img.alt = `Card`;
            img.addEventListener("click", turnCard);
            cardContainer.appendChild(img);

            global.executed = 1;
        }
    }

}
const turnCard = () => {

}

window.addEventListener("load", setup);