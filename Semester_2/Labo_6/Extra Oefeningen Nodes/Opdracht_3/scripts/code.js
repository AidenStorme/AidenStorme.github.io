const setup = () => {

    document.getElementById("btnAdd").addEventListener("click", add);

}

const add = () => {

    let div = document.getElementById("myDIV");
    let text = document.getElementById("txtInput").value;
    let newParagraaf = document.createElement("p");
    let newText = document.createTextNode(text);
    
    newParagraaf.appendChild(newText);
    div.appendChild(newParagraaf);

}

window.addEventListener("load", setup);