const setup = () => {

    console.log(window.alert('Dit is een alert.'));
    console.log(window.confirm('Dit is een confirm.'));
    console.log(window.prompt('Wie bent u?'));

}
window.addEventListener("load", setup);