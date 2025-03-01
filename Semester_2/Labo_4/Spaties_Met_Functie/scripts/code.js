// De functie maakMetSpaties voegt spaties toe tussen elk karakter van de inputtekst
const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      result += inputText[i];  // Voeg het karakter toe
      if (i !== inputText.length - 1) {
        result += " ";  // Voeg een spatie toe als het niet het laatste karakter is
      }
    }
    return result;
  };
  
  // Setup functie die wordt uitgevoerd zodra de pagina is geladen
  const setup = () => {
    // Test de functie met een voorbeeld
    const inputText = "Hallo";
    const outputText = maakMetSpaties(inputText);
  
    // Toon het resultaat in de console
    console.log(outputText);
  
    // Toon het resultaat ook in een HTML element (bijvoorbeeld een <p> met id="output")
    document.getElementById("output").innerText = outputText;
  }
  
  // Voer de setup functie uit zodra de pagina geladen is
  window.addEventListener("load", setup);
  