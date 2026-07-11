const feed = "https://www.spreaker.com/show/6033837/episodes/feed";

fetch("https://api.rss2json.com/v1/api.json?count=1000&rss_url=" + encodeURIComponent(feed))
.then(response => response.json())
.then(data => {


    // ===== PERCORSO BIBLICO =====

    const bibbia = document.getElementById("percorso-biblico");

    data.items.forEach(ep => {

        if (ep.title.includes("[Percorso Biblico]")) {

            const id = ep.guid.match(/(\d+)$/)[1];

            const elemento = document.createElement("div");

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

            bibbia.appendChild(elemento);

        }

    });



    // ===== ULTIME PUNTATE =====

    const lista = document.getElementById("episodi");

    data.items.slice(0, 10).forEach(ep => {

        const id = ep.guid.match(/(\d+)$/)[1];

        const elemento = document.createElement("div");

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

        lista.appendChild(elemento);

    });


})
.catch(error => {

    document.getElementById("episodi").innerHTML =
    "Errore caricamento puntate";

});
