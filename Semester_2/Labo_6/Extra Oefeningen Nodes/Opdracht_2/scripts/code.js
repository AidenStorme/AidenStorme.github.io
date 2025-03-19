const setup = () => {

    let li = document.querySelectorAll("li");
    li.forEach((li, index) => {
        li.setAttribute("class","listitem");   
    });

}

window.addEventListener("load", setup);