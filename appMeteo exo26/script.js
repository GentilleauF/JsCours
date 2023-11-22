let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9";
let ville=0;


const apiMeteo = fetch(url)
                    .then(async reponse=> {
                        console.log(reponse);
                        const jsonDoc = await reponse.json();
                        console.log(jsonDoc);32250
                        let temperature = jsonDoc.main.temp;
                        let ville = jsonDoc.name;
                        let coordonnees = "Longitude: "+ jsonDoc.coord.lat +"  &  Latitude: "+ jsonDoc.coord.lon
                        let img = jsonDoc.weather[0].icon
                        console.log(img);

                        meteoDisplay = document.getElementById('meteo-screen');
                        let temp = document.createElement('p');
                        let city = document.createElement('p');
                        let coord = document.createElement('p');
                        let image = document.createElement('img');
                        image.src = `https://openweathermap.org/img/wn/${img}@2x.png` 
                        temp.textContent ="Il fait: " + (temperature-273.5).toFixed(1) + " Degrés"
                        city.textContent  = ville;
                        coord.textContent = coordonnees;
                        coord.textContent = coordonnees;

                        meteoDisplay.appendChild(city);
                        meteoDisplay.appendChild(coord);
                        meteoDisplay.appendChild(temp);
                        meteoDisplay.appendChild(image);

                    });

