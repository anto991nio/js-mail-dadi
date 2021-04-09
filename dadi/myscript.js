alert("Proteggi il pianeta terra, se il tuo numero sarà maggiore avrai vinto altrimenti le macchine prenderanno il controllo.");

var numeroGiocatore = Math.ceil(Math.random() * 6).toFixed();
var numeroComputer = Math.ceil(Math.random() * 6).toFixed();

console.log( " Il tuo numero è" + " "+ numeroGiocatore);
document.getElementById("tuonumero").innerHTML = "Il tuo numero è" + "  "+ numeroGiocatore;
console.log(" Il numero del computer è " + " "+ numeroComputer);
document.getElementById("numerocpu").innerHTML = "Il tuo numero è" + "  "+ numeroComputer;

if(numeroGiocatore > numeroComputer){
    console.log("Hai vinto!! Il pianeta è salvo");
    document.getElementById("risultato").innerHTML = "Hai vinto!! Il pianeta è salvo";
}

else if(numeroGiocatore < numeroComputer){

    console.log("Scappaaaaa");  
    document.getElementById("risultato").innerHTML = "Scappaaaaa";
}

else{
    console.log("Non è ancora finita");
    document.getElementById("risultato").innerHTML = "Non è ancora finita";
}
