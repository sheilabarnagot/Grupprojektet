# Grupprojeketet

Registrerade användare ska kunna redigera sina personuppgifter som uppgavs vid registrering samt skapa ett foruminlägg.
Det ska även gå att redigera inlägg som användaren skapat.

## Plannering

Vi ska Köra distans

## Teknologier

Node, postgresql, react + typscript och docker
Node: Express, PG (postgres), dotenv, nodemon.

# Backend

## Databas

Databas: Postgresql

### Tabeller

se även endpoints under tasks

- registrering
- skapa ett foruminlägg
- kommentarer för ett speficikt foruminlägg

Alla foruminlägg som skapas måste gå att referera till den användare som skapat inlägget. Ett konto kan skapa flera inlägg. Men ett inlägg kan inte höra till flera olika konton.

## Tasks

Projektets uppgifter

# Backend

** Backendet är beroende av tabeller för att något meningsfullt ska kunna byggas **

## Endpoints

Vi bör skapa en lämplig struktur för våra endpoints. Jag (Pontus) föreslår att vi använder oss utav en middleware. Men föreslår också att alla enpoints ligger i samma fil även om den filen kommer bli stor och har en tydlig struktur inuti den filen.

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

# Frontend

# Konfigurering

## NGINX

Skapa en Dockerfile i web mappen

## Postgres

Lägg till postgres som service i compose.yaml och skapa från `image`.

Ordna med miljövariabler.
