//PASOS PARA CONFIGURAR UN CLIENTE CON JS PURO DE UN API REST
//PASOS PARA CONSUMIR UN API REST UTILIZANDO JS

//1. Conocer la URL(endpoint) del API y almacenarla en una variable
let urlGET = "https://api.spotify.com/v1/artists/1XucD9urBtUadfCNvZc4Pp/top-tracks?market=us";

//1.1 Identificar la URL del servicio que nos entregara el TOKEN
let urlPOST = "https://accounts.spotify.com/api/token";

//1.2 Definimos parametros
let llave1 = "grant_type=client_credentials";
let llave2 = "client_id=fa6a11453f1649acb64a6f93b8846f08";
let llave3 = "client_secret=7a5a6a67b3db4171bd7be13ea21d2b41";

let parametrosPOST = {
    method: "POST",
    headers: { "Content-Type":   'application/x-www-form-urlencoded' },
    body: `${llave1}&${llave2}&${llave3}`
}

//1.1.3 Utilizar fetch para conectarnos con el API
fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos));

function obtenerToken(datos) {
    let token = datos.token_type + " " + datos.access_token;
    let parametrosGET = {
        method: "GET",
        headers: { Authorization: token }
    }
    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => pintarInformacion(datos));
}

function pintarInformacion(datos) {
    console.log(datos);

    let titulo = document.getElementById("titulo");
    let imagen = document.getElementById("imagen");
    let audio = document.getElementById("audio");

    let titulo1 = document.getElementById("titulo1");
    let imagen1 = document.getElementById("imagen1");
    let audio1 = document.getElementById("audio1");

    let titulo2 = document.getElementById("titulo2");
    let imagen2 = document.getElementById("imagen2");
    let audio2 = document.getElementById("audio2");

    titulo.textContent = datos.tracks[0].name;
    imagen.src = datos.tracks[0].album.images[0].url;
    audio.src = datos.tracks[0].preview_url;

    titulo1.textContent = datos.tracks [1].name;
    imagen1.src = datos.tracks[1].album.images[0].url;
    audio1.src = datos.tracks[1].preview_url;

    titulo2.textContent = datos.tracks[4].name;
    imagen2.src = datos.tracks[4].album.images[0].url;
    audio2.src = datos.tracks[4].preview_url;
    console.log(datos.tracks[1].preview_url);
    console.log(datos.tracks[0].preview_url);
    console.log(datos.tracks[2].preview_url);
}


