# AfterDinner

Giochi da fare in serata con gli amici, da telefono.

- **Lampo**: un telefono da passarsi di mano.
- **Porcellino** (18+): domande piccanti, un telefono o tutti i telefoni. File: `porcellino.html` e `porcellino-domande.js`.
- **Scarabocchi**: tutti i telefoni. L'host apre la stanza e mostra il QR; gli amici lo inquadrano ed entrano dal browser, senza account e senza installare niente.

Tutto è in `index.html`. I telefoni si collegano tra loro con PeerJS (`lib/peerjs.min.js`), il QR lo disegna `lib/qrcode.js`.
Per provare più telefoni su un solo computer: apri `index.html?local` in più schede.
