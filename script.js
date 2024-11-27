function criptareCesar(text, cheie) {
    var rezultat = " ";
    for*let i=0; i< text.length; i++) {
        let litera= text[i];
        if(litera.match(/[a-zA-Z]/))
    }


}

function cripteaza() {
    const text = document.getElementById("text-intrare").value;
    console.log("input text: ", text);
    const cheie = parseint(document.getElementById("cheie-criptare").value);
    if (isNun(cheie) ) {
        document.getElementById("rezultat").innerText="Nu ai introdus o cheie valida";
        alert("Nu ai introdus o cheie valida");
        return;
    }

    const rezultat = criptareCesar(text, cheie);
    document.getElementById("rezultat").innerText = rezultat;


}