const setup = () => {

    // Op basis van indexOf
    const text = document.getElementById('text').innerText;
    const sequence = "an";
    let count = 0;
    let position = text.indexOf(sequence);

    while (position !== -1) {
        count++;
        position = text.indexOf(sequence, position + 1);
    }

    document.getElementById('result1').innerText = `De combinatie: "${sequence}" komt ${count} keer voor in de tekst.`;

    // Op basis van lastIndexOf
    count = 0;
    position = text.lastIndexOf(sequence);

    while (position !== -1) {
        count++;
        position = text.lastIndexOf(sequence, position - 1);
    }

    document.getElementById('result2').innerText += `De combinatie: "${sequence}" komt ${count} keer voor in de tekst.`;

}

window.addEventListener("load", setup);