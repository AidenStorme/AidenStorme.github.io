const setup = () => {
	let btnValideer = document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	const isVoornaamValid = valideerVoornaam();
	const isNaamValid = valideerNaam();
	const isGeboortedatumValid = valideerGeboortedatum();
	const isEmailValid = valideerEmail();
	const isAantalKinderenValid = valideerAantalKinderen();

	if (isVoornaamValid && isNaamValid && isGeboortedatumValid && isEmailValid && isAantalKinderenValid) {
		console.log("true");
	} else {
		console.log("false");
	}
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className = "invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
		return false;
	} else {
		txtVoornaam.className = ""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
		return true;
	}
};

const valideerNaam = () => {
	let txtNaam = document.getElementById("txtNaam");
	let errNaam = document.getElementById("errNaam");
	let naam = txtNaam.value.trim();
	if (naam === "") {
		txtNaam.className = "invalid";
		errNaam.innerHTML = "Naam is verplicht";
		return false;
	} else if (naam.length > 50) {
		txtNaam.className = "invalid";
		errNaam.innerHTML = "max. 50 karakters";
		return false;
	} else {
		txtNaam.className = "";
		errNaam.innerText = "";
		return true;
	}
};

const valideerGeboortedatum = () => {
	let txtGeboorte = document.getElementById("txtGeboorte");
	let errGeboorte = document.getElementById("errGeboorte");
	let geboorteDatum = txtGeboorte.value.trim();
	let delen = geboorteDatum.split("-");

	if (geboorteDatum === "") {
		txtGeboorte.className = "invalid";
		errGeboorte.innerText = "Geboortedatum is verplicht";
		return false;
	} else if (delen.length !== 3 || delen[0].length !== 4 || delen[1].length !== 2 || delen[2].length !== 2) {
		txtGeboorte.className = "invalid";
		errGeboorte.innerText = "Geboortedatum moet in het formaat YYYY-MM-DD zijn";
		return false;
	} else {
		txtGeboorte.className = "";
		errGeboorte.innerText = "";
		return true;
	}
};

const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	let atIndex = email.indexOf("@");

	if (email === "") {
		txtEmail.className = "invalid";
		errEmail.innerText = "Email is verplicht";
		return false;
	} else if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
		txtEmail.className = "invalid";
		errEmail.innerText = "Geen geldig email adres";
		return false;
	} else {
		txtEmail.className = "";
		errEmail.innerText = "";
		return true;
	}
};

const valideerAantalKinderen = () => {
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalKinderen");
	let aantalKinderenGetal = parseInt(txtAantalKinderen.value);

	if (isNaN(aantalKinderenGetal) || aantalKinderenGetal < 0) {
		txtAantalKinderen.className = "invalid";
		errAantalKinderen.innerText = "Is geen positief getal";
		return false;
	} else if (aantalKinderenGetal >= 99) {
		txtAantalKinderen.className = "invalid";
		errAantalKinderen.innerText = "Is te vruchtbaar";
		return false;
	} else {
		txtAantalKinderen.className = "";
		errAantalKinderen.innerText = "";
		return true;
	}
};

window.addEventListener("load", setup);