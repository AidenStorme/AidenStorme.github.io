let global = {
    GOOGLE_PREFIX: "https://www.google.com/search?q=",
    YOUTUBE_PREFIX: "https://www.youtube.com/results?search_query=",
    INSTAGRAM_PREFIX: "https://www.instagram.com/explore/tags/",
    TWITTER_PREFIX: "https://x.com/hashtag/",
}
let history = [];



const setup = () => {

    document.getElementById("btnGo").addEventListener("click", validate);

}

const validate = () => {

    let text = document.getElementById("txtInput").value;
    let command = text.substring(0, 2);
    let search = text.substring(2).trim();
    let url;

    switch (command) {
        case "/g": // Google
            url = `${global.GOOGLE_PREFIX}${search}`;
            window.open(url);
            cardBuilder("Google", search, url);
            break;
        case "/y": // Youtube
            url = `${global.YOUTUBE_PREFIX}${search}`;
            window.open(url);
            cardBuilder("Youtube", search, url);
            break;
        case "/i": // Instagram
            url = `${global.INSTAGRAM_PREFIX}${search}`;
            window.open(url);
            cardBuilder("Instagram", search, url);
            break;
        case "/x": // Twitter
            url = `${global.TWITTER_PREFIX}${search}`;
            window.open(url);
            cardBuilder("Twitter", search, url);
            break;
        default:
            window.alert("Given command is invalid.");
    }

}
const cardBuilder = (website, search, url) => {

    let text = document.getElementById("txtInput").value;
    let container = document.getElementById("cardContainer");

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = website;

    let cardText = document.createElement("p");
    cardText.innerText = search;
    cardText.className = "card-text";

    let cardButton = document.createElement("a");
    cardButton.href = url;
    cardButton.className = "btn btn-primary";
    cardButton.text = "Go!";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let card = document.createElement("div");
    card.className = "card col";
    card.style.width = "18rem";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);

    card.appendChild(cardBody);

    container.appendChild(card);

    // Save to local storage
    const searchHistory = {
        title: website,
        text: search,
        url: url
    }
    history.push(searchHistory);
    const stringifiedObj = JSON.stringify(history)
    localStorage.setItem(
        "History",
        stringifiedObj
    )
}
window.addEventListener("load", setup);