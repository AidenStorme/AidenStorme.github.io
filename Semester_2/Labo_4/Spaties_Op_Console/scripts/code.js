const setup = () => {

    document.getElementById("btnSubmit").addEventListener("click", spaties);

}

const spaties = () => {

    txtInput = document.getElementById("txtInput").value;
    console.log(txtInput.split('').join(' '));

}

window.addEventListener("load", setup);