const feed = "https://billowing-silence-9fc4.teisasa3.workers.dev/";

fetch(feed + "?nocache=" + new Date().getTime())
.then(response => response.text())
.then(str => {

    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "text/xml");

    const items = [...xml.querySelectorAll("item")];
    items.sort((a, b) => {
    const dataA = new Date(a.querySelector("pubDate").textContent);
    const dataB = new Date(b.querySelector("pubDate").textContent);
    return dataB - dataA;
});

    // ===== ULTIMA PUNTATA =====
const ultima = items[0];

const titoloUltima = ultima.querySelector("title").textContent;
const linkUltima = ultima.querySelector("link").textContent;
const idUltima = linkUltima.match(/--(\d+)$/)[1];

const evidenza = document.getElementById("ultima-puntata");

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

    // ===== ULTIME PUNTATE =====

    const lista = document.getElementById("episodi");

    items.slice(1,11).forEach(ep => {

        const titolo = ep.querySelector("title").textContent;
        const link = ep.querySelector("link").textContent;

        const id = link.match(/--(\d+)$/)[1];

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
