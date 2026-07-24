# NOTE_PROGETTO.md

# Progetto: Dialoghi Radio

## Stato attuale

Progetto web per una piccola app di contenuti audio e pensieri del giorno.

Ambiente di sviluppo:

* Visual Studio Code
* Live Server
* Git
* GitHub

## Repository GitHub

Repository collegato:

https://github.com/dialoghiradio/DR

Cartella locale collegata:

DR-PRODUZIONE

Il repository locale è collegato correttamente a GitHub.

Comandi principali:

```bash
git status
git add .
git commit -m "descrizione modifica"
git push
```

## Metodo di lavoro

La cartella DR è la versione produzione.

Flusso:

PC (Visual Studio Code)
↓
Modifica file
↓
Prova con Live Server
↓
Git status
↓
Git add
↓
Git commit
↓
Git push
↓
GitHub aggiornato
↓
App aggiornata

## Ambiente di prova

Cartella:

DR-TEST

Utilizzo:

* esperimenti;
* nuove funzioni;
* prove grafiche;
* prove audio.

Le modifiche vengono prima testate con Live Server.

Solo dopo vengono portate nella versione DR.

## Struttura progetto

File principali:

* index.html
* app.js
* pensieri.json

Cartella audio:

```
audio/
└── notizie/
    └── news001.mp3
```

## Pensiero del giorno

Il file pensieri.json contiene i testi.

Esempio:

```json
[
  {
    "id": 1,
    "testo": "La fede cresce quando viene condivisa."
  }
]
```

Il pensiero viene scelto in base al giorno.

## Audio

Gli audio vengono inseriti nella cartella:

```
audio/notizie/
```

Per aggiornare un audio:

1. sostituire il file sul PC;
2. provare con Live Server;
3. fare commit e push.

## Backup

Attualmente il progetto è protetto da:

* copia locale sul PC;
* repository GitHub;
* backup su USB.

## Idee future

Possibili sviluppi:

* archivio audio giornalieri;
* news audio;
* repertorio del coro con:

  * testi dei canti;
  * registrazioni audio;
  * materiale del gruppo.

## Note di sviluppo

Le modifiche importanti devono essere sempre testate prima in locale.

GitHub viene usato come pubblicazione e archivio della versione funzionante.

## Documentazione collegata

Il progetto contiene anche:

- `documentazione/SUGGERIMENTI_FUTURI.md`
  - idee e possibili sviluppi futuri dell'app

- `documentazione/CATEGORIE_CONTENUTI.md`
  - struttura delle categorie previste per la futura funzione "Esplora contenuti"
 
## Aggiornamenti DR-TEST - Luglio 2026

In ambiente DR-TEST sono state effettuate alcune modifiche grafiche e di navigazione prima del passaggio in produzione.

### Home page (index.html)

Modificata la parte iniziale della pagina:

* mantenuta la versione Beta 1.0.2;
* inserita la voce "Aggiornamento app" con data;
* migliorata la leggibilità della testata.

Modificato il pulsante di accesso all'ascolto:

Prima: 🎙️ Ascolta Dialoghi Radio
Dopo: ▶️ Vai all’ascolto

Motivo della modifica:

Il pulsante non apre direttamente tutte le puntate, ma porta alla pagina dove l'utente può scegliere tra:

* ultime puntate disponibili;
* archivio completo su Castbox.

La nuova dicitura evita ambiguità.


### Pagina ascolto (ultime-puntate.html)

Migliorata la chiarezza della pagina audio.

La pagina ora distingue:

* 📚 Tutte le puntate
  - collegamento all'archivio completo su Castbox;

* 🎧 Ultime puntate
  - visualizzazione automatica delle ultime 10 puntate.


### Pagina contatti (contatti.html)

Ridotto il testo introduttivo per rendere la pagina più leggibile su smartphone.

Modificata la classificazione dei messaggi:

* ⚠️ Problema → segnala un errore
* 💡 Suggerimento → proponi un'idea
* ⭐ Recensione → lascia un parere

Semplificato anche il messaggio finale:
❤️ Grazie di seguire Dialoghi Radio ❤️


### Grafica (stile.css)

Modificato lo sfondo generale dell'app:
#eef6fa

Scelta di un azzurro tenue per armonizzarsi con i pulsanti blu.

La modifica è stata verificata su smartphone tramite Live Server.


### File modificati in DR-TEST

* index.html
* ultime-puntate.html
* contatti.html
* stile.css


### Stato aggiornamento

Le modifiche sono attualmente presenti in DR-TEST.

Il passaggio a DR-PRODUZIONE verrà effettuato dopo la verifica finale.

git commit -m "Migliorata navigazione audio e grafica app"