RAPPORT: Erik Hjulstad

Github repo: https://github.com/Noroff-FEU-Assignments/project-exam-1-ErikHHJ/
WP api: https://hjulstad.one/exam1/wp-json
netlify deployment: https://brilliant-pony-dfa3ff.netlify.app/

Innledning:
I denne oppgaven skal jeg lage en blogg med valgfritt tema. Jeg tolker det sånn at siden vi ikke får utdelt noe innhold, er det noe jeg ikke burde bruke for mye tid på, siden det vil gi meg dårlig tid til andre ting. 
På grunn av det, valgte jeg et tema som er veldig generisk, lett å finne innhold til, og lett å finne bilder til. Nemlig hunderaser. 
Oppgaven spesifiserer hvilke sider som skal lages, hvordan innholdet til selve blogg-innleggene skal hentes, og litt av funksjonaliteten på sidene. Jeg har valgt å ikke vike fra ting som står spesifisert, sånn at jeg ikke endrer for mye på det endelige resultatet. På grunn av mitt valg av blogg-tema, er det klart hva målgruppen er, nemlig hundeinteresserte, og alder er ganske ubetydelig, men jeg sikter på folk i en yngre alder som har sett mye nettsider før. 

Når det kommer til gjennomføring og design, hadde jeg noen tanker fra starten. Jeg ville legge alle 15 postene inn i wordpress så tidlig som mulig. Designmessig ville jeg ha en enkel dropdown meny, for desktop og mobil. Jeg fant også tidlig inspirasjon fra flere andre nettsider, hvor et universelt trekk de har til felles, er hundepoter(paws). Dette ville jeg altså inkludere på et tidspunkt. Jeg visste også fra tidlig av at jeg ville bruke parallax scroll effekter på siden min, fordi jeg tenkte det kunne passe med søte hunder. På grunn av alle disse tingene jeg hadde i bakhodet, valgte jeg å gjøre prototypearbeid i vscode istedenfor i figma eller for hånd. Jeg lagde ikke prototype for alle de individuelle sidene, men hovedsakelig for det generelle layoutet til nettsiden og hjemmesiden. Prototype for hjemmesiden og layout er bilde nr 1 i denne mappen. Som du kan se hadde jeg allerede bestemt meg for bilder osv på dette punktet.

Hoveddel: 
Jeg har allerede gått litt inn på det i innledning, men på grunn av måten oppgaven er, siden vi trenger wordpress osv, gjør jeg det før jeg tar stilling til prototyper og design-valg. 

Jeg begynte med å få wordpress lastet ned på samme database som forrige wordpress oppgave. Dette tok meg ganske lang tid, før jeg endelig fant ut av det. Så brukte jeg mye tid på å finne ut 15 forskjellige hunderaser jeg liker, eller hvertfall ikke misliker. For hver av dem lagde jeg en post i wordpress, med en overskrift, et bilde, og en kjapp tekst om rasen. Når alt var ferdig med wordpress, gjorde jeg klar js koden for å displaye dette, og satte igang med prototypingen. Det er derfor det allerede er noe som ligner på en slider og de samme bildene på prototypen. 

Designmessig, valgte jeg å holde meg til svart hvitt og lyseblått, og la bilder snakke for seg selv. Jeg holder meg til to forskjellige fonter fra googlefonts, og bruker mye ikoner fra fontawesome. Jeg slet mye med å komme frem til fargevalget mitt, men synes det passer ganske bra sånn det ser ut nå. Jeg er ikke totalt fornøyd med hvordan parallax effektene mine endte opp da. Slideren valgte jeg å ha 4 på hver side sånn som oppgaven sier. Alle knappene ser like ut, svart og hvit med samme hover effekt. About siden er en lengre parallax scroll design, som jeg synes ser ganske ok ut. kanskje litt dårlig oppløsning på bildene når skjermen er veldig stor. Blogs-siden viser de 10 første med en show more knapp. Jeg la også til når posten ble lagt ut. 

