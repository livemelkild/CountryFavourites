This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduksjon
Country Favorites er en applikasjon hvor brukeren kan velge sine favorittland ved å “hjerte” landet. 
Hvert land består av et bevegelig kart, et lydopptak og et dikt. Ved trykk på kartet kan brukeren få 
opp et nytt bilde som viser kjennetegn ved landet. Brukeren kan lære seg hvordan man sier “hei” i det 
bestemte landet, ved å trykke på lydopptaket. 

Nederst på siden har brukeren mulighet til å få opp titlene til diktet ved å skrive inn landet diktet hører til. 
Dermed har brukeren lagret favorittdiktet nederst på siden. 

Når brukeren trykker på hjertet blir det rødt. Da har brukeren også mulighet til å senere 
se hvilke land han/hun ønsker å dra til. 

## Tekonolgi

### React
Første uken ble brukt til å sette seg inn i react og lage prøveprosjekter. 
Dette var veldig nyttig for å forstå strukturen til react og gjorde det enklere
å sette opp et godt hierarki fra start. I vår app.tsx så linker vi til hovedkomponentene, 
noe som gjør det oversiktlig og gir mulighet til å endre struktur i senere tid.

Siden vi skulle ha mange forskjellige land som alle hadde samme struktur, 
benyttet vi oss av props i country.tsx filen. Slik kunne vi enkelt legge til nye land i sluttfasen. 

### Context-API

### Typescript

Teknologien Typescript forbedrer kodekvaliteten og gjør den mer forståelig, 
samt gir mindre errors underveis i prosjektet. Vi fikk ikke brukt typescript 
like mye til vår fordel da vi ikke hadde implementert dette fra start noe som 
resulterte i at vi måtte tilbake å bruke tid på å endre kode. 

### AJAX

Ajax er brukt for å laste inn diktene dynamisk ved bruk av funksjonen fetch() i javascript. 
Vi henter ett og ett dikt ved å legge til tittel i country_spec.tsx bak linken som ligger i usePoem. 
Siden diktene blir lastet opp fra hver sin nettlink tar det enkelte ganger litt tid før alle diktene vises. 
Dette er fordi hver fetch tar ganske mye overhead. 

### Class og Funksjonelle Komponenter

Vi har kombinert bruken av funksjonelle og klasse komponenter. 
Dette har gjort oss kjent med å skrive koden på begge måter. 
Det er stor forskjell i syntaksen. Ettersom klasse-komponenter krever at 
man extender komponenten fra React og returnerer en render-funksjon. 
Funksjonelle-komponenter er bare ren JavaScript som tar inn argumenter og returnerer React elementer.

Når det kommer til funksjonalitet kan man ikke opprette en egen state for funksjonelle-komponenter. 
Staten må sendes fra en forelder komponenten som en prop. Dette har vi benyttet oss av ved å definere 
staten i Country.tsx og sende propsene til Country_spec.tsx. Da prosjektet startet lærte vi oss først 
funksjonelle komponenter, og ettersom landene var noe av det første vi implementerte på siden, 
ble denne fremgangsmåten brukt. I ettertid ser vi at det kunne vært hensiktsmessig å bruke en klasse-komponent til propsene våre.

Vi har brukt funksjonelle-komponenter i stor grad. Det er fordi de er lettere å lese og medfører mindre kode ettersom det er ren JavaScript. 
Det gjorde det også lettere for oss å dele komponentene inn i en hensiktsmessig struktur siden vi måtte skille komponenter da vi skulle bruke state.
Dette anser vi som viktig ihvertfall når vi er nye til React. I fremtiden når vi blir mer erfarne ser vi for oss at det kan være gunstig å bruke mer 
klasse-komponenter også.

### Lagring - HTML Web storage

### Grid/Flexbox

Vi bestemte oss fra start å bruke grid slik at vi hadde muligheten til å implementere 
todimensjonal layout om det skulle være nødvendig. Med grid fikk vi bygget et responsiv web design. 
Dette ga oss kontrollen over elementene ved skalering av vindu samt hvordan de skulle ligge i forhold til hverandre. 
Vi knotet mye med å få elementene til å bli sentrert på siden, 
dette fordi vi ikke fikk grid til å angripe komponentene slik vi ønsket i starten. 

Flexbox er brukt i footer hvor du kan finne ditt favorittdikt. 
Ettersom det var bare et element og det skulle sentreres på siden, var flexbox det naturlige valget. 


### SVG

Vi la alle SVG-bildene inn i public-mappen, dette gjør det enklere å hente ut hvert enkelt bilde. 
Keyframes ble brukt for animasjon og endring ved klikk.

### Media Queries 

Vi brukte media queries til å endre størrelse på “tema”-knappene når siden ble under 720px. 
Slik ble ikke knappene for store i forhold til størrelsen på skjermen. 

### Viewport

Denne teknologien blir automatisk implementert ved bruk av creact-react-app funksjonen. 
Den ble linket til viewport i en meta tag i headeren i index.html

## Git

Selv om alle på gruppen kjente til git fra før av, hadde vi en bratt læringskurve. 
Dette bærer det preg av ved at det er opprettet mange brancher. 
Flere av branchene som ble opprettet på starten ble aldri rørt. 

Vi opprettet en develop branch som vi behandlet som vår master gjennom hele prosjektet. 
Slik at den eneste “merge”-en som ble gjort med master var det ferdige produktet.

Issues i git brukte vi for å sette opp arbeidsoppgaver. 
Dette kunne vært bedre fulgt opp ettersom flere issues ble opprettet etter oppgaven ble angrepet. 

### Testing




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
