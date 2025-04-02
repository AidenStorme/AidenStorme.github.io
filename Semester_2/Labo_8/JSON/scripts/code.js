const setup = () => {

    let student1 = {
        voornaam: "Aiden",
        familienaam: "Storme",
        geboorteDatum: new Date("2004-3-13"),
        adres: {
            straat: "Diepestraat 6",
            postcode: "8970",
            gemeente: "Reningelst"
        },
        isIngeschreven: true,
        namenVanHuisdieren:["Zara", "Lily", "Fleur", "Julie", "William"],
        aantalAutos: 1
    }
    console.log(JSON.stringify(student1));

    const student2 = JSON.parse('{"voornaam":"Aiden","familienaam":"Storme","geboorteDatum":"2004-03-12T23:00:00.000Z","adres":{"straat":"Diepestraat 6","postcode":"8970","gemeente":"Reningelst"},"isIngeschreven":true,"namenVanHuisdieren":["Zara","Lily","Fleur","Julie","William"],"aantalAutos":1}');
    console.log(`Student 2, naam: ${student2.voornaam}, Woonplaats: ${student2.adres.gemeente}`);

}
window.addEventListener("load", setup);