// ============================================
// DIALOGHI RADIO
// Gestione contenuti podcast della Home
//
// Il file:
// - recupera il feed completo di Spreaker
// - utilizza RSS2JSON per trasformare il feed RSS in JSON
// - crea la sezione Percorso Biblico
// - mostra le ultime 10 puntate
//
// Nota:
// La gestione dettagliata della pagina ascolto
// è affidata a ultime-puntate.js
// ============================================

// Feed RSS ufficiale dello show Spreaker
const feed = "https://www.spreaker.com/show/6033837/episodes/feed";

// Chiamata al servizio RSS2JSON
// Serve a convertire il formato RSS in un formato JSON
// più semplice da leggere con JavaScript

fetch(
    "https://api.rss2json.com/v1/api.json?rss_url="
    + encodeURIComponent(feed)
)

// Trasforma la risposta ricevuta in formato JSON
.then(response => response.json())

// Elaborazione dei dati ricevuti
.then(data => {

    // ============================================
    // SEZIONE PERCORSO BIBLICO
    // ============================================

    // Recupera il contenitore HTML
    // dove verranno inserite le puntate bibliche
    const bibbia =
        document.getElementById("percorso-biblico");

    // Scorre tutti gli episodi presenti nel feed
    data.items.forEach(ep => {

        // Controlla se il titolo contiene
        // il tag dedicato al Percorso Biblico
        if (ep.title.includes("[Percorso Biblico]")) {

            // Estrae l'ID della puntata dal codice guid
            // necessario per creare il player Spreaker
            const id =
                ep.guid.match(/(\d+)$/)[1];

            // Crea un nuovo elemento HTML
            // che conterrà una puntata
            const elemento =
                document.createElement("div");

            // Costruisce il contenuto della puntata:
            // titolo senza il prefisso della categoria
            // e player audio Spreaker
            elemento.innerHTML = `

                <h3>📖 ${ep.title.replace("[Percorso Biblico] ", "")}</h3>

                <iframe
                src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
                width="100%"
                height="200"
                frameborder="0"
                allow="autoplay">
                </iframe>

                <hr>

            `;

            // Inserisce la puntata nel contenitore HTML
            bibbia.appendChild(elemento);
        }

    });

    // ============================================
    // ULTIME PUNTATE NELLA HOME
    // ============================================

    // Recupera il contenitore HTML
    // dove mostrare gli ultimi episodi
    const lista =
        document.getElementById("episodi");

    // Prende solo le prime 10 puntate
    // presenti nel feed
    data.items.slice(0, 10).forEach(ep => {

        // Estrae l'ID necessario
        // per il player Spreaker
        const id =
            ep.guid.match(/(\d+)$/)[1];

        // Crea il contenitore della singola puntata
        const elemento =
            document.createElement("div");

        // Inserisce titolo e player audio
        elemento.innerHTML = `

            <h3>🎙 ${ep.title}</h3>

            <iframe
            src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
            width="100%"
            height="200"
            frameborder="0"
            allow="autoplay">
            </iframe>

            <hr>

        `;

        // Aggiunge la puntata alla pagina
        lista.appendChild(elemento);

    });

})

// Gestione degli errori
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
