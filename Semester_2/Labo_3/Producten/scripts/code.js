const setup = () => {

    document.getElementById("btnHerberekenen").addEventListener("click", herberekenen)

}

const herberekenen = () => {

    const prijs = document.getElementsByClassName("prijs");
    const aantal = document.getElementsByClassName("aantal");
    const btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    const totaal = document.getElementById("totaal");

    let tussenTotaal;
    let volledigTotaal = 0;

    for (let i = 0; i < 3; i++) {
        
        tussenTotaal = parseFloat(prijs[i].innerHTML) * parseFloat(aantal[i].value);
        console.log(tussenTotaal)
        tussenTotaal += tussenTotaal * parseFloat(btw[i].innerHTML) / 100;

        subtotaal[i].innerHTML = tussenTotaal.toFixed(2) + " Eur";
        volledigTotaal += tussenTotaal;

    }

    totaal.innerText = volledigTotaal.toFixed(2) + " Eur";

}

window.addEventListener("load", setup);