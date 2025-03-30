let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGE_PREFIX: "images/",
    IMAGE_SUFFIX: ".jpg",
    IMAGES: ['kaart1', 'kaart2', 'kaart3', 'kaart4', 'kaart5', 'kaart6'],
    executed: 0,
    flippedCards: [],
    matchedPairs: 0
}

const setup = () => {

    document.getElementById("btnStart").addEventListener("click", start);
    document.getElementById("btnReset").addEventListener("click", reset);

}

const start = () => {

    const cardContainer = document.getElementById("cardContainer");
    let cardImages = [...global.IMAGES, ...global.IMAGES];
    cardImages = shuffle(cardImages);

    const score = document.getElementById("score");
    score.innerText = `${global.matchedPairs}`

    if(global.executed === 0){
        for (let i = 0; i < cardImages.length; i++) {
            const img = document.createElement("img");
            img.src = `${global.IMAGE_PREFIX}achterkant${global.IMAGE_SUFFIX}`;
            img.alt = `Card`;
            img.dataset.index = `${i}`;
            img.dataset.image = cardImages[i];
            img.addEventListener("click", turnCard);
            cardContainer.appendChild(img);

            global.executed = 1;
        }
    }

}
const reset = () => {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ""; // Clear previous game
    global.executed = 0;
    global.matchedPairs = 0;
    global.flippedCards = [];
    const score = document.getElementById("score");
    score.innerText = `${global.matchedPairs}`

    start();
}
const turnCard = (event) => {
    let clickedCard = event.target;

    if (global.flippedCards.length === 2 || clickedCard.classList.contains("matched")) return;

    clickedCard.src = `${global.IMAGE_PREFIX}${clickedCard.dataset.image}${global.IMAGE_SUFFIX}`;
    global.flippedCards.push(clickedCard);

    if (global.flippedCards.length === 2) {
        checkMatch();
    }
}
const checkMatch = () => {
    let [card1, card2] = global.flippedCards;
    const score = document.getElementById("score");

    if (card1.dataset.image === card2.dataset.image) {
        // Match found
        card1.classList.add("matched");
        card2.classList.add("matched");
        global.matchedPairs++;
        score.innerText = global.matchedPairs;

        if (global.matchedPairs === global.AANTAL_KAARTEN) {
            setTimeout(() => alert("You win!"), 500);
        }
        global.flippedCards = [];
    } else {
        // No match, flip them back after a short delay
        setTimeout(() => {
            card1.src = `${global.IMAGE_PREFIX}achterkant${global.IMAGE_SUFFIX}`;
            card2.src = `${global.IMAGE_PREFIX}achterkant${global.IMAGE_SUFFIX}`;
            global.flippedCards = [];
        }, 1000);
    }
};
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

window.addEventListener("load", setup);