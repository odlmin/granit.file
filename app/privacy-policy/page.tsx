
export default function PrivacyPolicy() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-center mb-6">Retningslinjer for personvern</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduksjon</h2>
        <p className="text-lg text-gray-700">
          Vi verdsetter ditt personvern og er forpliktet til å beskytte dine personopplysninger. Disse retningslinjene for personvern forklarer hvordan vi samler inn, bruker og beskytter informasjonen du gir oss når du bruker vårt nettsted.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hvilken informasjon samler vi inn?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>
            <strong>Personlig identifiserbar informasjon:</strong> Navn, e-postadresse, telefonnummer, etc., som du gir oss frivillig gjennom skjemaer eller kommunikasjon med oss.
          </li>
          <li>
            <strong>Automatisk innsamlet informasjon:</strong> IP-adresser, nettleseropplysninger, enhetstype og besøksstatistikk via informasjonskapsler og andre sporingsteknologier.
          </li>
          <li>
            <strong>Bruksinformasjon:</strong> Data om hvordan du bruker vårt nettsted, hvilke sider du besøker, og hvilke funksjoner du bruker.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hvordan bruker vi informasjonen din?</h2>
        <p className="text-lg text-gray-700">
          Informasjonen vi samler inn brukes til å:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>Forbedre brukeropplevelsen på vårt nettsted</li>
          <li>Svare på dine henvendelser og gi kundestøtte</li>
          <li>Forstå hvordan våre brukere interagerer med nettstedet</li>
          <li>Levere målrettet innhold og annonser</li>
          <li>Overholde juridiske krav og forskrifter</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hvordan beskytter vi informasjonen din?</h2>
        <p className="text-lg text-gray-700">
          Vi implementerer en rekke sikkerhetstiltak for å beskytte dine personlige opplysninger. Dette inkluderer kryptering av data, sikre servere og begrenset tilgang til personopplysninger for kun autorisert personell.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Deling av informasjon</h2>
        <p className="text-lg text-gray-700">
          Vi deler ikke dine personopplysninger med tredjeparter, med unntak av:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>Tjenesteleverandører som hjelper oss med å drive vårt nettsted</li>
          <li>Overholdelse av lovmessige krav, som rettskjennelser eller myndighetsforespørsler</li>
          <li>Sammen med partnere for markedsføringsformål, men kun med ditt samtykke</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dine rettigheter</h2>
        <p className="text-lg text-gray-700">
          Du har rett til å:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>Be om tilgang til dine personopplysninger</li>
          <li>Be om retting eller sletting av dine personopplysninger</li>
          <li>Begrense eller motsette deg behandlingen av dine personopplysninger</li>
          <li>Overføre dine personopplysninger til en annen tjenesteleverandør</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          For å utøve disse rettighetene, vennligst <a href="/contact" className="text-blue-600 hover:underline">kontakt oss</a>.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Endringer i personvernreglene</h2>
        <p className="text-lg text-gray-700">
          Vi forbeholder oss retten til å oppdatere disse retningslinjene for personvern fra tid til annen. Eventuelle endringer vil bli publisert på denne siden, og vi oppfordrer deg til å gjennomgå dem regelmessig.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700">
          Har du spørsmål om vår personvernpolicy? <a href="/contact" className="text-blue-600 hover:underline">Kontakt oss</a>.
        </p>
      </div>
    </section>
  );
}
