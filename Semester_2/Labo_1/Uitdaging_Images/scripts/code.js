const setup = () => {

    let btnAdd = document.getElementById("btnAdd");

    btnAdd.addEventListener("click", imgAdder)

}

const imgAdder = () => {

    txtInput = document.getElementById("txtInput").value;

    const div = document.getElementById("divImages");

    div.innerHTML += "<img src='" + txtInput + "' alt='image'>";

}

window.addEventListener("load", setup);