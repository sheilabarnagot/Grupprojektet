# Grupprojeketet

Registrerade användare ska kunna redigera sina personuppgifter som uppgavs vid registrering samt skapa ett foruminlägg.
Det ska även gå att redigera inlägg som användaren skapat.

## Plannering

Vi ska Köra distans

## Teknologier

Node, postgresql, react + typscript, nginx och docker
Node: Express, PG (postgres), dotenv, nodemon.

# Docker

För att komma igång att utveckla med docker.

### .env

Lägg respektive .env fil i rätt mapp.

### Bygg en docker image

För att bygga och starta docker behöver .env variablen `CONNECTION_STRING_DOCKER` vara satt som connectionString i `backend/endpoints.js`. Ändra även porten i index.js till 8000 om den inte redan är satt.

1. Stå i Mappen `/path/to/Grupprojektet``
2. `docker compose build`
3. `docker compose up`

Nu är allt uppe och körs via docker.

För att sedan kunna utveckla lokalt mot databasen behöver vi `byta port` till `3000` i index.js samt att vi behöver ändra `connectionString` till .env variabeln till `CONNECTION_STRING_LOCAL`.

# Backend

Node with express.

### Endpoints

Vi bör skapa en lämplig struktur för våra endpoints. Föreslår att vi använder oss utav en middleware så att index.js håller sig ren och fin. Men föreslår också att alla endpoints ligger i samma fil även om den filen kan bli stor.

- GET: Login `/login`
- GET: Hämta alla foruminlägg `/forumposts`
- GET: Hämta alla kommentarer till speficika foruminlägg `/postcomment`

- POST: Registrering `/register`
- POST: Skapa foruminlägg `/createforumpost`
- POST: Kommentera ett foruminlägg `/createusercomment`

- UPDATE: Redigera information som angavs vid registrering `/updateuser`
- UPDATE: Redigera foruminlägg knutna till en specifik användare `updateforumpost`
- UPDATE: Redigera en användarspecifik kommentar `/updateusercomment`

- DELETE: Ta bort sitt konto `/deleteme`
- DELETE: Ta bort foruminlägg + kommentarer `/deleteuserpost`
- DELETE: Ta bort användarbunden kommentar `/deletecusercomment`

### Tasks

- N: Skapa endpoints för `/deleteuserpost` `/updateuser`, `/updateforumpost` och `/deleteme` []

- S: Skapa endpoints för `/createusercomment`,`/login`, `/register`,[]

- P:

- Skapa endpoints för `/createforumpost`, `/updateusercomment` och `deleteusercomment`
  []
- Skapa middleware för våra endpoints. [x]

## Databasen

Databas: Postgresql

### Tabeller

- registrering
- skapa ett foruminlägg
- kommentarer för ett speficikt foruminlägg

Alla foruminlägg som skapas måste gå att referera till den användare som skapat inlägget. Ett konto kan skapa flera inlägg. Men ett inlägg kan inte höra till flera olika konton.

En kommententar kan bara skapas om det finns ett tillhörande inlägg. En användare kan kommentera på flera olika inlägg

#### Tasks

- N: Skapar registreringstabellen. []
- S: Skapar tabellen för foruminlägg och mellantabell om det behövs. []
- P: Skapar kommentarstabellen. []

# Frontend

### Tasks

Installera react-router-dom `npm i react-router-dom` + skapa navbar [x]

N:

- Skapa loginsidan och loginformulär []
- Hitta en logga från te.x https://www.iconfinder.com/

S:

- Skapa sidan för kontoinformation och formuläret för att redigera sitt konto. []
- Konfigurera tailwind css https://tailwindcss.com/docs/guides/vite []

P:

- Konfigurera `React Bootstrap` [x]
- Skapa sidan för foruminlägg []

# Konfigurering

### NGINX

Vi kommer använda nginx för att servera vårt frontend + ev proxy inställningar för våra endpoints.

### Tasks

P: Byt namn på web servicen till frontend i compose.yaml och Skapa sedan en Dockerfile i den omdöpta mappen mappen. []

## Postgres

Lägg till postgres som service i compose.yaml och skapa från `image`. [x]

Ordna med miljövariabler.

# Git och github

Som regel ska vi alltid försöka skapa en separat branch för våra ändringar. Är ändringen väldigt liten kan vi pusha direkt till Main, detta bör dock undvikas eftersom att det är vårt egna ansvar att lösa merge konflikter innan vi mergar in till main branchen.

### Workflow

När vi börjar på en ny task skapar vi en ny branch. Det föredragna sättet är att först lägga till ett item på denna adressen https://github.com/users/sheilabarnagot/projects/5 under `in progress` och konvertera det nyskapta itemet till ett issue.

Klicka på `add item` längst ner.

![Alt text](./assets/first.png?raw=true "Title")

Klicka på `convert to issue`

![Alt text](./assets/second.png?raw=true "Title")

När detta är gjort navigera till issues som finns på repo sidan. https://github.com/sheilabarnagot/Grupprojektet/issues

Ett issue har skapats och nu kan vi klicka oss in på det issuet som vi nyss skapades och som är in progress.

Väl här inne kan vi ute till höger hitta texten `create a branch` for this issue.... När vi klickar på den kommer en ruta öppnas och vi klickar sedan att vi vill checka ut lokalt och får då två terminal kommandon som vi kan klistra in i vår terminal givet att vi står i rätt map.

![Alt text](./assets/fourth.png?raw=true "Title")

Nu har vi skapat en ny branch för vårt specifika issue. När vi är klara med vår task så skapar vi en pull request och mergar direkt in i main. Skulle det vara så att det dyker upp en merge conflict och det inte går att merga in till main så behöver vi merga main in till den branch vi jobbar i.

Ett exempel:

Skulle jag jobba i en branch som heter `exempel` och vill merga den in till `main` via en pull request men stöter på en merge konflikt så vill jag först merga `main` in till `exempel`. Sen kommer jag kunna merga `exempel` med mina ändringar in till `main` via githubs web plats.

- `git checkout exempel`
- `git merge main`

Detta är alltså om en merge konflikt uppstår.
