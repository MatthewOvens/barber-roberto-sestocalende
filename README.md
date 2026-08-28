# Hair Studio di Menzaghi Roberto — sito del salone

Sito vetrina one-page per il parrucchiere **Hair Studio** di Sesto Calende (VA),
attivo dal 1989 con il posizionamento *Man & Woman Concept*: uomo e donna nello
stesso salone.

Nessuna dipendenza, nessun build step: HTML, CSS e JavaScript vanilla.

## Avvio

```bash
python -m http.server 8000
# poi apri http://localhost:8000
```

Meglio servirlo che aprire il file: così `<dialog>`, i path relativi e l'embed
della mappa si comportano come in produzione.

## Struttura

```
index.html                 markup completo (italiano = sorgente di verità)
assets/css/styles.css      design system + tutti i componenti
assets/js/i18n.js          dizionari IT/EN (217 chiavi per lingua) + applicatore
assets/js/main.js          nav, reveal, lightbox, prenotazione, toast
assets/img/                9 foto reali del salone
tools/check-i18n.py        verifica che i due dizionari restino allineati
```

## Dati del salone

Tutti verificati su fonti pubbliche (scheda L'Oréal Professionnel, PagineGialle,
PagineBianche, Google Maps) prima di finire nel markup e nel JSON-LD.

| | |
|---|---|
| Indirizzo | Via XX Settembre 23, 21018 Sesto Calende (VA) |
| Telefono | 0331 922139 |
| Email | rmenza@libero.it |
| P.IVA | 03169260126 |
| Social | Instagram `@roberto.hairstudio` · Facebook *Hair Studio Diffusion* |
| Apertura | 1989 |
| Brand | Davines · American Crew · L'Oréal Professionnel (salone partner) |

**Orari** (sono anche la base da cui `main.js` genera gli slot di prenotazione):

| Giorno | |
|---|---|
| Lunedì | chiuso |
| Martedì–Giovedì | 9:00–12:30 · 14:00–18:30 |
| Venerdì | 8:30–18:30 |
| Sabato | 8:30–17:30 |
| Domenica | chiuso |

> **Da confermare con Roberto: l'indirizzo.** La locandina storica del salone
> (`assets/img/man-woman-concept.jpg`) dice *"dal 1989 in via dell'Olmo, 13"*, e
> una directory minore riporta ancora quello. Tutte le fonti aggiornate — scheda
> ufficiale L'Oréal Professionnel, PagineGialle, PagineBianche e il pin di Google
> Maps — dicono via XX Settembre. Il sito usa **via XX Settembre 23**, che è
> quanto risulta oggi. Se il salone ha traslocato in un momento diverso da quello
> che abbiamo ricostruito, va corretto in `index.html` (markup, JSON-LD, embed
> mappa) e in `README.md`.

## Design system

La palette non viene da un dataset: è presa dal salone.

| Ruolo | Valore | Da dove |
|---|---|---|
| Stile | Soft UI Evolution (ombre diffuse, solo light mode) | — |
| Display | Playfair Display | eco del serif dell'insegna |
| UI/body | Inter | — |
| `--brand` | `#1E4B3C` | il verde bottiglia dell'insegna sopra la vetrina |
| `--accent` | `#A05B3E` | il cotto del pavimento — bianco sopra = 5,2:1, passa AA |
| `--accent-ink` | `#8A4F35` | stesso cotto, per testo piccolo su chiaro: 6,0:1 |
| `--bg` | `#FAF7F2` | avorio caldo |
| `--bg-alt` | `#F1EDE5` | — |

I token stanno in `:root` in cima al CSS su tre livelli (primitive → semantic →
componente). Cambiare `--accent` ricolora tutte le CTA del sito senza toccare
altro; cambiare `--brand` ricolora titoli, footer, banda CTA e manifesto.

Dark mode volutamente assente (vedi `CLAUDE.md`).

## Immagini

Le 9 foto in `assets/img/` sono **foto vere del salone**, recuperate dalla scheda
pubblica su PagineGialle/PagineBianche, scaricate e servite in locale. Sono state
guardate una per una prima di assegnarle: logo, vetrina con l'insegna verde,
interno con la poltrona da barbiere e il pavimento in cotto, due lavori di
colore, prodotti Davines, la locandina *Man & Woman Concept*.

Il limite è la risoluzione: **400 px sul lato lungo**. Il layout ne tiene conto —
`.hero__media` è limitato a 460 px e la lightbox a 640 px, così non vengono mai
ingrandite oltre la loro risoluzione nativa. Per la produzione servono gli
originali da Roberto, poi WebP/AVIF con `srcset`.

