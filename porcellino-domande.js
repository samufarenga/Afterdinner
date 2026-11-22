/* Porcellino: le carte. Livelli 1 Tiepido, 2 Bollente, 3 Senza vergogna.
   v = Verità (a una persona), p = Chi è più probabile che…, n = Io non ho mai…,
   i = Indovina (k:"num" numero, k:"yn" sì/no), m = Match (chi sceglieresti?) */
window.PORC_Q = {
1: {
  v: [
    "Hai mai mandato un messaggio piccante alla persona sbagliata?",
    "Qual è la cosa più imbarazzante che ti è successa a un primo appuntamento?",
    "Chi è stata la tua cotta più impossibile?",
    "Qual è la frase per rimorchiare peggiore che hai usato o ti sei sentito dire?",
    "Ti sei mai spacciato per qualcun altro su un'app di incontri?",
    "Qual è la prima parte del corpo che guardi in una persona?",
    "Hai mai baciato qualcuno solo per far ingelosire un'altra persona?",
    "Racconta il bacio peggiore che hai dato.",
    "Descrivi il tuo tipo in tre parole.",
    "Hai mai spiato i social di un ex fino alle foto di anni prima?",
    "Qual è la cosa più audace che hai fatto per conquistare qualcuno?",
    "Hai mai avuto una cotta per l'amico o l'amica del tuo partner?",
    "Cosa indossi di solito per dormire?",
    "Qual è il complimento fisico più bello che hai ricevuto?",
    "Hai mai lasciato qualcuno con un messaggio?",
    "Hai mai fatto un sogno erotico su qualcuno che conosci? Dicci almeno l'iniziale.",
    "Qual è il posto più strano dove hai baciato qualcuno?",
    "Ti hanno mai beccato a fissare qualcuno in modo imbarazzante?",
    "Che canzone metteresti per creare l'atmosfera?",
    "Hai mai avuto una storia segreta che nessuno qui conosce?",
    "Qual è la cosa che ti fa perdere subito interesse per una persona?"
  ],
  p: [
    "abbia un'app di incontri aperta in questo momento",
    "baci uno sconosciuto in discoteca stasera",
    "scriva a un ex dopo due bicchieri",
    "si innamori in vacanza dopo un giorno",
    "abbia mandato una foto piccante questa settimana",
    "finga di non vedere i messaggi di chi ci prova",
    "abbia avuto il primo bacio più imbarazzante",
    "flirti con il cameriere",
    "dimentichi il nome della persona con cui esce",
    "abbia una cotta segreta per qualcuno in questa stanza"
  ],
  n: [
    "baciato qualcuno di cui non sapevo il nome",
    "mandato un vocale di cui mi sono pentito",
    "usato un'app di incontri",
    "baciato due persone nella stessa sera",
    "mentito sulla mia età per fare colpo",
    "fatto il bagno nudo",
    "avuto un appuntamento al buio",
    "flirtato per avere qualcosa gratis",
    "baciato qualcuno di questo gruppo",
    "ghostato qualcuno",
    "dormito nudo",
    "avuto una storia con un collega"
  ],
  i: [
    {q:"Quanti appuntamenti hai avuto nell'ultimo anno?", k:"num"},
    {q:"Hai mai baciato qualcuno al primo appuntamento?", k:"yn"},
    {q:"Quante persone hai baciato in una sola sera, come record?", k:"num"},
    {q:"Ti sei mai innamorato a prima vista?", k:"yn"},
    {q:"Quante app di incontri hai provato?", k:"num"},
    {q:"Hai mai riscritto tu per primo a un ex?", k:"yn"}
  ],
  m: [
    "Con chi qui andresti a un appuntamento al buio?",
    "Chi qui porteresti a una cena romantica?",
    "Con chi qui balleresti un lento?",
    "Chi qui baceresti a mezzanotte di Capodanno?"
  ]
},
2: {
  v: [
    "Qual è il posto più rischioso dove l'hai fatto?",
    "Qual è la fantasia che non hai mai confessato a nessuno?",
    "Qual è la cosa più strana che ti ha eccitato?",
    "Ti hanno mai beccato sul più bello? Racconta.",
    "Preferisci comandare o farti comandare?",
    "Qual è la tua posizione preferita?",
    "Qual è la cosa più piccante che hai scritto in chat?",
    "L'hai mai rifatto con un ex dopo esservi lasciati?",
    "Qual è la tua zona più sensibile?",
    "Hai mai fatto sesso al telefono o in videochiamata?",
    "Qual è stata la tua notte più lunga? Quante volte?",
    "Qual è la cosa che a letto proprio non sopporti?",
    "Racconta un'avventura di una notte andata malissimo.",
    "Hai mai usato un giocattolo erotico? Quale?",
    "Hai mai mandato una foto senza vestiti? Te ne sei pentito?",
    "Cosa ti accende all'istante?",
    "L'hai mai fatto in macchina? Dove eravate parcheggiati?",
    "Qual è il tuo momento più imbarazzante a letto?",
    "Rumoroso o silenzioso: come sei a letto?",
    "Sei mai finito a letto con qualcuno conosciuto la sera stessa?",
    "Quale gioco di ruolo ti piacerebbe provare?"
  ],
  p: [
    "l'abbia fatto in un bagno pubblico",
    "abbia un cassetto segreto di giocattoli",
    "sia il più rumoroso a letto",
    "l'abbia fatto in spiaggia",
    "si sia fatto beccare dai genitori",
    "abbia una lista di fantasie scritta da qualche parte",
    "abbia finto un orgasmo",
    "abbia avuto più partner di tutti",
    "mandi un messaggio piccante prima della fine della serata",
    "sia un fenomeno a letto"
  ],
  n: [
    "finto un orgasmo",
    "fatto sesso in macchina",
    "fatto sesso all'aperto",
    "mandato una foto nudo",
    "usato le manette",
    "fatto sesso con un ex",
    "avuto un'avventura di una notte",
    "fatto sesso in un bagno pubblico",
    "guardato un porno con il partner",
    "fatto sesso dove qualcuno poteva vederci",
    "usato un giocattolo erotico",
    "fatto sesso sul posto di lavoro"
  ],
  i: [
    {q:"Quante volte in una notte, come record?", k:"num"},
    {q:"L'hai mai fatto in spiaggia?", k:"yn"},
    {q:"In quante stanze diverse di casa l'hai fatto?", k:"num"},
    {q:"Hai mai finto un orgasmo?", k:"yn"},
    {q:"Quante avventure di una notte hai avuto?", k:"num"},
    {q:"Ti hanno mai beccato mentre lo facevi?", k:"yn"}
  ],
  m: [
    "Con chi qui passeresti un weekend da soli in una baita?",
    "Chi qui inviteresti a fare la doccia con te?",
    "Con chi qui resteresti chiuso in ascensore per una notte?",
    "Da chi qui ti faresti fare un massaggio senza vestiti?"
  ]
},
3: {
  v: [
    "Con chi te ne vergogni ancora? Dicci l'iniziale.",
    "Qual è la cosa più sporca che hai detto a letto?",
    "Hai mai fatto una cosa a tre? Racconta com'è andata.",
    "Qual è la fantasia più estrema che vorresti realizzare?",
    "Hai mai pensato a qualcuno in questa stanza mentre lo facevi?",
    "Qual è la cosa più perversa che hai cercato su internet?",
    "L'hai mai fatto con due persone diverse nello stesso giorno?",
    "Qual è il fetish che non confesseresti mai ai tuoi?",
    "Racconta il tuo momento più imbarazzante da nudo.",
    "Con chi qui faresti una cosa a tre? Fai i nomi.",
    "Qual è stato il sesso peggiore della tua vita? Dettagli.",
    "Sei mai andato a letto con qualcuno solo per vendetta?",
    "Hai mai tradito o sei stato l'amante di qualcuno? Racconta.",
    "Cosa ti hanno chiesto a letto che hai rifiutato?",
    "Hai mai filmato o fotografato un momento intimo?",
    "Descrivi la tua notte perfetta, senza censure.",
    "L'hai mai fatto nel letto di qualcun altro, senza che lo sapesse?",
    "Qual è la cosa più sfacciata che hai fatto per portarti a letto qualcuno?",
    "Se dovessi passare una notte con qualcuno di questo gruppo, chi sceglieresti?",
    "Qual è la parte del corpo di qualcuno qui che ti piace di più?",
    "Hai mai desiderato il partner di un amico?"
  ],
  p: [
    "abbia fatto una cosa a tre",
    "abbia un video intimo da qualche parte",
    "sia andato a letto con qualcuno di questo gruppo",
    "abbia il fetish più strano",
    "sia stato l'amante di qualcuno",
    "l'abbia fatto con qualcuno di cui non sapeva il nome",
    "abbia fatto sesso questa settimana",
    "dica le cose più sporche a letto",
    "abbia provato tutto il kamasutra",
    "finisca a letto con qualcuno stanotte"
  ],
  n: [
    "fatto una cosa a tre",
    "fatto sesso con qualcuno di questo gruppo",
    "filmato un momento intimo",
    "tradito",
    "fatto sesso con due persone diverse nello stesso giorno",
    "partecipato a uno scambio di coppia",
    "fatto sesso con una persona sposata",
    "provato il sesso anale",
    "fatto sesso in un locale",
    "pagato per vedere uno spettacolo erotico",
    "fatto sesso con qualcuno conosciuto quel giorno stesso",
    "pensato a qualcuno di questa stanza in un momento intimo"
  ],
  i: [
    {q:"Quanti partner hai avuto in tutto?", k:"num"},
    {q:"Hai mai fatto una cosa a tre?", k:"yn"},
    {q:"Con quante persone di questo gruppo hai fatto qualcosa, anche solo un bacio?", k:"num"},
    {q:"Hai mai tradito?", k:"yn"},
    {q:"Quante volte al mese, in media?", k:"num"},
    {q:"L'hai mai fatto con qualcuno conosciuto quel giorno stesso?", k:"yn"}
  ],
  m: [
    "Con chi qui passeresti una notte senza regole?",
    "Chi qui vorresti vedere nudo?",
    "Con chi qui faresti un bagno di mezzanotte senza costume?",
    "Chi qui porteresti in camera stanotte?"
  ]
}
};
