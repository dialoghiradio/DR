const feed = "https://billowing-silence-9fc4.teisasa3.workers.dev/";

fetch(feed)
.then(response => response.text())
.then(str => {

    const parser = new DOMParser();
    const xml = parser.parseFromString(str, "text/xml");

    const items = [...xml.querySelectorAll("item")];

    const bibbia = document.getElementById("percorso-biblico");


    items.forEach(ep => {

        const titolo = ep.querySelector("title").textContent;
        const link = ep.querySelector("link").textContent;


        if (titolo.includes("[Percorso Biblico]")) {


            const id = link.match(/--(\d+)$/)[1];


            const elemento = document.createElement("div");


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


            bibbia.appendChild(elemento);

        }

    });


})
.catch(error => {

document.getElementById("percorso-biblico").innerHTML =
"Errore caricamento percorso biblico";

});
