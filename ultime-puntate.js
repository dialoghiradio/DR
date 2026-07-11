const feed = "https://billowing-silence-9fc4.teisasa3.workers.dev/";

fetch(feed + "?nocache=" + new Date().getTime())
.then(response => response.text())
.then(str => {

    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "text/xml");

    const items = [...xml.querySelectorAll("item")];


    const lista = document.getElementById("episodi");


    items.slice(0,10).forEach(ep => {

        const titolo = ep.querySelector("title").textContent;
        const link = ep.querySelector("link").textContent;

        const match = link.match(/--(\d+)$/);

        if (!match) return;

        const id = match[1];


        const elemento = document.createElement("div");


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


        lista.appendChild(elemento);


    });


})
.catch(error => {

document.getElementById("episodi").innerHTML =
"Errore caricamento puntate";

});
