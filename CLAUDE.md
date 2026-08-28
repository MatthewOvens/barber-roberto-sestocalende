# Hair Studio di Menzaghi Roberto — sito parrucchiere

Sito statico one-page per un salone **reale**: Sesto Calende (VA), via XX
Settembre 23, dal 1989. HTML/CSS/JS vanilla, nessun build, nessuna dipendenza.
Avvio: `python -m http.server 8000`

```
index.html              markup (italiano = sorgente di verità)
assets/css/styles.css   token in :root + tutti i componenti
assets/js/i18n.js       dizionari it/en + applicatore
assets/js/main.js       nav, reveal, lightbox, prenotazione, toast
assets/img/             9 foto vere del salone, 400px sul lato lungo
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
sempre — oggi sono 217 e 217. Una chiave presente solo in `it` non dà errore:
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

- Le foto sono vere ma piccole: **400 px sul lato lungo**. Il layout le limita
  apposta (`.hero__media` a 460px, `.lightbox__figure img` a 640px) per non
  sgranarle. Non allargare quei limiti finché non arrivano gli originali.
  Per lo stesso motivo le card dei servizi usano icone e non foto.
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

Il resto (dati del salone, provenienza delle foto, dubbio sull'indirizzo,
flusso di prenotazione, cosa manca per andare online) è nel `README.md` e non va
duplicato qui.
