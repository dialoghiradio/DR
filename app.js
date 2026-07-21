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

fetch(
    "https://api.rss2json.com/v1/api.json?rss_url="
    + encodeURIComponent(feed)
)

// Trasforma risposta in JSON
.then(response => response.json())


// Elaborazione dati
.then(data => {

    console.log("Feed ricevuto:", data);

    // Controllo sicurezza
    if(!data.items){

        console.error("Feed non disponibile");

        const lista =
        document.getElementById("episodi");

        if(lista){
            lista.innerHTML =
            "Errore caricamento puntate";
        }

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

                const id =
                ep.guid.match(/(\d+)$/)[1];

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

            const id =
            ep.guid.match(/(\d+)$/)[1];

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

// ============================================
// Gestione errori
// ============================================

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
