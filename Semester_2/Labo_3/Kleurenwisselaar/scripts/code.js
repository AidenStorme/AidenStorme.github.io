const setup = () => {

    document.getElementById("btnButton1").addEventListener("click", changeColor1);

}

const changeColor1 = () => {

    const button1 = document.getElementById("btnButton1");

    button1.style.backgroundColor = "white buttonface";

}

window.addEventListener("load", setup);