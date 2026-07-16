// ============================================
// DIALOGHI RADIO
// Caricamento ultime puntate da feed RSS
//
// Il file:
// - recupera le puntate dal Cloudflare Worker
// - legge il feed RSS di Spreaker
// - mostra l'ultima puntata in evidenza
// - mostra le 10 puntate precedenti
// ============================================


// Indirizzo del feed RSS filtrato tramite Cloudflare Worker
const feed = "https://billowing-silence-9fc4.teisasa3.workers.dev/";


// Recupera il feed aggiungendo un parametro temporale
// per evitare problemi di cache del browser
fetch(feed + "?nocache=" + new Date().getTime())


// Trasforma la risposta ricevuta in testo XML
.then(response => response.text())


// Elaborazione del contenuto XML
.then(str => {


    // Crea un parser per leggere il formato XML del feed RSS
    const parser = new DOMParser();

    // Converte il testo ricevuto in un documento XML leggibile
    const xml = parser.parseFromString(str, "text/xml");


    // Recupera tutti gli elementi <item>
    // Ogni item rappresenta una puntata del podcast
    const items = [...xml.querySelectorAll("item")];


    // Ordina le puntate dalla più recente alla più vecchia
    // usando la data di pubblicazione presente nel feed RSS
    items.sort((a, b) => {

        const dataA = new Date(
            a.querySelector("pubDate").textContent
        );

        const dataB = new Date(
            b.querySelector("pubDate").textContent
        );

        return dataB - dataA;

    });



    // ============================================
    // ULTIMA PUNTATA IN EVIDENZA
    // ============================================


    // La prima puntata dopo l'ordinamento è la più recente
    const ultima = items[0];


    // Recupera titolo e link della puntata
    const titoloUltima =
        ultima.querySelector("title").textContent;

    const linkUltima =
        ultima.querySelector("link").textContent;


    // Estrae l'ID della puntata necessario per il player Spreaker
    const match = linkUltima.match(/--(\d+)$/);


    // Se non trova l'ID interrompe il caricamento
    if (!match) return;


    const idUltima = match[1];


    // Elemento HTML dove inserire la puntata principale
    const evidenza =
        document.getElementById("ultima-puntata");



    // Crea il player Spreaker della puntata più recente
    evidenza.innerHTML = `

        <h2>🎙 Ultima puntata</h2>

        <h3>${titoloUltima}</h3>

        <iframe
        src="https://widget.spreaker.com/player?episode_id=${idUltima}&theme=light"
        width="100%"
        height="200"
        frameborder="0"
        allow="autoplay">
        </iframe>

        <hr>

    `;



    // ============================================
    // ULTIME 10 PUNTATE
    // ============================================


    // Elemento HTML dove inserire la lista episodi
    const lista =
        document.getElementById("episodi");



    // Prende le puntate dalla seconda alla undicesima
    // perché la prima è già stata mostrata sopra
    items.slice(1, 11).forEach(ep => {


        // Recupera titolo e link della puntata
        const titolo =
            ep.querySelector("title").textContent;

        const link =
            ep.querySelector("link").textContent;



        // Estrae l'ID Spreaker dal link
        const match =
            link.match(/--(\d+)$/);


        // Se manca l'ID salta questa puntata
        if (!match) return;


        const id = match[1];


        // Crea un contenitore HTML per ogni episodio
        const elemento =
            document.createElement("div");



        // Inserisce titolo e player Spreaker
        elemento.innerHTML = `

            <h3>🎙 ${titolo}</h3>

            <iframe
            src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
            width="100%"
            height="200"
            frameborder="0"
            allow="autoplay">
            </iframe>

            <hr>

        `;


        // Aggiunge l'episodio alla pagina
        lista.appendChild(elemento);


    });


})


// Gestione eventuali errori di caricamento
.catch(error => {


    document.getElementById("episodi").innerHTML =
    "Errore caricamento puntate";


});
