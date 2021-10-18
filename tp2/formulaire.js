function validation() {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const dateDeNaissance = document.getElementById("dateDeNaissance").value;
    const adress = document.getElementById("adress").value;
    const mail = document.getElementById("mail").value;
    

    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.display = 'none'
    document.getElementById("result").style.display = 'none'


    if (nom.length < 5) {
        document.getElementById("error").innerHTML = "Pour le nom saisissez au moins 5 caractères <br>";
    }
    if (prenom.length < 5) {
        document.getElementById("error").innerHTML += "Pour le prénom saisissez au moins 5 caractères<br>";
    }
    if (dateDeNaissance.length < 5) {
        document.getElementById("error").innerHTML += "la saisie de la date de naissance est obligatoire <br>";
    }
    if (mail.length < 5) {
        document.getElementById("error").innerHTML += "la saisie du mail est obligatoire <br>";
    }
    if (adress.length < 5) {
        document.getElementById("error").innerHTML += "la saisie d'adresse postale est obligatoire <br>";
    }

    if (document.getElementById("error").innerHTML == "") { 
        document.getElementById("result").style.display = 'block'
        document.getElementById("result").innerHTML = "WELCOME " + document.querySelector("#prenom").value;
     }else{
        document.getElementById("error").style.display = 'block'

     }

}