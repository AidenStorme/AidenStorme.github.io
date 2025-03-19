const setup = () => {

    // Met queryselectorall
    let p = document.querySelectorAll("p");
    p.forEach((p, index) => {
        p.textContent = "Good Job!";
    });

}

window.addEventListener("load", setup);