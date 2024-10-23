
export default function Cookies() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-center mb-6">Retningslinjer for informasjonskapsler</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hva er informasjonskapsler?</h2>
        <p className="text-lg text-gray-700">
          Informasjonskapsler, også kjent som cookies, er små tekstfiler som lagres på din enhet (PC, nettbrett, mobiltelefon) når du besøker et nettsted. Informasjonskapsler hjelper nettstedet med å gjenkjenne enheten din og huske informasjon om ditt besøk, som språkinnstillinger eller påloggingsinformasjon.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hvordan bruker vi informasjonskapsler?</h2>
        <p className="text-lg text-gray-700">
          Vi bruker informasjonskapsler for å forbedre din brukeropplevelse på vårt nettsted. For eksempel bruker vi dem til å huske dine preferanser, forbedre ytelsen på nettsiden, og for å samle anonym statistikk om hvordan brukerne navigerer på vårt nettsted.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Typer informasjonskapsler vi bruker</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>
            <strong>Nødvendige informasjonskapsler:</strong> Disse er avgjørende for at nettstedet skal fungere korrekt, og kan ikke slås av i systemene våre.
          </li>
          <li>
            <strong>Ytelses- og analyseinformasjonskapsler:</strong> Disse informasjonskapslene hjelper oss med å forbedre ytelsen på nettstedet ved å spore hvordan brukere samhandler med det.
          </li>
          <li>
            <strong>Funksjonelle informasjonskapsler:</strong> Disse brukes for å forbedre funksjonaliteten på nettstedet, for eksempel ved å huske dine innstillinger og valg.
          </li>
          <li>
            <strong>Reklame- og målrettingsinformasjonskapsler:</strong> Disse brukes for å vise deg relevante annonser basert på dine interesser.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hvordan administrere informasjonskapsler?</h2>
        <p className="text-lg text-gray-700">
          Du kan administrere dine preferanser for informasjonskapsler via innstillingene i din nettleser. Du kan velge å blokkere eller slette informasjonskapsler, men vær oppmerksom på at dette kan påvirke funksjonaliteten til vårt nettsted.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          For mer informasjon om hvordan du administrerer informasjonskapsler, besøk hjelpefunksjonen i din nettleser.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Endringer i vår informasjonskapselpolicy</h2>
        <p className="text-lg text-gray-700">
          Vi forbeholder oss retten til å oppdatere disse retningslinjene for informasjonskapsler fra tid til annen for å reflektere endringer i vår praksis eller av juridiske årsaker. Eventuelle oppdateringer vil bli publisert på denne siden.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700">Har du spørsmål om våre retningslinjer for informasjonskapsler? <a href="/contact" className="text-blue-600 hover:underline">Kontakt oss</a>.</p>
      </div>
    </section>
  );
}
