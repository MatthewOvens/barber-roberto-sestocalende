# Hair Studio di Menzaghi Roberto — sito parrucchiere

Sito statico one-page per un salone **reale**: Sesto Calende (VA), via XX
Settembre 23, dal 1989. HTML/CSS/JS vanilla, nessun build, nessuna dipendenza.
Avvio: `python -m http.server 8000`

```
index.html              markup (italiano = sorgente di verità)
assets/css/styles.css   token in :root + tutti i componenti
assets/js/i18n.js       dizionari it/en + applicatore
assets/js/main.js       nav, reveal, prenotazione, toast
assets/img/             20 foto vere del salone (1170px le nuove, 400px le vecchie)
tools/check-i18n.py     verifica la parità dei dizionari
```

## Regole non negoziabili

**È un'attività vera: non inventare dati.** Prezzi, nomi del team, recensioni,
anni di esperienza, numeri di clienti. Se un dato non è verificabile, la sezione
resta segnaposto — c'è già il componente `.todo` (riquadro tratteggiato cotto)
per marcarla a video, più un commento in testa alla sezione in `index.html`.
Oggi sono segnaposto **listino, team e recensioni**. Lo stesso vale per il form
di prenotazione: finché non c'è una `fetch()` vera, l'avviso `.bform__demo`
("il modulo non è collegato, chiama") resta nella modale.

**Ogni stringa visibile va tradotta.** L'italiano si scrive in `index.html`
(è la sorgente di verità: il sito deve restare leggibile senza JS). Poi la
stessa chiave va aggiunta in **entrambi** i dizionari `it` e `en` di
`assets/js/i18n.js`. Le due tabelle devono avere lo stesso numero di chiavi,
sempre — oggi sono 229 e 229. Una chiave presente solo in `it` non dà errore:
il testo resta semplicemente in italiano quando l'utente passa a EN, e non se
ne accorge nessuno finché non clicca il toggle. Dopo ogni modifica ai testi:
`python tools/check-i18n.py`.
Attributi disponibili: `data-i18n`, `data-i18n-alt`, `data-i18n-aria-label`,
`data-i18n-placeholder`, `data-i18n-title`.

**Mai colori o spaziature hardcoded.** Usa i token in `:root`
(`var(--accent)`, `var(--brand)`, `var(--space-5)`, `var(--sh-2)`). La palette
è presa dal salone: `--brand` è il verde bottiglia dell'insegna, `--accent` il
cotto del pavimento, `--bg` l'avorio. Cambiare `--accent` deve ricolorare tutte
le CTA del sito senza toccare altro.

**Niente dark mode.** Scelta deliberata: il dataset `ui-ux-pro-max` la elenca
fra gli anti-pattern per Soft UI Evolution applicato al settore beauty.

**Niente emoji come icone.** SVG inline, stroke 1.8, coerenti con gli esistenti.

**Touch target ≥ 44×44 px** su tutto ciò che è cliccabile.

## Note

- Le foto convivono a **due risoluzioni**: 1170px quelle date dal salone
  (coppie prima/dopo, attrezzi, vetrina), 400px quelle recuperate dalle
  directory. Nessuna va mai mostrata sopra il proprio nativo: `.hero__media` è
  a 520px, in galleria e nel prima/dopo le foto sono ritagliate a `object-fit:
  cover` dentro riquadri molto più piccoli del nativo.
  Le card dei servizi usano icone e non foto.
- `vetrina.jpg` e `vetrina-manifesto.jpg` sono **due scatti diversi** della stessa
  vetrina in due momenti. Il secondo, più vecchio, è l'unico che mostra il
  manifesto Davines sul vetro. La sezione che lo mostrava è stata rimossa, quindi
  oggi il file non è usato da nessuna parte: non cancellarlo e non trattarlo come
  un doppione di `vetrina.jpg`.
- **Lavori** e **Recensioni** stanno su `.section--dark`, il verde `--brand`.
  Dentro quel contenitore i componenti non vanno duplicati in variante scura: i
  colori si ribaltano da soli tramite i token `--on-brand*` e `--cotto-300`
  (vedi il blocco `.section--dark` nel CSS, più il fallback in `@media print`,
  perché in stampa i fondi non vengono resi). Se aggiungi un componente lì
  dentro, estendi quel blocco invece di scrivere colori nel componente.
  Sul verde l'accento è `--cotto-300`, non `--cotto-500`: il cotto pieno si
  ferma a 2,7:1 e come testo non si legge.
- La disponibilità degli slot è finta ma deterministica (hash di data+ora):
  la stessa data mostra sempre gli stessi orari occupati. Non renderla random.
- Gli slot si generano dalla costante `SCHEDULE` in `main.js`, che replica gli
  orari reali **pausa pranzo compresa** (mar–gio 9–12:30 e 14–18:30, ven
  8:30–18:30, sab 8:30–17:30; dom e lun chiusi). Se cambiano gli orari vanno
  aggiornati in tre posti: `SCHEDULE`, la tabella `.hours` in `index.html` e il
  JSON-LD.
- In `i18n.js`, `setText()` usa `innerHTML` quando la stringa contiene `<` o
  `&` — serve per l'asterisco dei campi obbligatori, per un `<br>` e per gli
  `&amp;` nei nomi dei servizi. Vale solo per stringhe nostre: non passarci mai
  input utente.
- L'anno di attività nella sezione stats (`#years`) è calcolato in JS a partire
  dal 1989, non scritto a mano: non riscriverlo come numero fisso.
- Le foto del profilo Instagram del salone **non sono recuperabili via HTTP**:
  Instagram serve solo un guscio di login e ogni endpoint alternativo è chiuso.
  Vanno esportate a mano da chi ha l'account — non riprovare a scaricarle.
- La sezione prima/dopo usa coppie affiancate, non uno slider a tendina: le foto
  sono scattate a mano libera con inquadrature diverse fra il prima e il dopo, e
  un cursore che le sovrappone sembra rotto. Non convertirla in slider.
- Le coppie prima/dopo **non hanno didascalia**: sotto le foto non va scritto
  niente, parlano le immagini. Restano gli `alt`, che descrivono **solo quello
  che si vede**: non aggiungerci quali prodotti sono stati usati, non lo
  sappiamo.
- **Nessuna foto è cliccabile**: la lightbox è stata rimossa apposta, in
  galleria e nel prima/dopo. Niente `<button>` attorno alle immagini, niente
  icona lente in hover, niente zoom o cambio di luminosità al passaggio del
  mouse: sono affordance che promettono un ingrandimento che non esiste.

Il resto (dati del salone, provenienza delle foto, dubbio sull'indirizzo,
flusso di prenotazione, cosa manca per andare online) è nel `README.md` e non va
duplicato qui.
