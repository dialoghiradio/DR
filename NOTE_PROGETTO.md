# NOTE_PROGETTO.md

# Progetto: Dialoghi Radio

## 24/07/2026

- Versione Beta 1.0.2 in fase di verifica.
- Guida utente aggiornata.
- Correzione testi "Ultimi episodi".
- Backup eseguito (PC + USB).
- Verifica finale delle modifiche in ambiente DR-TEST.

## Stato attuale

Progetto web per una piccola app di contenuti audio e pensieri del giorno.

Ambiente di sviluppo:

* Visual Studio Code
* Live Server
* Git/GitHub per DR-PRODUZIONE

Ambiente di test:

* DR-TEST locale senza collegamento Git

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

Nota:

Le nuove modifiche vengono prima provate nella cartella DR-TEST.
Solo dopo la verifica vengono trasferite nella versione DR-PRODUZIONE
e pubblicate tramite GitHub.

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

aggiunto saluto dinamico in base all'orario;
aggiunta dissolvenza del Pensiero del giorno all'apertura della Home.

## Esperimenti DR-TEST - luglio 2026
## Esperimenti DR-TEST - luglio 2026

Durante la fase di prova sono state sperimentate alcune migliorie
dell'esperienza utente dell'app.

### ✅ Esperimento 1 — Saluto dinamico

Aggiunto un saluto automatico sotto la data della Home
in base all'orario del dispositivo:

- 🌅 Buongiorno
- ☀️ Buon pomeriggio
- 🌙 Buonasera

La funzione è stata testata modificando temporaneamente
l'orario del dispositivo.

---

### ✅ Esperimento 2 — Messaggio variabile di benvenuto

La descrizione iniziale della Home è stata resa dinamica
in base al momento della giornata.

Messaggi utilizzati:

- 🌅 Mattina:
  "Inizia la giornata con un momento di ascolto e riflessione."

- ☀️ Pomeriggio:
  "Un momento di pausa con parole e musica."

- 🌙 Sera:
  "Concludi la giornata con un tempo di ascolto e serenità."

La funzione è stata testata verificando il cambio automatico
del messaggio.

---

### ✅ Esperimento 3 — Contatore episodi ascoltati

Aggiunto nella pagina "Ascolta Dialoghi Radio"
un contatore degli episodi segnati come ascoltati.

La funzione utilizza il sistema già presente
basato su memoria locale del dispositivo:

`localStorage`

Il conteggio visualizza:

🎧 Episodi già ascoltati: numero

Verifica effettuata:

- segnando un episodio come ascoltato il numero aumenta;
- togliendo la spunta "Già ascoltata" il numero diminuisce;
- il conteggio rimane sincronizzato con la lista degli episodi selezionati.

Nessun dato viene raccolto esternamente.

---

### ✅ Esperimento 4 — Dissolvenza Pensiero del giorno

Aggiunto un effetto di comparsa graduale del box:

✨ Pensiero del giorno

all'apertura della Home.

L'effetto è stato mantenuto leggero per non rallentare
il caricamento della pagina.

---

### ✅ Esperimento 5 — Ultimo aggiornamento più dinamico

Modificata la visualizzazione dell'aggiornamento app.

Prima:

Aggiornamento app:
24/07/2026

Dopo:

📻 App aggiornata il 24/07/2026

La modifica rende l'informazione più naturale
e coerente con il tema Dialoghi Radio.

---

## Stato esperimenti

Tutte le funzioni sono state:

- provate in ambiente DR-TEST;
- verificate tramite Live Server;
- controllate su smartphone.

Il passaggio in DR-PRODUZIONE verrà effettuato
dopo la verifica finale.

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
* Esplora contenuti con categorie tematiche;

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

La pagina di destinazione è rimasta la sezione
"Ascolta Dialoghi Radio".

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

Modifiche verificate:

* index.html
* ultime-puntate.html
* STRUTTURA_PROGETTO.md
* NOTE_PROGETTO.md

Altri file già aggiornati nella fase precedente:

* contatti.html
* stile.css


### Stato aggiornamento

Le modifiche sono attualmente presenti in DR-TEST.

Il passaggio a DR-PRODUZIONE verrà effettuato dopo la verifica finale.

Commit previsto al termine della verifica finale:
"Migliorata navigazione audio e grafica app"
