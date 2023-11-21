import React from 'react';

const GDPRInfo: React.FC = () => {
  return (
    <div className="mt-8 mx-4 text-center">
      <h1 className="text-2xl font-bold mb-4">STRUKTUR FÖR OSS</h1>
      <h2 className="text-xl font-bold mb-2">
        Integritetsskydd och Användning av Cookies
      </h2>
      <p className="mb-4">Välkommen till vår webbapplikation!</p>

      <h3 className="text-lg font-bold mb-2">1. Cookies:</h3>
      <p className="mb-4">
        Vi använder cookies för att förbättra funktionaliteten och prestandan på
        vår webbplats.
      </p>

      <h3 className="text-lg font-bold mb-2">2. Personuppgifter </h3>
      <p className="mb-4">...</p>

      <h3 className="text-lg font-bold mb-2">3. Lagring av Data</h3>
      <p className="mb-4">...</p>

      <p>
        Om du har några frågor eller funderingar angående vår integritetspolicy
        eller användningen av dina personuppgifter, är du välkommen att kontakta
        oss.
      </p>

      <p>
        Tack för att du använder vår webbapplikation och för att du bidrar till
        att göra vårt projekt GDPR-compatibelt!
      </p>
    </div>
  );
};

export default GDPRInfo;
