const setup = () => {

    document.getElementById("btnButton2").addEventListener("click", changeColor1);

}

const changeColor1 = () => {

    const button2 = document.getElementById("btnButton2");
    let i = 0;

    if(i === 0){
        button2.style.backgroundColor = "Black";
        i = 1;
    } else{
        button2.style.backgroundColor = "Blue";
        i = 0;
    }

}

window.addEventListener("load", setup);