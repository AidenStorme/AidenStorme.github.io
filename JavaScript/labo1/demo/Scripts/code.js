const setup = () => {
    let lblCursus = document.getElementById( "lblCursus");
    lblCursus.addEventListener(  "mouseover", change);
    lblCursus.addEventListener("mouseout", normal);

    letbtnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click",show);
}
window.addEventListener("load", setup);

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const normal = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "";
}

const show = () => {
    let txtName = document.getElementById("txtName");

    if (txtName.value != "")
    {
        alert(`jouw naam is ${txtName.value}`);

        console.log ("jouw naam is " + txtName.value)
    }

    else{
        alert ("gelieve naam in te vullen");
    }
}