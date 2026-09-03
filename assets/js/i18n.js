/* ============================================================
   HAIR STUDIO di Menzaghi Roberto — i18n
   L'italiano e' la sorgente di verita' e sta gia' in index.html:
   il sito resta leggibile con JavaScript disattivato. L'inglese
   viene applicato su richiesta e salvato in localStorage.

   Le due tabelle devono avere sempre lo stesso numero di chiavi:
   oggi sono 237 e 237.
   ============================================================ */
(function () {
  "use strict";

  var DICT = {
    it: {
      /* — accessibilità e testi assistivi — */
      "a11y.skip": "Salta al contenuto principale",
      "a11y.brandHome": "Hair Studio di Menzaghi Roberto — home",
      "a11y.mainNav": "Menu principale",
      "a11y.langGroup": "Lingua del sito",
      "a11y.openMenu": "Apri il menu",
      "a11y.stats": "Il salone in numeri",
      "a11y.instagram": "Instagram del salone",
      "a11y.facebook": "Facebook del salone",
      "a11y.call": "Chiama il salone",
      "a11y.footerNav": "Link di navigazione nel footer",
      "a11y.closeBooking": "Chiudi la prenotazione",
      "a11y.lightbox": "Immagine ingrandita",
      "a11y.close": "Chiudi",
      "a11y.prev": "Immagine precedente",
      "a11y.next": "Immagine successiva",
      "a11y.closeMenu": "Chiudi il menu",

      /* — barra in alto — */
      "announce.text": "Si riceve su appuntamento — uomo e donna",

      /* — testi alternativi delle foto — */
      "alt.logo": "Logo Hair Studio diffusion: un'orca stilizzata dentro una cornice rosa e bordeaux",
      "alt.vetrina": "Vetrina del salone: la scritta Hair Studio, Man & Woman Concept sul vetro, un mazzo di mimose e i prodotti in esposizione",
      "alt.interno": "Interno del salone: postazioni nere con specchi, poltrona da barbiere e pavimento in cotto",
      "alt.balayage": "Capelli lunghi mossi con balayage dal castano al rame, visti di spalle in salone",
      "alt.styling": "Il parrucchiere spruzza un prodotto sui capelli mentre li tiene tesi con il pettine",
      "alt.onde": "Onde definite su capelli biondo miele, sullo sfondo il pavimento in cotto del salone",
      "alt.davinesShampoo": "Tre flaconi di shampoo Davines SOLU e NOUNOU accanto a piante grasse",
      "alt.davinesBanner": "Flaconi e vasetti Davines appoggiati su un piano di legno chiaro",
      "alt.concept": "Locandina del salone: Hair Studio, Man & Woman Concept, dal 1989",
      "alt.tools": "Attrezzi da barbiere su un tappetino Wahl: tosatrice, rifinitore dorato, pettine rosso e due forbici",
      "alt.tools2": "Il banco da lavoro: tosatrice Wahl, rifinitore, rasoio a mano libera, pettini, forbici e i vasetti American Crew",
      "alt.ba1prima": "Capelli lunghi visti di spalle: ricrescita scura e lunghezze biondo ramato secche e crespe",
      "alt.ba1dopo": "Gli stessi capelli dopo il servizio: biondo caldo uniforme e onde morbide e lucide",
      "alt.ba2prima": "Capelli scuri di media lunghezza visti di spalle, molto crespi e gonfi",
      "alt.ba2dopo": "Gli stessi capelli dopo il servizio: lisci, lucidi e visibilmente più lunghi",
      "alt.ba3prima": "Capelli di media lunghezza visti di spalle, mossi e spenti con ricrescita scura",
      "alt.ba3dopo": "Gli stessi capelli dopo il servizio: ricci definiti con riflessi caramello",
      "alt.ba4prima": "Capelli lunghi biondi visti di spalle, di tono uniforme e opaco, con lunghezze crespe",
      "alt.ba4dopo": "Gli stessi capelli dopo il servizio: biondo multitono luminoso con onde definite",
      "alt.manifesto": "Il manifesto stampato sul vetro della vetrina, accanto all'insegna verde",

      /* — marchio — */
      "brand.tagline": "Man &amp; Woman Concept · Sesto Calende",

      /* — navigazione — */
      "nav.services": "Servizi",
      "nav.lookbook": "Lavori",
      "nav.prices": "Listino",
      "nav.products": "Prodotti",
      "nav.about": "Il salone",
      "nav.contact": "Contatti",

      /* — call to action — */
      "cta.book": "Prenota",
      "cta.bookNow": "Prenota ora",
      "cta.call": "0331 922139",
      "cta.bookThis": "Prenota questo servizio",
      "cta.callSalon": "Chiama il salone",
      "cta.bookTreatment": "Prenota un trattamento",
      "cta.bookAppointment": "Prenota appuntamento",

      /* — hero — */
      "hero.eyebrow": "Man &amp; Woman Concept · dal 1989",
      "hero.title1": "Un solo salone",
      "hero.title2": "per lui e per lei",
      "hero.title3": "a Sesto Calende.",
      "hero.lead": "Taglio, colore e cura del capello in via XX Settembre. Lavoriamo con Davines, American Crew e L'Oréal Professionnel, scegliendo il prodotto in base al tuo capello — non il contrario.",
      "hero.chip1s": "1989",
      "hero.chip1": "· sempre a Sesto Calende",
      "hero.chip2s": "Uomo &amp; Donna",
      "hero.chip2": "· stesso salone",
      "hero.chip3s": "Davines",
      "hero.chip3": "· American Crew · L'Oréal",
      "hero.badge": "Salone partner<br>Professionnel",

      /* — numeri — */
      "num.since": "1989",
      "stat.since": "Anno di apertura",
      "stat.years": "Anni di attività, senza mai cambiare paese",
      "num.brands": "3",
      "stat.brands": "Brand professionali in salone",
      "num.days": "5",
      "stat.days": "Giorni di apertura, martedì–sabato",

      /* — servizi — */
      "services.eyebrow": "Servizi",
      "services.title": "Quello che facciamo, dal 1989",
      "services.lead": "Un salone unisex vero: la stessa poltrona per un taglio maschile e per un balayage. La consulenza viene prima del prodotto, sempre.",
      "srv.1.title": "Taglio &amp; Piega Donna",
      "srv.1.text": "Taglio costruito sulla forma del viso e sulla natura del capello, piega e styling. Compresa la consulenza iniziale.",
      "srv.2.title": "Taglio Uomo &amp; Barba",
      "srv.2.text": "Taglio classico o moderno, sfumature, rifinitura barba. Styling con American Crew, la linea che teniamo in salone per l'uomo.",
      "srv.3.title": "Colore &amp; Balayage",
      "srv.3.text": "Colorazione permanente o tono su tono con Dia Color, schiariture e French Balayage. Prova allergica su richiesta prima del servizio.",
      "srv.4.title": "Trattamenti &amp; Cura",
      "srv.4.text": "Metal Detox prima del colore, Absolut Repair Molecular per il capello sfibrato, Vitamino Color Spectrum per tenere il riflesso.",
      "srv.5.title": "Ricci &amp; Capello naturale",
      "srv.5.text": "Taglio a secco sul riccio, definizione con Curl Expression e le linee Davines. Ti spieghiamo come rifarlo a casa.",
      "srv.6.title": "Sposa &amp; Cerimonia",
      "srv.6.text": "Acconciature da sposa e da sera, con prova concordata prima del giorno. Per queste date meglio chiamare direttamente in salone.",

      /* — lavori — */
      "look.eyebrow": "Lavori",
      "look.title": "Il salone e quello che ci esce dalle mani",
      "look.lead": "Foto scattate in salone, in via XX Settembre. Nessun set, nessun modello: sono clienti veri e la luce è quella che c'è.",
      "look.ig": "Altri lavori su Instagram, @roberto.hairstudio",

      /* — prima / dopo — */
      "ba.eyebrow": "Prima e dopo",
      "ba.title": "La differenza, sulla stessa testa",
      "ba.lead": "Un colore si giudica dal punto di partenza. Qui le due foto stanno affiancate: com'era entrando, com'era uscendo. Sono clienti del salone, fotografate di spalle.",
      "ba.before": "Prima",
      "ba.after": "Dopo",
      "ba.cap1": "Prima: ricrescita scura e lunghezze ramate, secche e crespe. Dopo: biondo caldo uniforme dalla radice alle punte, onde morbide e lucide.",
      "ba.cap2": "Prima: capello scuro molto crespo e gonfio, che sembrava più corto di quanto fosse. Dopo: liscio, disciplinato e lucido — la lunghezza reale è tornata visibile.",
      "ba.cap3": "Prima: media lunghezza mossa, ricrescita scura e lunghezze spente. Dopo: riflessi caramello distribuiti sulle onde e ricci definiti.",
      "ba.cap4": "Prima: biondo uniforme e opaco, lunghezze crespe. Dopo: biondo multitono con schiariture chiare, onde definite e luminose.",

      /* — listino — */
      "price.eyebrow": "Listino",
      "price.title": "Quanto costa",
      "price.lead": "Il prezzo dipende da lunghezza, densità e stato del capello: te lo diciamo in consulenza, prima di iniziare, e non cambia a lavoro finito.",
      "price.todo": "Sezione da completare — inserire qui i prezzi reali del salone prima di pubblicare.",
      "price.cat1": "Donna",
      "price.d1": "Taglio e piega",
      "price.d2": "Solo piega",
      "price.d3": "Colore",
      "price.d4": "Balayage / schiariture",
      "price.d5": "Acconciatura cerimonia",
      "price.cat2": "Uomo",
      "price.u1": "Taglio",
      "price.u2": "Taglio e barba",
      "price.u3": "Solo barba",
      "price.u4": "Taglio bambino",
      "price.u5": "Colore uomo",
      "price.cat3": "Trattamenti",
      "price.featureDesc": "Metal Detox, Absolut Repair Molecular, Vitamino Color Spectrum, Curl Expression. Si aggiungono al servizio o si fanno da soli.",
      "price.unit": "a trattamento",
      "price.note": "Chiedi in salone quale serve al tuo capello.",

      /* — prodotti — */
      "brands.eyebrow": "Prodotti",
      "brands.title": "Tre linee, scelte per motivi diversi",
      "brands.lead": "Non teniamo tutto. Teniamo quello che sappiamo usare e che puoi ricomprare qui quando finisce.",
      "brand1.role": "Cura quotidiana",
      "brand1.text": "Essential Haircare: SOLU, NOUNOU, LOVE. Linea italiana, formule a basso impatto e packaging ridotto. È la linea che consigliamo per casa.",
      "brand2.role": "Styling uomo",
      "brand2.text": "Fiber, pomate e prodotti per la barba. Tenuta senza effetto plastica, pensata per i tagli maschili corti e medi.",
      "brand3.role": "Colore e trattamenti tecnici",
      "brand3.text": "Siamo salone partner: Dia Color per il tono su tono, French Balayage per le schiariture, Metal Detox e Absolut Repair Molecular in cabina.",
      "brands.cap1": "Il banco da lavoro per l'uomo: rasoio, macchinette, forbici e i vasetti American Crew.",
      "brands.caption": "Le linee in vendita in salone: se una ti trovi bene, la ricompri qui.",

      /* — manifesto — */
      "mani.eyebrow": "Sulla vetrina",
      "mani.title": "Quello che c'è scritto sul vetro",
      "mani.quote": "In questo salone accogliamo i nostri ospiti. Ascoltiamo le richieste. Ci prendiamo cura delle persone. Amiamo i capelli. Crediamo in una bellezza sostenibile. Celebriamo grazia ed eleganza. Apprezziamo i suggerimenti. Crediamo che ciò che è bello sia anche buono.",
      "mani.src": "Il manifesto Davines, applicato sulla vetrina del salone.",

      /* — team — */
      "team.eyebrow": "Chi ti segue",
      "team.title": "Le mani che ti lavorano",
      "team.todo": "Sezione da completare — mancano nomi, ruoli e foto del resto del team.",
      "team.1.role": "Titolare · dal 1989",
      "team.1.bio": "Ha aperto Hair Studio nel 1989 e da allora taglia in via XX Settembre. Colore, schiariture e taglio maschile.",
      "team.2.name": "Nome da inserire",
      "team.2.role": "Ruolo da inserire",
      "team.2.bio": "Segnaposto. Sostituire con nome, ruolo, foto e due righe di presentazione.",
      "team.3.name": "Nome da inserire",
      "team.3.role": "Ruolo da inserire",
      "team.3.bio": "Segnaposto. Sostituire con nome, ruolo, foto e due righe di presentazione.",

      /* — recensioni — */
      "rev.eyebrow": "Recensioni",
      "rev.title": "Cosa dicono i clienti",
      "rev.todo": "Sezione da completare — qui vanno recensioni Google reali, testo e nome di chi le ha scritte.",
      "rev.1": "Testo della recensione da inserire.",
      "rev.by": "Nome cliente",
      "rev.src": "Fonte e data",
      "rev.2": "Testo della recensione da inserire.",
      "rev.3": "Testo della recensione da inserire.",
      "rev.google": "Leggi e lascia una recensione su Google",

      /* — il salone — */
      "about.eyebrow": "Il salone",
      "about.title": "Dal 1989 nello stesso paese",
      "about.p1": "Hair Studio ha aperto nel 1989 e da allora lavora a Sesto Calende. Prima in via dell'Olmo, oggi in via XX Settembre: stessa insegna verde, stesso modo di lavorare.",
      "about.p2": "\"Man &amp; Woman Concept\" non è uno slogan: è la scelta di tenere uomo e donna nello stesso salone, con la stessa attenzione. Chi entra per una sfumatura e chi entra per un balayage si siede sulla stessa poltrona.",
      "about.t1": "Consulenza prima di ogni servizio tecnico",
      "about.t2": "Salone partner L'Oréal Professionnel",
      "about.t3": "Linee Davines in vendita in salone",
      "about.t4": "Taglio uomo, barba e taglio bambino",

      /* — faq — */
      "faq.eyebrow": "Domande",
      "faq.title": "Prima di venire",
      "faq.q1": "Serve l'appuntamento?",
      "faq.a1": "Sì, meglio prenotare: siamo un salone piccolo e lavoriamo su appuntamento. Chiama lo 0331 922139 oppure usa il modulo qui sul sito, ti richiamiamo per confermare.",
      "faq.q2": "Fate anche uomo?",
      "faq.a2": "Sì. Hair Studio è unisex dall'inizio — è il senso di \"Man &amp; Woman Concept\". Taglio, sfumature, barba e taglio bambino, con lo styling American Crew.",
      "faq.q3": "Quali prodotti usate?",
      "faq.a3": "Davines per lavaggio e cura quotidiana, American Crew per lo styling uomo, L'Oréal Professionnel per colore e trattamenti tecnici. Siamo salone partner L'Oréal Professionnel.",
      "faq.q4": "Posso comprare i prodotti in salone?",
      "faq.a4": "Sì. Teniamo in vendita le linee che usiamo, così quando finisci lo shampoo ricompri esattamente quello che ti abbiamo consigliato.",
      "faq.q5": "Come disdico un appuntamento?",
      "faq.a5": "Chiamando lo 0331 922139 durante gli orari di apertura. Un preavviso ci permette di liberare il posto per qualcun altro.",

      /* — banda cta — */
      "band.title": "Passa a trovarci in via XX Settembre",
      "band.text": "Martedì e sabato sono i giorni più pieni: se hai in mente una data, meglio chiamare con qualche giorno di anticipo.",

      /* — contatti — */
      "contact.eyebrow": "Contatti",
      "contact.title": "Dove siamo e quando siamo aperti",
      "contact.address": "Indirizzo",
      "contact.directions": "Apri in Google Maps",
      "contact.hours": "Orari",
      "contact.reach": "Contatti diretti",
      "contact.mapTitle": "Mappa: Hair Studio, via XX Settembre 23, Sesto Calende",

      /* — giorni — */
      "day.mon": "Lunedì",
      "day.tue": "Martedì",
      "day.wed": "Mercoledì",
      "day.thu": "Giovedì",
      "day.fri": "Venerdì",
      "day.sat": "Sabato",
      "day.sun": "Domenica",

      /* — orari — */
      "hours.closed": "Chiuso",

      /* — footer — */
      "footer.blurb": "Parrucchiere uomo e donna a Sesto Calende dal 1989. Via XX Settembre 23.",
      "footer.h1": "Servizi",
      "footer.h2": "Salone",
      "footer.faq": "Domande frequenti",
      "footer.h3": "Info",
      "footer.privacy": "Privacy policy",
      "footer.cookie": "Cookie policy",
      "footer.legal": "Via XX Settembre 23, 21018 Sesto Calende (VA)",

      /* — prenotazione — */
      "book.eyebrow": "Hair Studio · Sesto Calende",
      "book.title": "Richiedi un appuntamento",
      "book.step1": "Servizio e orario",
      "book.step2": "I tuoi dati",
      "book.service": "Servizio <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.choose": "Scegli un servizio…",
      "book.date": "Data <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.dateHint": "Siamo chiusi domenica e lunedì.",
      "book.time": "Orario <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.pickDateFirst": "Scegli prima una data.",
      "book.next": "Continua",
      "book.name": "Nome e cognome <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.phone": "Telefono <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.phoneHint": "Ti richiamiamo qui per confermare.",
      "book.email": "Email <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.notes": "Note (facoltativo)",
      "book.notesPh": "Capello trattato, allergie, richieste particolari…",
      "book.privacy": "Acconsento al trattamento dei miei dati per essere ricontattato. <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.back": "Indietro",
      "book.submit": "Invia richiesta",
      "book.demo": "Il modulo non è ancora collegato: al momento non invia nulla. Per prenotare davvero chiama lo 0331 922139.",
      "book.doneTitle": "Richiesta registrata",
      "book.doneText": "Ti ricontattiamo al numero che ci hai lasciato per confermare giorno e ora.",
      "book.close": "Chiudi",
      "book.noSlots": "Nessun orario libero in questa data. Prova un altro giorno.",
      "book.slotBooked": "già occupato",

      /* — riepilogo — */
      "recap.service": "Servizio",
      "recap.when": "Quando",

      /* — errori di validazione — */
      "err.service": "Scegli il servizio che ti interessa.",
      "err.date": "Inserisci la data dell'appuntamento.",
      "err.dateClosed": "Quel giorno siamo chiusi: scegli da martedì a sabato.",
      "err.datePast": "La data è già passata: scegli un giorno futuro.",
      "err.time": "Seleziona un orario tra quelli liberi.",
      "err.name": "Scrivi nome e cognome (almeno 2 caratteri).",
      "err.phone": "Inserisci un numero di telefono valido (almeno 8 cifre).",
      "err.email": "Controlla l'indirizzo email, sembra incompleto.",
      "err.privacy": "Devi accettare la privacy policy per procedere.",

      /* — toast — */
      "toast.lang": "Lingua impostata: Italiano",
      "toast.booked": "Richiesta inviata. Ti richiamiamo per confermare."
    },

    en: {
      /* — accessibilità e testi assistivi — */
      "a11y.skip": "Skip to main content",
      "a11y.brandHome": "Hair Studio di Menzaghi Roberto — home",
      "a11y.mainNav": "Main menu",
      "a11y.langGroup": "Site language",
      "a11y.openMenu": "Open menu",
      "a11y.stats": "The salon in numbers",
      "a11y.instagram": "The salon on Instagram",
      "a11y.facebook": "The salon on Facebook",
      "a11y.call": "Call the salon",
      "a11y.footerNav": "Footer navigation links",
      "a11y.closeBooking": "Close the booking form",
      "a11y.lightbox": "Enlarged image",
      "a11y.close": "Close",
      "a11y.prev": "Previous image",
      "a11y.next": "Next image",
      "a11y.closeMenu": "Close menu",

      /* — barra in alto — */
      "announce.text": "By appointment — men and women",

      /* — testi alternativi delle foto — */
      "alt.logo": "Hair Studio diffusion logo: a stylised orca inside a pink and burgundy frame",
      "alt.vetrina": "The salon window: the Hair Studio, Man &amp; Woman Concept lettering on the glass, a bunch of mimosa and the products on display",
      "alt.interno": "Inside the salon: black stations with mirrors, a barber chair and a terracotta tiled floor",
      "alt.balayage": "Long wavy hair with a balayage from brown to copper, seen from behind in the salon",
      "alt.styling": "The hairdresser sprays a product onto the hair while holding it taut with a comb",
      "alt.onde": "Defined waves on honey blonde hair, with the salon's terracotta floor behind",
      "alt.davinesShampoo": "Three bottles of Davines SOLU and NOUNOU shampoo next to succulents",
      "alt.davinesBanner": "Davines bottles and jars resting on a pale wooden surface",
      "alt.concept": "Salon poster: Hair Studio, Man &amp; Woman Concept, since 1989",
      "alt.tools": "Barber tools on a Wahl mat: clipper, gold trimmer, red comb and two pairs of shears",
      "alt.tools2": "The workbench: Wahl clipper, trimmer, straight razor, combs, shears and the American Crew tubs",
      "alt.ba1prima": "Long hair seen from behind: dark regrowth and dry, frizzy coppery lengths",
      "alt.ba1dopo": "The same hair after the service: an even warm blonde with soft, glossy waves",
      "alt.ba2prima": "Mid-length dark hair seen from behind, very frizzy and swollen",
      "alt.ba2dopo": "The same hair after the service: straight, glossy and visibly longer",
      "alt.ba3prima": "Mid-length hair seen from behind, wavy and dull with dark regrowth",
      "alt.ba3dopo": "The same hair after the service: defined curls with caramel highlights",
      "alt.ba4prima": "Long blonde hair seen from behind, flat and uniform in tone, with frizzy lengths",
      "alt.ba4dopo": "The same hair after the service: a luminous multi-tonal blonde with defined waves",
      "alt.manifesto": "The manifesto printed on the shop window glass, next to the green sign",

      /* — marchio — */
      "brand.tagline": "Man &amp; Woman Concept · Sesto Calende",

      /* — navigazione — */
      "nav.services": "Services",
      "nav.lookbook": "Our work",
      "nav.prices": "Prices",
      "nav.products": "Products",
      "nav.about": "The salon",
      "nav.contact": "Contact",

      /* — call to action — */
      "cta.book": "Book",
      "cta.bookNow": "Book now",
      "cta.call": "+39 0331 922139",
      "cta.bookThis": "Book this service",
      "cta.callSalon": "Call the salon",
      "cta.bookTreatment": "Book a treatment",
      "cta.bookAppointment": "Book an appointment",

      /* — hero — */
      "hero.eyebrow": "Man &amp; Woman Concept · since 1989",
      "hero.title1": "One salon",
      "hero.title2": "for him and for her",
      "hero.title3": "in Sesto Calende.",
      "hero.lead": "Cutting, colour and hair care on via XX Settembre. We work with Davines, American Crew and L'Oréal Professionnel, picking the product to suit your hair — not the other way round.",
      "hero.chip1s": "1989",
      "hero.chip1": "· always in Sesto Calende",
      "hero.chip2s": "Men &amp; Women",
      "hero.chip2": "· one salon",
      "hero.chip3s": "Davines",
      "hero.chip3": "· American Crew · L'Oréal",
      "hero.badge": "Partner salon<br>Professionnel",

      /* — numeri — */
      "num.since": "1989",
      "stat.since": "The year we opened",
      "stat.years": "Years in business, never leaving the town",
      "num.brands": "3",
      "stat.brands": "Professional brands in the salon",
      "num.days": "5",
      "stat.days": "Days open, Tuesday to Saturday",

      /* — servizi — */
      "services.eyebrow": "Services",
      "services.title": "What we have been doing since 1989",
      "services.lead": "A genuinely unisex salon: the same chair for a men's cut and for a balayage. The consultation always comes before the product.",
      "srv.1.title": "Women's Cut &amp; Blow-dry",
      "srv.1.text": "A cut built around the shape of your face and the nature of your hair, then blow-dry and styling. The opening consultation is included.",
      "srv.2.title": "Men's Cut &amp; Beard",
      "srv.2.text": "Classic or modern cuts, fades, beard trims. Styled with American Crew, the line we keep in the salon for men.",
      "srv.3.title": "Colour &amp; Balayage",
      "srv.3.text": "Permanent or tone-on-tone colour with Dia Color, lightening and French Balayage. Patch test on request before the service.",
      "srv.4.title": "Treatments &amp; Care",
      "srv.4.text": "Metal Detox before colouring, Absolut Repair Molecular for damaged hair, Vitamino Color Spectrum to hold the tone.",
      "srv.5.title": "Curls &amp; Natural Hair",
      "srv.5.text": "Dry cutting on curls, definition with Curl Expression and the Davines lines. We show you how to do it again at home.",
      "srv.6.title": "Bridal &amp; Occasions",
      "srv.6.text": "Bridal and evening styling, with a trial run agreed before the day. For these dates it is best to call the salon directly.",

      /* — lavori — */
      "look.eyebrow": "Our work",
      "look.title": "The salon, and what comes out of our hands",
      "look.lead": "Photos taken in the salon, on via XX Settembre. No set, no models: these are real clients and the light is whatever there was.",
      "look.ig": "More work on Instagram, @roberto.hairstudio",

      /* — prima / dopo — */
      "ba.eyebrow": "Before and after",
      "ba.title": "The difference, on the same head",
      "ba.lead": "Colour is judged against where it started. Here the two photos sit side by side: how it looked walking in, how it looked walking out. These are salon clients, photographed from behind.",
      "ba.before": "Before",
      "ba.after": "After",
      "ba.cap1": "Before: dark regrowth and dry, frizzy coppery lengths. After: an even warm blonde from root to tip, with soft, glossy waves.",
      "ba.cap2": "Before: very frizzy, swollen dark hair that looked shorter than it was. After: straight, smooth and glossy — the real length is visible again.",
      "ba.cap3": "Before: mid-length and wavy, with dark regrowth and dull lengths. After: caramel highlights spread through the waves, curls defined.",
      "ba.cap4": "Before: a flat, uniform blonde with frizzy lengths. After: a multi-tonal blonde with bright lift and defined waves.",

      /* — listino — */
      "price.eyebrow": "Prices",
      "price.title": "What it costs",
      "price.lead": "The price depends on length, density and the condition of your hair: we tell you at the consultation, before we start, and it does not change once the work is done.",
      "price.todo": "Section to complete — put the salon's real prices here before publishing.",
      "price.cat1": "Women",
      "price.d1": "Cut and blow-dry",
      "price.d2": "Blow-dry only",
      "price.d3": "Colour",
      "price.d4": "Balayage / lightening",
      "price.d5": "Occasion styling",
      "price.cat2": "Men",
      "price.u1": "Cut",
      "price.u2": "Cut and beard",
      "price.u3": "Beard only",
      "price.u4": "Children's cut",
      "price.u5": "Men's colour",
      "price.cat3": "Treatments",
      "price.featureDesc": "Metal Detox, Absolut Repair Molecular, Vitamino Color Spectrum, Curl Expression. Added to a service, or booked on their own.",
      "price.unit": "per treatment",
      "price.note": "Ask in the salon which one your hair needs.",

      /* — prodotti — */
      "brands.eyebrow": "Products",
      "brands.title": "Three lines, each chosen for a different reason",
      "brands.lead": "We do not stock everything. We stock what we know how to use and what you can buy again here when it runs out.",
      "brand1.role": "Everyday care",
      "brand1.text": "Essential Haircare: SOLU, NOUNOU, LOVE. An Italian line with low-impact formulas and minimal packaging. This is what we recommend for home.",
      "brand2.role": "Men's styling",
      "brand2.text": "Fiber, pomades and beard products. Hold without the plastic feel, made for short and medium men's cuts.",
      "brand3.role": "Colour and technical treatments",
      "brand3.text": "We are a partner salon: Dia Color for tone-on-tone, French Balayage for lightening, Metal Detox and Absolut Repair Molecular at the basin.",
      "brands.cap1": "The men's workbench: razor, clippers, shears and the American Crew tubs.",
      "brands.caption": "The lines on sale in the salon: if one suits you, you buy it again here.",

      /* — manifesto — */
      "mani.eyebrow": "On the window",
      "mani.title": "What is written on the glass",
      "mani.quote": "In this salon we welcome our guests. We listen to requests. We care about people. We love hair. We believe in sustainable beauty. We celebrate grace and elegance. We appreciate suggestions. We believe that beautiful is also good.",
      "mani.src": "The Davines manifesto, printed on the salon window.",

      /* — team — */
      "team.eyebrow": "Who looks after you",
      "team.title": "The hands that work on you",
      "team.todo": "Section to complete — names, roles and photos of the rest of the team are missing.",
      "team.1.role": "Owner · since 1989",
      "team.1.bio": "He opened Hair Studio in 1989 and has been cutting on via XX Settembre ever since. Colour, lightening and men's cutting.",
      "team.2.name": "Name to add",
      "team.2.role": "Role to add",
      "team.2.bio": "Placeholder. Replace with a name, a role, a photo and two lines of introduction.",
      "team.3.name": "Name to add",
      "team.3.role": "Role to add",
      "team.3.bio": "Placeholder. Replace with a name, a role, a photo and two lines of introduction.",

      /* — recensioni — */
      "rev.eyebrow": "Reviews",
      "rev.title": "What clients say",
      "rev.todo": "Section to complete — real Google reviews go here, with the text and the name of whoever wrote them.",
      "rev.1": "Review text to add.",
      "rev.by": "Client name",
      "rev.src": "Source and date",
      "rev.2": "Review text to add.",
      "rev.3": "Review text to add.",
      "rev.google": "Read and leave a review on Google",

      /* — il salone — */
      "about.eyebrow": "The salon",
      "about.title": "In the same town since 1989",
      "about.p1": "Hair Studio opened in 1989 and has worked in Sesto Calende ever since. First on via dell'Olmo, today on via XX Settembre: same green sign, same way of working.",
      "about.p2": "\"Man &amp; Woman Concept\" is not a slogan: it is the choice to keep men and women in the same salon, with the same attention. Someone coming in for a fade and someone coming in for a balayage sit in the same chair.",
      "about.t1": "A consultation before every technical service",
      "about.t2": "L'Oréal Professionnel partner salon",
      "about.t3": "Davines lines for sale in the salon",
      "about.t4": "Men's cuts, beards and children's cuts",

      /* — faq — */
      "faq.eyebrow": "Questions",
      "faq.title": "Before you come in",
      "faq.q1": "Do I need an appointment?",
      "faq.a1": "Yes, it is better to book: we are a small salon and we work by appointment. Call +39 0331 922139 or use the form on this site and we will call you back to confirm.",
      "faq.q2": "Do you do men too?",
      "faq.a2": "Yes. Hair Studio has been unisex from the start — that is the point of \"Man &amp; Woman Concept\". Cuts, fades, beards and children's cuts, styled with American Crew.",
      "faq.q3": "Which products do you use?",
      "faq.a3": "Davines for washing and everyday care, American Crew for men's styling, L'Oréal Professionnel for colour and technical treatments. We are an L'Oréal Professionnel partner salon.",
      "faq.q4": "Can I buy the products in the salon?",
      "faq.a4": "Yes. We keep the lines we use on sale, so when your shampoo runs out you buy back exactly what we recommended.",
      "faq.q5": "How do I cancel an appointment?",
      "faq.a5": "By calling +39 0331 922139 during opening hours. A bit of notice lets us free the slot for someone else.",

      /* — banda cta — */
      "band.title": "Come and see us on via XX Settembre",
      "band.text": "Tuesdays and Saturdays are the busiest days: if you have a date in mind, it is better to call a few days ahead.",

      /* — contatti — */
      "contact.eyebrow": "Contact",
      "contact.title": "Where we are and when we are open",
      "contact.address": "Address",
      "contact.directions": "Open in Google Maps",
      "contact.hours": "Opening hours",
      "contact.reach": "Direct contacts",
      "contact.mapTitle": "Map: Hair Studio, via XX Settembre 23, Sesto Calende",

      /* — giorni — */
      "day.mon": "Monday",
      "day.tue": "Tuesday",
      "day.wed": "Wednesday",
      "day.thu": "Thursday",
      "day.fri": "Friday",
      "day.sat": "Saturday",
      "day.sun": "Sunday",

      /* — orari — */
      "hours.closed": "Closed",

      /* — footer — */
      "footer.blurb": "Hairdresser for men and women in Sesto Calende since 1989. Via XX Settembre 23.",
      "footer.h1": "Services",
      "footer.h2": "Salon",
      "footer.faq": "Frequently asked questions",
      "footer.h3": "Info",
      "footer.privacy": "Privacy policy",
      "footer.cookie": "Cookie policy",
      "footer.legal": "Via XX Settembre 23, 21018 Sesto Calende (VA), Italy",

      /* — prenotazione — */
      "book.eyebrow": "Hair Studio · Sesto Calende",
      "book.title": "Request an appointment",
      "book.step1": "Service and time",
      "book.step2": "Your details",
      "book.service": "Service <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.choose": "Choose a service…",
      "book.date": "Date <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.dateHint": "We are closed on Sunday and Monday.",
      "book.time": "Time <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.pickDateFirst": "Pick a date first.",
      "book.next": "Continue",
      "book.name": "Full name <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.phone": "Phone <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.phoneHint": "We call you back on this number to confirm.",
      "book.email": "Email <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.notes": "Notes (optional)",
      "book.notesPh": "Treated hair, allergies, anything specific…",
      "book.privacy": "I agree to my data being used so you can contact me back. <span class=\"req\" aria-hidden=\"true\">*</span>",
      "book.back": "Back",
      "book.submit": "Send request",
      "book.demo": "This form is not connected yet: right now it sends nothing. To book for real, call +39 0331 922139.",
      "book.doneTitle": "Request recorded",
      "book.doneText": "We will call you back on the number you left to confirm the day and time.",
      "book.close": "Close",
      "book.noSlots": "No times left on this date. Try another day.",
      "book.slotBooked": "already booked",

      /* — riepilogo — */
      "recap.service": "Service",
      "recap.when": "When",

      /* — errori di validazione — */
      "err.service": "Please choose the service you want.",
      "err.date": "Please enter the appointment date.",
      "err.dateClosed": "We're closed that day — pick Tuesday to Saturday.",
      "err.datePast": "That date has already passed — pick a future day.",
      "err.time": "Please select one of the available times.",
      "err.name": "Please write your full name (at least 2 characters).",
      "err.phone": "Please enter a valid phone number (at least 8 digits).",
      "err.email": "Please check your email address, it looks incomplete.",
      "err.privacy": "You need to accept the privacy policy to continue.",

      /* — toast — */
      "toast.lang": "Language set to English",
      "toast.booked": "Request sent. We'll call you back to confirm."
    }
  };

  var STORAGE_KEY = "hairstudio.lang";
  var current = "it";

  function t(key, lang) {
    var l = lang || current;
    var table = DICT[l] || DICT.it;
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    return DICT.it[key] !== undefined ? DICT.it[key] : key;
  }

  /* Applies a string to an element: uses innerHTML only for our own
     translation strings that intentionally contain markup (e.g. the
     required-field asterisk or a <br>). */
  function setText(el, value) {
    if (value.indexOf("<") !== -1 || value.indexOf("&") !== -1) el.innerHTML = value;
    else el.textContent = value;
  }

  var ATTR_MAP = [
    ["data-i18n-alt", "alt"],
    ["data-i18n-aria-label", "aria-label"],
    ["data-i18n-placeholder", "placeholder"],
    ["data-i18n-title", "title"]
  ];

  function apply(lang) {
    current = DICT[lang] ? lang : "it";

    document.documentElement.setAttribute("lang", current);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      setText(el, t(el.getAttribute("data-i18n")));
    });

    ATTR_MAP.forEach(function (pair) {
      document.querySelectorAll("[" + pair[0] + "]").forEach(function (el) {
        el.setAttribute(pair[1], t(el.getAttribute(pair[0])));
      });
    });

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === current;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  function setLang(lang, persist) {
    apply(lang);
    if (persist !== false) {
      try { localStorage.setItem(STORAGE_KEY, current); } catch (e) { /* private mode */ }
    }
  }

  function initial() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved && DICT[saved]) return saved;
    var nav = (navigator.language || "it").slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : "it";
  }

  window.I18N = {
    t: t,
    apply: apply,
    setLang: setLang,
    get lang() { return current; },
    locale: function () { return current === "en" ? "en-GB" : "it-IT"; },
    boot: function () {
      var lang = initial();
      if (lang !== "it") apply(lang);      // Italian is already in the markup
      else document.documentElement.setAttribute("lang", "it");
      current = lang;
    }
  };
})();
