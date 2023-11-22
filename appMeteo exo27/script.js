// Exercice 27 API et FETCH :
// Url météo pour récupérer la météo avec le nom d'une ville  :
// https://api.openweathermap.org/data/2.5/weather?q=ville&appid=6f88826d767f323ad19cd282444924e9
// Partie HTML :
// Créer une page HTML avec les éléments suivants :
// -Un paragraphe (id=nom),
// -Un paragraphe (id=temps),
// -Un paragraphe (id=temperature)
// -Ajouter un input text (id=ville),
// -Ajouter un bouton (id=bt)
// Partie JS :
// -en utilisant le code ci-dessus :
// -Récupérer les 3 paragraphes HTML,
// -Passer un nom de ville valide  (à la place de ville dans la variable ville)
// -Récupérer depuis le json les données suivantes :
//       name(nom de ville),
//       main.temp (météo en degrés Kelvin),
//       weather.main (le temps qu'il fait)
// -Afficher dans la page dans les paragraphes les données correspondantes.
// -Convertir la température en degrés Celcius.
// -Ajouter un écouteur d'événement click  sur le bouton qui va :
// -Récupérer la valeur de l'input et la passer dans l'url (à la place de ville),
// -Exécuter le code de partie non Bonus (mais avec la ville saisie dans l'input)
// -Gérer si le code est 404 (reponse.status == 404) et afficher dans la page la ville n'existe pas. 
let url = "https://api.openweathermap.org/data/2.5/weather?q=ville&appid=6f88826d767f323ad19cd282444924e9";

let meteoName = document.getElementById("nom");
let meteoTemps = document.getElementById("temps");
let meteoTemperature = document.getElementById("temperature");
let villeInput= document.getElementById('ville');
let btnValider = document.getElementById('bt');

btnValider.addEventListener("click", meteoDeLaVille);


function meteoDeLaVille() {
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + villeInput.value + "&appid=6f88826d767f323ad19cd282444924e9")
                .then(async reponse=> {
                  if (reponse.status == 200){
                        const jsonDoc = await reponse.json();
                        console.log(jsonDoc);

                        let villeApi = jsonDoc.name;
                        let weatherApi = jsonDoc.weather[0].description;
                        let temperatureApi = (jsonDoc.main.temp-273.5).toFixed(1);
                        console.log(temperatureApi);

                        meteoName.textContent = villeApi;
                        meteoTemps.textContent = weatherApi;
                        meteoTemperature.textContent = temperatureApi
                    } else  {
                    meteoName.textContent = "Cette ville n'exite pas, veuillez entre une ville valide"
                    }
                  });
}




