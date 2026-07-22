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