Teknisk synes jeg oppgaven har gått veldig fint, jeg har ikke hatt noe problemer med html, css eller js som jeg ikke har løst hittil. Det jeg brukte desidert lengst tid på, var frem og tilbake knappene på slideren på hjemmsiden. De var posisjonert med absolute positioning og media queries for andre skjermstørrelser, men jeg innså fort at jeg ikke kan stole på hvordan det ser ut på andre maskiner enn min egen. Når man inspiserer og endrer størrelse til f.eks en laptop, ser det ikke likt ut som hvis man faktisk åpner siden på en laptop. Samme med mobil. Derfor valgte jeg å endre til to runde knapper som ligger over bildene på slideren. 
Det gikk også fint med loading, jeg displayer errors hvis api-call ikke fungerer, og reg-ex på contact funker som det skal, med unntak av noen spesialkarakterer som jeg ikke kunne skrive inn i regex uttrykket uten å crashe coden. 

Når det gjelder SEO osv, går det meste også bra, men på alle sidene mine får jeg fortalt av lighthouse at "form elements do not have associated labels", og det er den hamburger menyen dette sikter til. Hamburger menyen er laget med bare CSS, fordi det er det jeg er mest kjent med. Men som man kan se i koden min, har input feltet en label, som er knyttet med "for" og "id". Vet ikke hvorfor denne oppstår. 

BRUKERTESTING : 

Jeg har lastet ned hotjar, og bruker folk jeg kjenner som kandidater. Kandidatene gir meg tilbakemeldinger, og mye av det kommer jeg frem til selv ved å se på opptakene. 
Kandidat 1 endringer: 
1: Savnet mulighet til å gå tilbake til "all blogs" fra "specific".
2: Errormelding på contact sier "one of the inputs are in the wrong format" det burde stå "one or more"
3: Feilmelding på contact pga punktom, komma, utropstegn, bindestrek osv
4: Croppe parallax bilder bedre, fordi backcround:cover og background position center gjør at bilder noengang vises dumt, crop fikser det. 
5: Sosiale medier knappene i layout er ikke klikkbare (fikset ikke denne, kunne endret href til en vilkårlig facebook side men like greit å ikke gjøre det)
6: Hover funksjon var bare på ikonene i footer, ikke i nav

Etter å ha gjort alle disse, og noen flere punkter jeg kom på underveis men aldri skrev ned, var det tid for kandidat nr 2

1: Endre størrelse på elementer på toppen, i nav
2: nav meny helt ned til bunn
3: En indikasjon om hvilken side man er på
4: Bedre kontraster i selve nav menyen
5: 2 knapper som ikke så like ut
6: Tekst på about us annen font enn resten
7: Sentrere view more posts på all blogs, den sto på neste plass i grid bare
8: About trenger en tittel sånn at folk vet at de skal scrolle. 

Kandidat 3: 
1: Back to blogs knapp (i spesifik skjermstørrelse) kan ligge over overskriften
2: X-en på modal på specific trenger ekstra utheving sånn at den er tydelig og at man ser den har en funksjon. 

Disse punktene er oversatt av meg. Forklart på en mer fullstendig måte enn hvordan det ble fortalt til meg. Dette er punktene som ble direkte fortalt til meg, men det er veldig mange andre ting som jeg har gjort endringer på, etter å ha sett hvordan brukerene navigerer seg rundt på siden via hotjar recording or heatmaps. 

To dager før levering bestemte jeg meg for å endre bakgrunnen fra et repeating bilde av hundepoter i svart hvitt til en radial gradient av svart og lyseblå. Jeg har tenkt at den passet så bra til temaet mitt, men at den repeater lager stygge linjer rundt omkring. 
rapportbilde2 er bildet jeg hadde som repeating background image, for kontekst. 

Siste dag før levering gjorde jeg også en liten endring til specific js, der jeg la til kode for å displaye en oppdatert meta description for hver hunderase. 
Kommer ikke på noe jeg har glemt, og dermed leverer jeg. 


