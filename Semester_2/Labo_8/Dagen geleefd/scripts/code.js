const setup = () => {

    const geboortedatum = new Date('Mar 13, 2004');
    const vandaag = new Date();
    console.log(geboortedatum.toDateString());
    const verschil = new Date(vandaag.getTime() - geboortedatum.getTime());
    console.log(Math.floor(verschil / (1000 * 60 * 60 * 24)));

}
window.addEventListener("load", setup);