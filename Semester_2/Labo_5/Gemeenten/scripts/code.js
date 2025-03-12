const setup = () => {

    let gemeenten = [];
    let input;

    let dropdown = document.getElementById("gemeenten");

    do {
        input = prompt("Voer een gemeente in: ");
        if(input !== "stop") {

            dropdown.innerHTML += `<option value=${input}>${input}</option>`;

        }
    } while (input !== "stop")

}
window.addEventListener("load", setup);