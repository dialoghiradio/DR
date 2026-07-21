# Struttura progetto - Dialoghi Radio

Descrizione:
Mappa dei file e delle funzionalità dell'app Dialoghi Radio Beta 1.0.2.
Serve per orientarsi rapidamente nel progetto e capire dove intervenire.

Aggiornato: luglio 2026
---

## 📄 Pagine HTML

| File | Descrizione | Stato |
|---|---|---|
| index.html | Pagina principale dell'app con sezione Oggi su Dialoghi Radio | ✅ Attiva |
| ultime-puntate.html | Archivio completo + ultime puntate | ✅ Attiva |
| percorso-biblico.html | Pagina dedicata al Percorso Biblico | ✅ Attiva |
| contatti.html | Contatti e suggerimenti degli ascoltatori | ✅ Attiva |
| guida.html | Guida all'utilizzo dell'app | ✅ Attiva |

---

## ⚙️ File JavaScript

| File | Descrizione | Stato |
|---|---|---|
| app.js | Gestione Home, feed Spreaker, Percorso Biblico e Pensiero del giorno | ✅ Attivo |
| ultime-puntate.js | Recupero automatico ultime puntate e gestione ascolto | ✅ Attivo |
| percorso-biblico.js | Recupero automatico contenuti Percorso Biblico | ✅ Attivo |
---

## 🎨 File grafici

| File | Descrizione |
|---|---|
| icona.png | Icona Dialoghi Radio |
| immagini_guida/ | Screenshot guida installazione |

---

## 📚 Documentazione

| File | Descrizione |
|---|---|
| guida_installazione.md | Installazione Android/iPhone |
| guida_utente.md | Uso dell'app |
| messaggio_tester_beta.md | Comunicazione tester |
| registro_modifiche.md | Storico modifiche |
| CHANGELOG.md | Cronologia versioni progetto |
| SUGGERIMENTI_FUTURI.md | Idee e sviluppi futuri del progetto |
| tester/ | Documentazione fase Beta tester |

---

## 📦 Contenuti dinamici

| File | Descrizione |
|---|---|
| contenuti/pensieri.json | Archivio dei Pensieri del giorno caricati automaticamente nella Home |
|
---
## 🎧 Contenuti audio

| Servizio | Utilizzo |
|---|---|
| Spreaker | Hosting podcast |
| Castbox | Archivio completo puntate |

---

## 🔄 Flussi principali

| Azione utente | Percorso |
|---|---|
| Leggere il Pensiero del giorno | Home → Oggi su Dialoghi Radio |
| Ascoltare il percorso biblico | Home → Percorso Biblico |
| Ascoltare tutte le puntate | Home → Ascolta Dialoghi Radio → Castbox (archivio completo) |
| Ascoltare ultimi 10 episodi | Home → Ascolta Dialoghi Radio → Ultime puntate |
| Inviare suggerimenti | Home → Contatti e suggerimenti |
---

## 🚧 In sviluppo / Idee future

| Funzionalità | Descrizione | Stato |
|---|---|---|
| Accanto a Te | Richieste di preghiera | 🟡 Idea |
| Scenette teatrali | Collegamento Spreaker | 🟡 Da valutare |
| Canti di chiesa | Sezione musicale | 🟡 Da valutare |
| Musica di accompagnamento | Possibile personalizzazione audio o ambiente musicale | 🟡 Da valutare |
| Modulo contatti | Messaggi utenti | 🟡 Evoluzione |

---

## Note tecniche

- La Home utilizza il file JSON contenuti/pensieri.json per mostrare un pensiero giornaliero dinamico.
- Il caricamento dei contenuti testuali avviene separatamente dal codice JavaScript.
- L'app è una Web App installabile (PWA).
- I contenuti audio vengono caricati automaticamente tramite feed RSS Spreaker.
- Gli episodi vengono visualizzati tramite player Spreaker.
- Castbox viene utilizzato come archivio esterno per l'ascolto completo delle puntate.
- Alcune funzioni utilizzano memoria locale del dispositivo senza raccolta dati personali.
