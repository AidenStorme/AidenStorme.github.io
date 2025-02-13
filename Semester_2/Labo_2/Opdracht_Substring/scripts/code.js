const setup = () => {

    const btnSubstring = document.getElementById('btnSubstring');
    btnSubstring.addEventListener('click', substring);

}

const substring = () => {

    const txtInput = document.getElementById('txtInput');
    const nmbStart = document.getElementById('nmbStart');
    const nmbEnd = document.getElementById('nmbEnd');
    const txtOutput = document.getElementById('txtOutput');

    const output = txtInput.value.substring(nmbStart.value, nmbEnd.value);
    console.log(output);

    txtOutput.innerHTML = output;

}

window.addEventListener("load", setup);