Per lo stesso motivo le card dei servizi usano icone SVG e non foto: sarebbe
servito riciclare la stessa immagine su più card.

## Sezioni con contenuti da completare

Tre sezioni hanno la struttura ma non i dati veri. Sono marcate a video con il
componente `.todo` (riquadro tratteggiato color cotto) e in `index.html` con un
commento in testa alla sezione:

- **Listino** — il salone non pubblica prezzi. Le voci ci sono, gli importi sono
  `€ ––`.
- **Team** — l'unica persona con conferma pubblica è Roberto Menzaghi. Le altre
  due schede sono segnaposto espliciti.
- **Recensioni** — nessuna recensione testuale pubblica trovata. Vanno importate
  da Google, con il testo e il nome di chi le ha scritte.

Il riquadro `.todo` è volutamente fuori palette: finché resta a video è un
promemoria che quella sezione non è pronta. Quando i dati arrivano si rimuove il
`.todo` insieme al commento; se una sezione non serve, si rimuove tutta.

## Prenotazione

Flusso in due step con indicatore di progresso:

1. **Servizio e orario** — servizio, data, slot orario
2. **I tuoi dati** — nome, telefono, email, note, consenso privacy

- gli slot escono dagli orari reali di apertura (la costante `SCHEDULE` in
  `main.js`, pausa pranzo compresa) a intervalli di 30 minuti; l'ultimo
  appuntamento di ogni fascia parte mezz'ora prima della chiusura
- la disponibilità è **finta ma deterministica**: un hash di data+ora decide se
  uno slot è occupato, così la stessa data mostra sempre gli stessi slot
- validazione al `blur`, mai sul singolo tasto; errore sotto il campo, `role="alert"`,
  focus automatico sul primo campo invalido
- date passate e giorni di chiusura vengono respinti con messaggi distinti

**Non c'è backend.** Il submit è un `setTimeout` di 1,1 s in `main.js` (cerca il
commento `Demo only`). Per questo la modale mostra un avviso `.bform__demo`: *il
modulo non è collegato, per prenotare davvero chiama*. Su un'attività reale quel
disclaimer non va tolto finché non c'è una `fetch()` vera verso un endpoint o un
gestionale (Treatwell, Fresha, Google Reserve).

## Lingue

L'italiano è scritto direttamente nell'HTML, quindi il sito è completo anche con
JavaScript disattivato. L'inglese viene applicato da `i18n.js` tramite gli
attributi `data-i18n`, `data-i18n-alt`, `data-i18n-aria-label`,
`data-i18n-placeholder` e `data-i18n-title`.

- la scelta si salva in `localStorage` (`hairstudio.lang`)
- al primo accesso segue `navigator.language`, con fallback italiano
- `<html lang>` viene aggiornato al cambio lingua
- date e giorni della settimana usano `Intl.DateTimeFormat` con il locale corrente

Dopo ogni modifica ai testi:

```bash
python tools/check-i18n.py
```

Controlla parità e duplicati fra `it` ed `en`, chiavi usate nel markup o in
`main.js` ma assenti dal dizionario, e chiavi rimaste orfane.

Per aggiungere una lingua: duplica un blocco in `DICT` dentro `i18n.js` e
aggiungi un `<button class="lang__btn" data-lang="xx">` nell'header.

## Accessibilità

- skip link, `:focus-visible` visibile su tutti gli elementi interattivi
- target touch ≥ 44×44 px (bottoni, slot orari, switch lingua, social, burger)
- gerarchia dei titoli senza salti, un solo `h1`, `alt` su tutte le immagini
- `<dialog>` nativo per prenotazione e lightbox: Esc, focus trap e ritorno del
  focus all'elemento che ha aperto la modale
- `prefers-reduced-motion` disattiva reveal, parallasse e hover animati
- gli errori non usano solo il colore: icona + testo con la soluzione

## Cosa resta da fare per andare online

1. Confermare l'indirizzo (vedi il riquadro sopra)
2. Farsi dare da Roberto le foto originali ad alta risoluzione, e una foto sua
   per la scheda del team
3. Riempire o rimuovere le tre sezioni marcate `.todo`
4. Collegare il form a un backend o a un gestionale, e solo allora togliere
   l'avviso `.bform__demo`
5. Scrivere privacy e cookie policy (i link nel footer sono placeholder `#`)
6. Verificare che l'embed della mappa punti al posto giusto
