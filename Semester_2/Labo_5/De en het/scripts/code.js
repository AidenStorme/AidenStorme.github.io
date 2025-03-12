const setup = () => {

    document.getElementById("btnChange").addEventListener("click", change);

}
const change = () => {

    input = document.getElementById("txtInput").value;

    let woorden = input.toLowerCase().split(" ");
    let nieuweZin = [];

    for (let i = 0; i < woorden.length; i++) {
        if(woorden[i] === "de"){
            nieuweZin.push("het")
        } else{
            nieuweZin.push(woorden[i]);
        }
    }
    nieuweZin = nieuweZin.join(" ");
    console.log(nieuweZin);
}

window.addEventListener("load", setup);