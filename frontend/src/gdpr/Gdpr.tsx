import React from 'react';

const GDPRInfo: React.FC = () => {
  return (
    <div className="mt-8 mx-4 text-center">
      <h1 className="text-2xl font-bold mb-4">STRUKTUR FÖR OSS</h1>
      <h2 className="text-xl font-bold mb-2">
        Integritetsskydd och Användning av Cookies
      </h2>
      <p className="mb-4">
        Välkommen till vår webbapplikation! För att säkerställa din integritet
        och ge dig en bättre användarupplevelse använder vi cookies och
        behandlar vissa personuppgifter. Vi värnar om din integritet och strävar
        efter att vara transparenta gällande hur vi samlar in, använder och
        skyddar dina uppgifter. Nedan finner du viktig information om vår
        hantering av personuppgifter och användningen av cookies.
      </p>
      <p className="mb-4">
        Sparande av namn och efternamn finns på plats för att styrka att
        epostadressen är knuten till den person som personen uppger sig för att
        vara vid registrering. Men även för att underlätta hantering av gdpr i
        syfte att låta den registrerade användaren kontrollera, uppdatera och
        redigera sina personuppgifter. Det gör det även mer säkert att åtgärder
        som rör restriktioner pga regelbrott knyts till en person och inte en
        användare. Tanken är också att detta ska kunna underlätta i fall där
        personuppgiftskapning misstänks.
      </p>
      <p className="mb-4">
        Email registreras både i syftet som nämns ovan men också till att skicka
        ut kritisk säkerhetsinformation till alla användare vid dataintrång.
        Mail till speficika användare kommer att förekomma vid varning av
        regelbrott, tidsbegränsad avstänging vid regelbrott och även vid
        permanenta avstängningar. Med mail av det senare slaget kommer det
        alltid finnas möjlighet till att överklaga beslutet.
      </p>

      <h3 className="text-lg font-bold mb-2">1. Cookies:</h3>
      <p className="mb-4">
        Vi använder cookies för att förbättra funktionaliteten och prestandan på
        vår webbplats. Cookies är små textfiler som sparas på din enhet när du
        besöker vår webbplats. De hjälper oss att känna igen din enhet och
        förstå hur du interagerar med vår webbplats. Genom att använda cookies
        kan vi skräddarsy din upplevelse och erbjuda dig relevant innehåll.
      </p>

      <h3 className="text-lg font-bold mb-2">2. Personuppgifter </h3>
      <p className="mb-4">
        När du registrerar dig på vår webbplats och skapar inlägg eller
        kommentarer samlar vi in vissa personuppgifter för att tillhandahålla
        våra tjänster. Detta kan inkludera ditt användarnamn, namn och
        efternamn, samt e-postadress och annan information du väljer att dela
        med oss.
      </p>

      <h3 className="text-lg font-bold mb-2">3. Lagring av Data</h3>
      <p className="mb-4">
        Vi lagrar dina personuppgifter i enlighet med gällande lagstiftning,
        inklusive GDPR (General Data Protection Regulation). Vi strävar efter
        att säkerställa att dina uppgifter behandlas säkert och endast används
        för det ändamål de samlades in för.
      </p>

      <h3 className="text-lg font-bold mb-2">
        4. Tredje part och datadelning:
      </h3>
      <p className="mb-4">
        Det är viktigt att informera användarna om deras personuppgifter kommer
        att delas med tredje part. Om din webbapp använder tredjepartstjänster
        som också samlar in data är det viktigt att förklara detta i
        integritetspolicyn. Ange detaljer om vilken typ av data som delas, med
        vem och för vilket ändamål.
      </p>

      <h3 className="text-lg font-bold mb-2">
        5. Varaktighet för datalagring:
      </h3>
      <p className="mb-4">
        Ange under vilken period användardata ska lagras. Detta kan bero på
        informationens karaktär och juridiska krav. Att informera användarna om
        hur länge deras data kommer att lagras bidrar till transparens.
      </p>

      <h3 className="text-lg font-bold mb-2">6. Datasäkerhet:</h3>
      <p className="mb-4">
        Markera säkerhetsåtgärder som implementerats för att skydda
        användardata. Detta kan inkludera kryptering, brandväggar och andra
        branschstandardiserade säkerhetsrutiner. Att förmedla hur seriöst du tar
        datasäkerhet kan bygga förtroende bland användarna.
      </p>

      <h3 className="text-lg font-bold mb-2">7. Användarrättigheter:</h3>
      <p className="mb-4">
        Förtydliga de rättigheter som användare har angående sina
        personuppgifter. Detta kan innefatta rätten att få tillgång till,
        korrigera, radera och portera dina data. Att tillhandahålla information
        om hur man utövar dessa rättigheter förstärker transparensen och visar
        engagemang för användarnas integritet.
      </p>

      <h3 className="text-lg font-bold mb-2">
        8. Ändringar av integritetspolicyn:
      </h3>
      <p className="mb-4">
        Ange att integritetspolicyn kan komma att uppdateras då och då och hur
        dessa ändringar kommer att meddelas. Det är viktigt att inhämta aktivt
        samtycke från användare för framtida uppdateringar av
        integritetspolicyn.
      </p>

      <h3 className="text-lg font-bold mb-2">
        9. Länkar till tredjepartspolicyer:
      </h3>
      <p className="mb-4">
        Om din webbapp innehåller länkar till tredje parts webbplatser, vänligen
        förtydliga att integritetspolicyn och användningen av cookies endast
        gäller din webbplats. Uppmuntra användare att granska integritetspolicyn
        för alla webbplatser som de kan hänvisas till via externa länkar.
      </p>

      <h3 className="text-lg font-bold mb-2">
        10. Process för erhållande av samtycke:
      </h3>
      <p className="mb-4">
        Förklara hur samtycke erhålls från användare, särskilt om samtycke är
        den rättsliga grunden för databehandling. Du kan nämna användningen av
        kryssrutor eller någon annan mekanism du använder för att säkerställa
        att användare aktivt och medvetet ger sitt samtycke.
      </p>

      {/* <h3 className="text-lg font-bold mb-2">Din Kontroll:</h3>
      <p className="mb-4">
        Du har rätt att välja hur dina personuppgifter används. Genom att
        använda vår webbplats samtycker du till vår användning av cookies och
        behandling av dina personuppgifter som beskrivs ovan. Om du inte
        samtycker kan du justera dina cookieinställningar eller avstå från att
        använda vår webbplats.
      </p> */}

      <h3 className="text-lg font-bold mb-2">Dokumentation och GDPR:</h3>
      <p className="mb-4">
        Vi tar integritet och dataskydd på största allvar. Alla som deltar i
        vårt projekt förväntas följa GDPR-riktlinjerna och dokumentera sin
        insats i rapporten. Vi strävar efter att skapa en trygg och ansvarsfull
        plattform för våra användare. Om du har några frågor eller funderingar
        angående vår integritetspolicy eller användningen av dina
        personuppgifter, är du välkommen att kontakta oss. Tack för att du
        använder vår webbapplikation och för att du bidrar till att göra vårt
        projekt GDPR-compatibelt!
      </p>
    </div>
  );
};

export default GDPRInfo;
