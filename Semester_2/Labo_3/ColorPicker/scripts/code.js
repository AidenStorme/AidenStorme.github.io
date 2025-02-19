const setup = () => {

    const box = document.getElementById("box");
    box.style.background = "rgb(255, 0, 255)";

    document.getElementById("inputRed").addEventListener("change", colorChange);
    document.getElementById("inputRed").addEventListener("input", colorChange);

    document.getElementById("inputGreen").addEventListener("change", colorChange);
    document.getElementById("inputGreen").addEventListener("input", colorChange);

    document.getElementById("inputBlue").addEventListener("change", colorChange);
    document.getElementById("inputBlue").addEventListener("input", colorChange);


}

const colorChange = () => {

    const redValue = document.getElementById("redValue");
    const redSlider = document.getElementById("inputRed");

    const greenValue = document.getElementById("greenValue");
    const greenSlider = document.getElementById("inputGreen");

    const blueValue = document.getElementById("blueValue");
    const blueSlider = document.getElementById("inputBlue");

    const box = document.getElementById("box");

    redValue.innerText = redSlider.value;
    greenValue.innerText = greenSlider.value;
    blueValue.innerText = blueSlider.value;
    box.style.background = "rgb(" + redSlider.value + ", " + greenSlider.value + ", " + blueSlider.value + ")";
}

window.addEventListener("load", setup);