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
    "https://api.rss2json.com/v1/api.json?count=1000&rss_url="
    + encodeURIComponent(feed)
)



// Trasforma la risposta ricevuta in formato JSON
.then(response => response.json())



// Elaborazione dei dati ricevuti
.then(data => {

// ============================================
// 🌅 CONTENUTO GIORNALIERO
// ============================================

const oggi = new Date().toISOString().split("T")[0];

const KEY_DATA = "dialoghi_data";
const KEY_EPISODIO = "dialoghi_episodio";
const KEY_PENSIERO = "dialoghi_pensiero";

const boxGiorno = document.getElementById("contenutoGiornaliero");

if (boxGiorno) {

    let dataSalvata = localStorage.getItem(KEY_DATA);
    let episodioSalvato = localStorage.getItem(KEY_EPISODIO);
    let pensieroSalvato = localStorage.getItem(KEY_PENSIERO);

    let episodio;
    let pensiero;



    // ============================================
    // NUOVO GIORNO
    // ============================================

    if (dataSalvata !== oggi) {


        // ----------------------------
        // AUDIO DEL GIORNO
        // ----------------------------

        const ultimi = data.items.slice(0, 10);

        episodio =
            ultimi[Math.floor(Math.random() * ultimi.length)];



        // ----------------------------
        // PENSIERO DEL GIORNO
        // ----------------------------

        fetch("contenuti/pensieri.json")
        .then(response => response.json())
        .then(pensieri => {


            let indice =
                Number(localStorage.getItem("dialoghi_indice_pensiero")) || 0;


            // ritorno al primo quando finisce
            if (indice >= pensieri.length) {
                indice = 0;
            }


            pensiero = pensieri[indice];


            localStorage.setItem(
                "dialoghi_indice_pensiero",
                indice + 1
            );


            localStorage.setItem(
                KEY_PENSIERO,
                JSON.stringify(pensiero)
            );


            localStorage.setItem(KEY_DATA, oggi);

            localStorage.setItem(
                KEY_EPISODIO,
                JSON.stringify(episodio)
            );


            mostraContenutoGiornaliero(
                pensiero,
                episodio
            );


        });


    } else {


        // stesso giorno

        if (episodioSalvato) {
            episodio = JSON.parse(episodioSalvato);
        }


        if (pensieroSalvato) {
            pensiero = JSON.parse(pensieroSalvato);
        }


        mostraContenutoGiornaliero(
            pensiero,
            episodio
        );

    }

}


// ============================================
// VISUALIZZAZIONE CONTENUTO GIORNALIERO
// ============================================

function mostraContenutoGiornaliero(pensiero, episodio) {


    if (!episodio) return;


    const id =
        episodio.guid.match(/(\d+)$/)[1];


    const titoloPulito =
        episodio.title.replace(/\[.*?\]\s*/, "");



    const testoPensiero =
        pensiero ? pensiero.testo : "";



    const boxGiorno =
        document.getElementById("contenutoGiornaliero");



    boxGiorno.innerHTML = `

        <h3>🌅 Oggi su Dialoghi Radio</h3>

        <p>✨ <strong>Pensiero del giorno</strong></p>

        <p><em>
        "${testoPensiero}"
        </em></p>

        <hr>

        <p>🎧 <strong>Ascolto consigliato</strong></p>

        <h4>${titoloPulito}</h4>


        <iframe
        src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
        width="100%"
        height="200"
        frameborder="0"
        allow="autoplay">
        </iframe>

    `;

}
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
	
function apriCategoria(nome) {

    // Nascondi home se vuoi
    document.getElementById("home").style.display = "none";

    // Mostra area contenuti
    document.getElementById("contenuti").style.display = "block";

    mostraCategoria(nome, "contenuti");
}

function mostraCategoria(nomeCategoria, containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = "";

    data.items.forEach(ep => {

        if (ep.title.includes("[" + nomeCategoria + "]")) {

            const id = ep.guid.match(/(\d+)$/)[1];

            const titoloPulito = ep.title.replace("[" + nomeCategoria + "] ", "");

            const elemento = document.createElement("div");

            elemento.innerHTML = `
                <h3>🎧 ${titoloPulito}</h3>

                <iframe
                src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
                width="100%"
                height="200"
                frameborder="0"
                allow="autoplay">
                </iframe>

                <hr>
            `;

            container.appendChild(elemento);
        }

    });
}

})



// Gestione degli errori
.catch(error => {



    // In caso di problemi mostra un messaggio
    // nel contenitore delle puntate
    document.getElementById("episodi").innerHTML =
    "Errore caricamento puntate";



});
