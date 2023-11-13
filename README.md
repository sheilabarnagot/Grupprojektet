# Grupprojeketet

Registrerade användare ska kunna redigera sina personuppgifter som uppgavs vid registrering samt skapa ett foruminlägg.
Det ska även gå att redigera inlägg som användaren skapat.

## Plannering

Vi ska Köra distans

## Teknologier

Node, postgresql, react + typscript, nginx och docker
Node: Express, PG (postgres), dotenv, nodemon.

# Backend

Node with express.

## Endpoints

** Backendet är beroende av tabeller **

Vi bör skapa en lämplig struktur för våra endpoints. Föreslår att vi använder oss utav en middleware. Men föreslår också att alla enpoints ligger i samma fil även om den filen kommer bli stor.

- GET: Login `/login`
- GET: Hämta alla foruminlägg `/forumposts`
- GET: Hämta alla kommentarer till speficika foruminlägg `postcomment`

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

- N: Skapa endpoints för `/login`, `/register`, `/updateuser` och `/deleteme`

- S: Skapa endpoints för `/createforumpost`, `/updateforumpost` och `/deleteuserpost`

- P: Skapa endpoints för `/createusercomment`, `/updateusercomment` och `deleteusercomment`

## Databasen

Databas: Postgresql

### Tabeller

se även endpoints under tasks

- registrering
- skapa ett foruminlägg
- kommentarer för ett speficikt foruminlägg

Alla foruminlägg som skapas måste gå att referera till den användare som skapat inlägget. Ett konto kan skapa flera inlägg. Men ett inlägg kan inte höra till flera olika konton.

En kommententar kan bara skapas om det finns ett tillhörande inlägg. En användare kan kommentera på flera olika inlägg

#### Tasks

- N: Skapar registreringstabellen
- S: Skapar tabellen för foruminlägg och mellantabell om det behövs
- P: Skapar kommentarstabellen.

# Frontend

# Konfigurering

### NGINX

Skapa en Dockerfile i web mappen

## Postgres

Lägg till postgres som service i compose.yaml och skapa från `image`.

Ordna med miljövariabler.
