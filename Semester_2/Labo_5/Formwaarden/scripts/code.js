const setup = () => {

    document.getElementById("btnToonResultaat").addEventListener("click", toonResultaat);

}
const toonResultaat = () => {

    if(document.getElementById("chkRoker").checked) {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    let moedertaal = document.getElementsByName("moedertaal");
    for (let i = 0; i < moedertaal.length; i++) {
        if(moedertaal[i].checked){
            console.log("Moedertaal is " + moedertaal[i].value);
        }
    }

    console.log(document.getElementById("slctFavBuurland").value);

    let bestelling = document.getElementById("slctBestelling");

    for (let i = 0; i < bestelling.length; i++) {
        if(bestelling[i].selected === true){
            console.log(bestelling[i].value);
        }
    }

}

window.addEventListener("load", setup);