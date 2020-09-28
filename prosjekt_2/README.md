This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduksjon
Country Favorites er en applikasjon hvor brukeren kan velge sine favorittland.
Hvert land består av et roterende kart, et lydopptak og et dikt. 
Ved trykk på kartet kan brukeren få opp et nytt bilde som viser et kjennetegn ved landet. 
Brukeren kan lære seg hvordan man sier “hei” på landets språk ved å trykke på lydopptaket.

Brukeren kan lagre sitt favorittland, ved å trykke på hjertet plassert under lydopptaket. 
Brukeren kan også lagre tittelen til favorittdiktet ved å skrive inn diktets tilhørende land nederst på siden.

Det er tre forskjellige fargetemaer brukeren kan velge mellom.

## Teknologi

### React
Første uken ble brukt til å sette seg inn i react ved å lage prøveprosjekter. 
Dette var nyttig for å forstå strukturen til react og gjorde det enklere å 
sette opp et godt hierarki fra start. I vår app.tsx linker vi til hovedkomponentene, 
noe som gjør det oversiktlig og gir mulighet til å endre struktur senere.

Siden vi ønsket ulike land med lik struktur, benyttet vi oss av props i country.tsx filen. 
Slik kunne vi enkelt legge til nye land i sluttfasen. 

### Context-API

Vi benytter oss av context API i themeContext.tsx, slik at brukeren har mulighet 
til å endre farger på ulike elementer av webapplikasjonen. 
Dette gjøres ved at filen inneholder en state som setter  “theme”. 
De ulike temaene vi har definert er “light”, “dark”, og “colorful”. 
Når brukeren trykker på knappene øverst i webapplikasjonen så kaller 
knappene på funksjonen “chosenTheme” i header.tsx. Da vil denne funksjonen 
legge til/fjerne klasser i style.css filen slik at fargene på de ulike elementene endres.

Fordelen med Context API fremfor bruk av state er når flere komponenter skal ha tilgang 
til samme data, er det enklere å nå dataen med context. 

### Typescript

Typescript forbedrer kodekvaliteten, og gjør den mer forståelig. 
Det er nettopp derfor denne teknologien er anbefalt å implementere i 
prosjekter som skal utvikle større webapplikasjoner. 
Typescript er lett å overføre til andre utviklere. 
Vi fikk ikke brukt Typescript til vår fordel, fordi teknologien ikke ble implementert fra start.
Dette resulterte i at vi måtte bruke tid på å endre koden senere.

### AJAX

Ajax ble brukt for å laste inn diktene dynamisk med funksjonen fetch(). 
Vi henter ett og ett dikt ved å legge til tittel i country_spec.tsx bak 
linken som ligger i usePoem.tsx. Denne måten å hente diktene på gjør at det av 
og til kan ta litt tid for diktene å vises på websiden. Dette er fordi hver fetch har mye overhead. 

### Class og Funksjonelle Komponenter

Vi har kombinert bruken av funksjonelle og klasse komponenter. 
Dette har gjort oss kjent med å skrive koden på begge måter. 
Det er stor forskjell i syntaksen ettersom klasse-komponenter 
krever at man extender komponenten fra React og returnerer en render-funksjon. 
Funksjonelle-komponenter er ren JavaScript som tar inn argumenter og returnerer React elementer.

Når det kommer til funksjonalitet kan man ikke opprette en egen state for funksjonelle-komponenter. 
Staten må sendes fra en forelder komponenten som en prop. Dette har vi benyttet oss av ved å definere staten 
i Country.tsx og sende propsene til Country_spec.tsx. Da prosjektet startet lærte vi oss først funksjonelle komponenter, 
derfor ble props brukt med funksjoner istedenfor klasser. I ettertid ser vi at det kunne vært hensiktsmessig å bruke en klasse-komponent.

