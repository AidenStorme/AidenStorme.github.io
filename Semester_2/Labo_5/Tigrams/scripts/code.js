const setup = () => {

document.getElementById("btnBereken").addEventListener("click", tigrams);

}
const tigrams = () => {

    input = document.getElementById("txtInput").value;

    for (i = 0; i < input.length; i++) {
        if(input.substring(i,i+3).length === 3){
            console.log(input.substring(i,i+3));
        }
    }


}

window.addEventListener("load", setup);