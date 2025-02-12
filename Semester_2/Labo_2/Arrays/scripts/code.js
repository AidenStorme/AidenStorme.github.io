const familieleden = ['Aiden', 'Mama', 'Papa', 'Broer', 'Zus'];

const setup = () => {

    console.log(familieleden.length);
    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);
    voegNaamToe(prompt('Vul een naam in.'));

}
window.addEventListener("load", setup);

const voegNaamToe = (naam) => {
    familieleden.push(naam);
    console.log(familieleden.join(' '));
}