Funksjonelle komponenter ble brukt i størst grad, ettersom det var mindre kode å skrive og react var nytt for alle. 
Ved dette var det også lettere å dele opp komponentene inn i en hensiktsmessig struktur. 

### Lagring - HTML Web storage

På siden vår har vi implementert to forskjellige lagringsmåter. 
Localstorage er brukt for å favorisere land under hvert av landene. 
Dersom hjertet er rødt er landet lagret som favoritt. Ettersom det er 
brukt localstorage vil disse valgene forbli i samme tilstand til neste gang 
man refresher siden. Sessionstorage lagrer tittelen på diktet man liker best, 
frem til man refresher siden. Det gjøres ved å skrive inn navnet på landet som diktet tilhører. 
Her er det tatt hensyn til at man kan skrive store og små bokstaver, pluss at det kommer feilmelding 
dersom man ikke skriver et gyldig land. Dette er hensiktsmessig ettersom man slipper å lese i gjennom 
diktene flere ganger i mens man er på siden. 

### Grid/Flexbox

Vi hadde en felles enighet om å bruke grid for å ha mulighet til å implementere todimensjonal layout senere. 
Grid oppfylte også kravet om en webapplikasjon med responsivt webdesign. Dette ga oss kontrollen over 
elementene ved skalering av vindu samt hvordan de skulle ligge i forhold til hverandre. 

Flexbox er brukt i footer hvor du kan finne ditt favorittdikt. 
Ettersom det var bare et element og det skulle sentreres på siden, var flexbox det naturlige valget.


### SVG

Vi la alle SVG-bildene inn i public-mappen. 
Det gjorde det enklere å hente ut hvert enkelt bilde. Keyframes ble brukt for animasjon og endring ved klikk. 

### Media Queries 

Vi brukte media queries til å endre størrelse på “tema”-knappene og lagring nederst på siden.
Media queries bidrar til et responsivt design og god skalering med forskjellige skjermstørrelser.

### Viewport

Denne teknologien blir automatisk implementert ved bruk av creact-react-app funksjonen, 
som er synlig i index.html. Viewport er et hjelpemiddel for at nettsiden skal ha responsivitet ved skalering av vinduet.

## Git

Selv om alle på gruppen kjente til git fra før av, hadde vi en bratt læringskurve. 
Dette bærer det preg av ved at det er opprettet mange brancher og flere brancher 
som ikke har blitt merget i develop. Dersom vi hadde fulgt opp issuene på git bedre 
kunne det hjulpet for å ha styr på hvilke brancher som var nødvendig. 
Vi opprettet en develop branch som vi jobbet ut fra gjennom prosjektet. 
Slik at den eneste “merge”-en som ble gjort med master var det ferdige produktet.  

## Testing

Det er implementert Jest snapshot tester for noen av komponentene. 
Vi har ikke lagt stor fokus på testing ettersom det var mange 
andre nye teknologier som gruppen ikke hadde brukt før, og ble prioritert.

Gruppen har foretatt manuell testing på 4 skjermstørrelser. 
Det har blitt gjort ved å endre skjermstørrelsen ved inspisering av nettsiden vår. 
Det har blitt testet for “iPhoneX”, “iPad”, “iPhone5”, vertikal orientering og ordinær pc. 
All funksjonaliteten og layouten fungerer fint i alle formater. 

### Kilder

SVG: https://www.flaticon.com/

Tekst: https://poetrydb.org/author/Emily%20Dickinson/title 

Lyd: https://www.specialtyansweringservice.net/learn-how-to-say-hello-in-57-languages/ 

Local- og sessionstorage (lånt kode): https://www.youtube.com/watch?v=MOd5cTJ6kaA&t=572s

Testing (lånt kode): https://www.youtube.com/watch?v=9liG4PuqKY0

## Available Scripts

In the project directory, you can run:

### `npm install`
Installs all packages that are needed for the project.

### `npm start`

Remember to be in the correct package: prosjekt-2/prosjekt_2
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
