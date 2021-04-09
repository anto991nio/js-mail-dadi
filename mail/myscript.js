/* Impostiamo una lista con email che hanno l'autorizzazione ad accedere */

var listaMail  = [ "antonio@gmail.com" , "marco@mail.com" , "luca@libero.it" , "mirko@gmail.com" , "lorenzo@virgilio.it" , "luciano@uahoo.it"];

console.log(listaMail);


/* Chiediamo all'utente la sua email per identificarsi */
var mailUser = prompt("Inserisci la tua email per poter accedere");

console.log(mailUser);


/* Controlliamo attraverso il ciclo for se la mail inserita è corretta. Nel caso lo sia permetteràl'accesso */
mailNotExist = false;

for (var i = 0; i < listaMail.length ; i++){
    var mailCorrect = listaMail[i]

    if( mailCorrect === mailUser){
        mailNotExist = true;
        console.log("L'email inserita è corretta e puoi accedere");
        document.getElementById("mailAccess").innerHTML = "L'email è corretta."+ " " + "Benventuto" + "  "+ mailUser;
    }
}

/* nel caso non fosse corretta inviterà l'utente a riprovare. */

if(!mailNotExist){
    alert("L'email che hai inserito non è corretta. Riprova");
}