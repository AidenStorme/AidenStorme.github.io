const setup = () => {


    const button1 = document.getElementById("btnButton1");
    const button2 = document.getElementById("btnButton2");
    const button3 = document.getElementById("btnButton3");

    button1.addEventListener("click", () => toggleColor(button1));
    button2.addEventListener("click", () => toggleColor(button2));
    button3.addEventListener("click", () => toggleColor(button3));


}

const toggleColor = (button) => {

    button.classList.toggle("active");
}

window.addEventListener("load", setup);