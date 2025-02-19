const setup = () => {

    belangrijkElementen = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < belangrijkElementen.length; i++) {
        belangrijkElementen[i].className = "belangrijk opvallend";
    }

}

window.addEventListener("load", setup);