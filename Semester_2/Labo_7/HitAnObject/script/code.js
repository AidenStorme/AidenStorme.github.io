let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren

    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
}

const setup = () => {

    document.getElementById("btnStart").addEventListener("click", start);

}

const start = () => {

    clearInterval(global.timeoutId);
    document.getElementsByClassName("imgBomb")[0].addEventListener("click", updateScore);
    global.timeoutId = setInterval(move, 1000);
    global.score = 0;
    score.innerText = global.score;

}
const end = () => {

    clearInterval(global.timeoutId);
    window.alert(`GAME OVER\nFinal Score = ${global.score}`);

}
const updateScore = () => {
    // Check of het een bom is of niet
    let image = document.getElementsByClassName("imgBomb")[0];
    if(image.getAttribute("src") === "images/0.png"){
        global.score -= 1
        score.innerText = global.score;
        end();
    } else {
        global.score += 1;
        score.innerText = global.score;
    }
}
const move = () => {

    let image = document.getElementsByClassName("imgBomb")[0];
    let playfield=document.getElementById("playField");
    let maxLeft=playfield.clientWidth - image.offsetWidth;
    let maxHeight=playfield.clientHeight - image.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    image.style.left=left+"px";
    image.style.top=top+"px";

    // randomize image
    let randomNumber = Math.floor(Math.random() * global.IMAGE_COUNT);
    image.setAttribute("src", global.IMAGE_PATH_PREFIX + randomNumber + global.IMAGE_PATH_SUFFIX);

}

window.addEventListener("load", setup);