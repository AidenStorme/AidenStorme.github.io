let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    const selected = document.getElementById("lstPersonen").selectedIndex;

    const voornaam = document.getElementById("txtVoornaam").value;
    const familienaam = document.getElementById("txtFamilienaam").value;
    const geboortedatum = document.getElementById("txtGeboorteDatum.");
    const email = document.getElementById("txtEmail").value;
    const aantalKinderen = document.getElementById("txtAantalKinderen").value;

    if(voornaam !== null && familienaam !== null && geboortedatum === null && email !== null && aantalKinderen !== null){
        if(selected === -1){
            let persoon = {
                voornaam: voornaam,
                familienaam: familienaam,
                geboorteDatum: geboortedatum,
                email: email,
                aantalKinderen: aantalKinderen,
            }
            personen.push(persoon);
            const select = document.getElementById("lstPersonen");

            const fullName = `${persoon.voornaam} ${persoon.familienaam}`;
            const option = new Option(fullName, fullName);
            select.add(option);
        }else {
            document.getElementById("txtVoornaam").innerText = personen[selected].voornaam;
            personen[selected].voornaam = voornaam;
            personen[selected].familienaam = familienaam;
            personen[selected].geboorteDatum = geboortedatum;
            personen[selected].email = email;
            personen[selected].aantalKinderen = aantalKinderen;

            const select = document.getElementById("lstPersonen");
            const fullName = `${voornaam} ${familienaam}`;
            select.options[selected].text = fullName;
            select.options[selected].value = fullName;
        }
    }


        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    const voornaam = document.getElementById("txtVoornaam").value = "";
    const familienaam = document.getElementById("txtFamilienaam").value = "";
    const geboortedatum = document.getElementById("txtGeboorteDatum.").value = "";
    const email = document.getElementById("txtEmail").value = "";
    const aantalKinderen = document.getElementById("txtAantalKinderen").value = "";

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};
const select = () => {

    const voornaam = document.getElementById("txtVoornaam");
    const familienaam = document.getElementById("txtFamilienaam");
    const geboortedatum = document.getElementById("txtGeboorteDatum.");
    const email = document.getElementById("txtEmail");
    const aantalKinderen = document.getElementById("txtAantalKinderen");

    const selected = document.getElementById("lstPersonen").selectedIndex;

    voornaam.value = personen[selected].voornaam;
    familienaam.value = personen[selected].familienaam;
    geboortedatum.value = personen[selected].geboorteDatum;
    email.value = personen[selected].email;
    aantalKinderen.value = personen[selected].aantalKinderen;
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", select);
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);