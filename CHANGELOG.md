# Cronologia aggiornamenti - Dialoghi Radio

## Beta 1.0.2 - Luglio 2026

Aggiunta sezione:

🌅 Oggi su Dialoghi Radio

Introduzione del Pensiero del giorno:
caricamento automatico da file JSON (contenuti/pensieri.json);
visualizzazione dinamica nella Home;
aggiornamento automatico giornaliero.

### Miglioramenti tecnici 
Corretto l'indice di selezione del Pensiero del giorno per allineare la prima frase al primo giorno del ciclo.
Migliorata gestione degli errori JavaScript:
controlli sui contenitori HTML (if(elemento)).
Reso più robusto il recupero ID episodi Spreaker.
Separazione più chiara tra:
app.js (Home)
ultime-puntate.js (pagina ascolto)

### Struttura contenuti
Introduzione file:
contenuti/pensieri.json

per gestione contenuti dinamici.

## Beta 1.0.1 - Luglio 2026

### Miglioramenti

- Rimossa la scritta "Caricamento ultima puntata" dalla Home.
- Aggiornata la versione visualizzata nell'app.
- Riordinato il menu Home mettendo "Contatti e suggerimenti" prima di "Info".
- Migliorata la descrizione della sezione Guida.
- Aggiornate le indicazioni della guida utente per installazione Android e iPhone/iPad.
- Aggiunte le possibili voci di installazione Android:
  - Installa
  - Crea scorciatoia
  - Aggiungi alla schermata Home.

### Feedback tester applicati

- Migliorata la visibilità delle sezioni principali.
- Reso più chiaro il percorso per contattare Dialoghi Radio.
- Raccolti e integrati suggerimenti ricevuti durante il ciclo di test Beta.

## Beta 1.0.0 - Luglio 2026

Prima versione Beta dell'app Dialoghi Radio.

---

## Funzioni introdotte

- Collegamento al feed Spreaker.
- Visualizzazione automatica delle puntate.
- Sezione 📖 Percorso Biblico.
- Sezione 🎧 Ultime Puntate.
- Navigazione tra Home e sezioni interne.
- Installazione come Web App sul dispositivo.
- Gestione versione Beta.


---

## Organizzazione contenuti

- Creata sezione dedicata al Percorso Biblico.
- Creata sezione dedicata all'ascolto delle puntate.
- Inseriti pulsanti di accesso dalla Home.
- Aggiunto pulsante "Torna alla Home" nelle sezioni interne.


---

## Grafica e usabilità

- Inserita icona ufficiale Dialoghi Radio.
- Adattato il logo per dispositivi mobili.
- Inserita indicazione versione Beta 1.0.0.
- Migliorati pulsanti, spaziature e leggibilità.
- Struttura ottimizzata per PC e smartphone.


---

## Funzioni aggiunte durante la fase Beta

- Aggiunta descrizione della sezione Ultime Puntate.
- Inserito caricamento automatico degli ultimi 10 episodi.
- Aggiunta funzione:

  ✅ Già ascoltata

- Possibilità di aggiungere o rimuovere la spunta delle puntate ascoltate.
- Memorizzazione dello stato sul dispositivo tramite memoria locale.
- Nessuna raccolta di dati personali.


---

## Comunicazione con gli ascoltatori

- Creata sezione 💬 Contatti e suggerimenti.
- Inseriti collegamenti email diretti.
- Aggiunto messaggio di ringraziamento agli ascoltatori.


---

# Sviluppi e aggiornamenti successivi alla Beta 1.0.0

## Documentazione

- Creata guida utente interna.
- Collegato il documento:

`documentazione/guida_utente.md`

- Inserite istruzioni per Android e iPhone.
- Preparata documentazione per futuri utenti.
- Migliorata la lettura della guida su PC e smartphone.


---

## Gestione progetto

- Creato sistema ordinato di documentazione.
- Salvato backup del progetto su PC e supporto USB.
- Organizzata gestione versioni tramite GitHub.
- Utilizzati commit per tracciare le modifiche.


---

## Miglioramento sezione ascolto

- Aggiunto collegamento all'archivio completo tramite Castbox.
- Riorganizzata la pagina:

🎧 Ascolta Dialoghi Radio

con:

- 📚 Tutte le puntate
- 🎧 Ultime puntate automatiche


- Aggiornato il pulsante Home:
da "Apri ultime puntate"

a:

🎧 Ascolta Dialoghi Radio


---

## Organizzazione codice JavaScript

Separazione dei compiti tra file:

### app.js

Gestione Home:

- caricamento Percorso Biblico;
- caricamento ultime puntate nella Home;
- gestione dei contenuti principali.
- (aggiunto in 1.0.2: pensiero del giorno)

### ultime-puntate.js

Gestione pagina ascolto:

- caricamento episodi;
- player Spreaker;
- gestione puntate ascoltate.


Aggiunti commenti esplicativi al codice.


---

## Feedback Beta

- Creato documento:

`documentazione/SUGGERIMENTI_FUTURI.md`


- Raccolti suggerimenti dei tester.
- Inserita segnalazione relativa all'ascolto audio in background come possibile sviluppo futuro.

---

# Sviluppi futuri

- Sviluppo del progetto "Accanto a Te".
- Spazio ascoltatori.
- Nuovi percorsi tematici.
- Miglioramenti grafici.
- Nuove categorie di contenuti.
- Sistema notifiche aggiornamenti.
- Menu laterale di navigazione.
- Ascolto Live H24.
- Palinsesto programmato.
- Funzione condivisione applicazione.


---

❤️ Dialoghi Radio
