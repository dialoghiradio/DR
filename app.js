// ============================================
// DIALOGHI RADIO
// Gestione contenuti podcast della Home
//
// Beta 1.0.2
//
// - recupera feed Spreaker
// - crea Percorso Biblico
// - mostra ultime puntate
//
// ============================================

const feed =
"https://www.spreaker.com/show/6033837/episodes/feed";

fetch(
    "https://api.rss2json.com/v1/api.json?rss_url="
    + encodeURIComponent(feed)
)

.then(response => response.json())
.then(data => {

console.log("Feed ricevuto:", data);

if(!data.items){

console.error("Feed non disponibile");

return;

}

// ============================================
// 📖 PERCORSO BIBLICO
// ============================================

const bibbia =
document.getElementById("percorso-biblico");

if(bibbia){

data.items.forEach(ep => {

if(ep.title.includes("[Percorso Biblico]")){

const match =
ep.guid.match(/(\d+)$/);

if(!match) return;

const id =
match[1];

const elemento =
document.createElement("div");

elemento.innerHTML = `

<h3>
📖 ${ep.title.replace("[Percorso Biblico] ","")}
</h3>

<iframe
src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"

width="100%"
height="200"
frameborder="0"
allow="autoplay">
</iframe>

<hr>

`;

bibbia.appendChild(elemento);

}

});

}

// ============================================
// 🎙 ULTIME PUNTATE HOME
// ============================================

const lista =
document.getElementById("episodi");

if(lista){

data.items.slice(0,10).forEach(ep => {

const match =
ep.guid.match(/(\d+)$/);

if(!match) return;

const id =
match[1];

const elemento =
document.createElement("div");

elemento.innerHTML = `

<h3>
🎙 ${ep.title}
</h3>

<iframe

src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
width="100%"
height="200"
frameborder="0"
allow="autoplay">
</iframe>

<hr>

`;

lista.appendChild(elemento);

});

}

})


.catch(error => {

console.error(
"Errore caricamento puntate:",
error
);

const lista =
document.getElementById("episodi");

if(lista){

lista.innerHTML =
"Errore caricamento puntate";

}

});
// ============================================
// 🌅 PENSIERO DEL GIORNO
// ============================================

const boxPensiero =
document.getElementById("contenutoGiornaliero");

if(boxPensiero){

fetch("contenuti/pensieri.json")

.then(response => response.json())
.then(pensieri => {

    const indice =
    new Date().getDate() % pensieri.length;

    const pensiero =
    pensieri[indice];

    boxPensiero.innerHTML = `

    <p>
    ✨ <strong>Pensiero del giorno</strong>
    </p>

    <p>
    <em>
    "${pensiero.testo}"
    </em>
    </p>

    `;

})

.catch(error => {

    console.error(
        "Errore pensieri:",
        error
    );

});

}
alert("APP.JS CARICATO");
