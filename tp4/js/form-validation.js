window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    //myModal.show();

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");


        if (document.getElementById("inputNom").value.length < 5) {
            console.log("nom error");
            document.querySelector(".modal-title").textContent = "Erreur dans le formulaire"

            document.querySelector(".modal-body").innerHTML = "Pour le nom saisissez au moins 5 caractères";
            myModal.show();

        }


        else if (document.getElementById("inputPrenom").value.length < 5) {
            console.log("prenom error");

            document.querySelector(".modal-title").textContent = "Erreur dans le formulaire"

            document.querySelector(".modal-body").innerHTML = "Pour le prenom saisissez au moins 5 caractères";
            myModal.show();
        }
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    });
    let inputDate = new Date(2018, 8, 22); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
    let inputDateTimestamp = inputDate.getTime();
    let nowTimestamp = Date.now()
}

     //ajout du compteur de nombre de caractéres pour chaque champ
     document.querySelector(document).keyup(function(){
        // ajout des compteurs de caractére a coté de chaque champs de saisie 
            var nombreCaractere = document.querySelector("#inputNom").value.length;
            var msg =  " " + nombreCaractere + ' Caractère(s)';
            document.querySelector('#compteur1').text(msg);
        
            var nombreCaractere = document.querySelector("#inputPrenom").value.length;
            var msg = " "+ nombreCaractere + ' Caractère(s)';
            document.querySelector('#compteur2').text(msg);
        
            var nombreCaractere = document.querySelector("#inputDate").value.length;
            var msg =  " "+ nombreCaractere + ' Caractère(s)';
            document.querySelector('#compteur3').text(msg);
        
            var nombreCaractere = document.querySelector("#inputAdress").value.length;
            var msg = " "+ nombreCaractere + ' Caractère(s)';
            document.querySelector('#compteur4').text(msg);
            
            var nombreCaractere = document.querySelector("#inputEmail").value.length;
            var msg = " "+ nombreCaractere + ' Caractère(s)';
            document.querySelector('#compteur5').text(msg);
     
     })
     var x = document.getElementById("demo");
                  
     function getLocation() {
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
       } else { 
         x.innerHTML = "Geolocation is not supported by this browser.";
       }
     }
     
     function showPosition(position) {
       x.innerHTML = "Latitude: " + position.coords.latitude + 
       "<br>Longitude: " + position.coords.longitude;
     }

   

     // ajout des valeurs saisie dans le tableau
     document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
     .innerHTML +'<tr><td>'+localStorage.getItem("inputNom")+'</td><td>'+localStorage.getItem("inputPrenom")
     
    
     +'</td><td>'+localStorage.getItem("inputDate")+'</td><td><a href="https://maps.google.com/maps?q='
     +localStorage.getItem("gps")+'">'+localStorage.getItem("inputAdress")
    
     +'</a></td><td><a href=mailto:>'+localStorage.getItem("inputEmail")+'</a></td>';

     contactStore.add(document.querySelector("#Nom").value, 
     document.querySelector("#Prénom").value, 
     document.querySelector("#Date de naissance").value,
      document.querySelector("#Adresse").value, 
      document.querySelector("#Mail").value);
      var listecontact = contactStore.getList();
      
      for (var index in listecontact) {
       console.log(contactList[index].inputNom);
       console.log(contactList[index].inputPrenom);
       console.log(contactList[index].inputDate);
       console.log(contactList[index].inputAddress);
       console.log(contactList[index].inputEmail);
       document.querySelector("#table").innerHTML = 
       document.querySelector("#table").innerHTML + 
       "<tr><td>" +
       listecontact[index].inputNom +
       "</td><td>" +
       listecontact[index].inputPrenom +
        "</td><td>" +
        listecontact[index].inputDate +
        "</td><td>" +
        listecontact[index].inputAddress+
        "</td><td>" +
        listecontact[index].inputEmail +
        "</td><td>";
   // CODE à compléter pour insérer les autres données
       
      }
