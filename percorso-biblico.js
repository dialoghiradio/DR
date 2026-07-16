// ============================================
// DIALOGHI RADIO
// Caricamento Percorso Biblico
//
// Il file:
// - recupera il feed RSS filtrato dal Cloudflare Worker
// - legge le puntate pubblicate su Spreaker
// - seleziona solo quelle del Percorso Biblico
// - crea automaticamente i player audio
// ============================================


// Indirizzo del feed RSS gestito tramite Cloudflare Worker
const feed = "https://billowing-silence-9fc4.teisasa3.workers.dev/";


// Recupera il contenuto del feed RSS
fetch(feed)


// Trasforma la risposta ricevuta in testo XML
.then(response => response.text())


// Elaborazione del file XML
.then(str => {


    // Crea un lettore per interpretare il formato XML
    const parser = new DOMParser();


    // Trasforma il testo XML in un documento navigabile
    const xml = parser.parseFromString(str, "text/xml");


    // Recupera tutti gli elementi <item>
    // Ogni item rappresenta una puntata del podcast
    const items = [...xml.querySelectorAll("item")];



    // Individua il contenitore HTML
    // dove inserire le puntate del Percorso Biblico
    const bibbia = document.getElementById("percorso-biblico");



    // Analizza tutte le puntate presenti nel feed
    items.forEach(ep => {


        // Recupera titolo e collegamento della puntata
        const titolo = ep.querySelector("title").textContent;

        const link = ep.querySelector("link").textContent;



        // Controlla se il titolo contiene la categoria
        // [Percorso Biblico]
        if (titolo.includes("[Percorso Biblico]")) {



            // Estrae l'ID necessario per il player Spreaker
            const id = link.match(/--(\d+)$/)[1];



            // Crea un contenitore per la singola puntata
            const elemento = document.createElement("div");



            // Inserisce titolo e player audio
            elemento.innerHTML = `

            <h3>📖 ${titolo.replace("[Percorso Biblico] ","")}</h3>


            <iframe
            src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
            width="100%"
            height="200"
            frameborder="0">
            </iframe>


            <hr>

            `;



            // Aggiunge la puntata alla pagina HTML
            bibbia.appendChild(elemento);


        }

    });


})


// Gestione degli errori
.catch(error => {


document.getElementById("percorso-biblico").innerHTML =
"Errore caricamento percorso biblico";


});
