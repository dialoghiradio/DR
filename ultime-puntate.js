// ============================================
// DIALOGHI RADIO
// Gestione ultime puntate podcast
//
// Il file:
// - recupera le puntate dal feed RSS tramite Cloudflare Worker
// - legge gli episodi pubblicati su Spreaker
// - crea automaticamente i player audio
// - permette di segnare le puntate già ascoltate
// - salva la memoria nel browser tramite localStorage
// ============================================


// Indirizzo del feed RSS filtrato tramite Cloudflare Worker
const feed = "https://billowing-silence-9fc4.teisasa3.workers.dev/";


// Recupera il feed RSS aggiungendo un parametro temporale
// per evitare che il browser utilizzi una versione salvata in cache
fetch(feed + "?nocache=" + new Date().getTime())


// Trasforma la risposta del server in testo XML
.then(response => response.text())


// Elaborazione del feed ricevuto
.then(str => {


    // Crea un parser per interpretare il documento XML
    const parser = new DOMParser();


    // Trasforma il testo XML in un documento navigabile
    const xml = parser.parseFromString(str, "text/xml");


    // Recupera tutti gli episodi presenti nel feed RSS
    // Ogni elemento <item> rappresenta una puntata
    const items = [...xml.querySelectorAll("item")];



    // Contenitore HTML dove verranno inserite le puntate

    const lista = document.getElementById("episodi");

if(!lista){
    console.error("Contenitore episodi non trovato");
    return;
}

    // Prende solamente le prime 10 puntate del feed
    items.slice(0,10).forEach(ep => {


        // Recupera il titolo della puntata
        const titolo = ep.querySelector("title").textContent;


        // Recupera il collegamento della puntata
        const link = ep.querySelector("link").textContent;



        // Estrae dal link l'ID necessario per il player Spreaker

        const match = link.match(/(\d+)$/);

        // Se l'ID non viene trovato salta questa puntata
        if (!match) return;


        const id = match[1];



        // Crea un contenitore HTML per la singola puntata
        const elemento = document.createElement("div");



        // Recupera dal browser la lista delle puntate già ascoltate
        // Se non esiste ancora viene creata una lista vuota
        const ascoltate =
        JSON.parse(localStorage.getItem("puntateAscoltate")) || [];



        // Controlla se questa puntata è già stata segnata
        const giaAscoltata = ascoltate.includes(id);



        // Costruisce la scheda della puntata:
        // titolo + player Spreaker + pulsante stato ascolto
        elemento.innerHTML = `

        <h3>🎙 ${titolo}</h3>

        <iframe
        src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
        width="100%"
        height="200"
        frameborder="0"
        allow="autoplay">
        </iframe>

        <button class="bottone ascoltato" data-id="${id}">
        ${giaAscoltata ? "✅ Già ascoltata" : "☐ Già ascoltata"}
        </button>

        <hr>

       `;



        // Inserisce la puntata nella pagina HTML
        lista.appendChild(elemento);



        // Recupera il pulsante appena creato
        const pulsante = elemento.querySelector(".ascoltato");



        // Gestisce il click sul pulsante "Già ascoltata"
        pulsante.addEventListener("click", () => {



        // Recupera nuovamente la memoria delle puntate ascoltate
        let ascoltate =
        JSON.parse(localStorage.getItem("puntateAscoltate")) || [];



        // Se la puntata era già presente la rimuove
        if (ascoltate.includes(id)) {


            ascoltate = ascoltate.filter(x => x !== id);

            pulsante.textContent = "☐ Già ascoltata";



        } else {


            // Altrimenti la aggiunge alla lista
            ascoltate.push(id);

            pulsante.textContent = "✅ Già ascoltata";

        }



        // Salva la nuova situazione nella memoria del browser
        localStorage.setItem(
            "puntateAscoltate",
            JSON.stringify(ascoltate)
        );


    });
const boxContatore =
document.getElementById("contatore-ascolti");

if(boxContatore){

    const ascoltate =
    JSON.parse(localStorage.getItem("puntateAscoltate")) || [];

    boxContatore.innerHTML =
    "🎧 Episodi già ascoltati: " + ascoltate.length;

}

});


})


// Gestione degli errori durante il caricamento
.catch(error => {


document.getElementById("episodi").innerHTML =
"Errore caricamento puntate";


});
