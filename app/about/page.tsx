
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-left">
      {/* Our Story Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Om Oss</h1>
        <p className="text-lg text-gray-400 mb-6">
          Vi er dedikert til å gi deg en eksepsjonell opplevelse på vårt sosiale kasino. Vårt team har mange års erfaring i både teknologi og underholdning, og vi er lidenskapelige om å bringe fotballinspirerte spilleautomater til alle fans der ute.
        </p>
        <p className="text-lg text-gray-400">
          Vår reise begynte med en enkel idé: å kombinere gleden av fotball med spenningen fra spilleautomater for å skape noe unikt og morsomt. Gjennom årene har vi utviklet oss og forbedret våre tjenester for å møte behovene til våre brukere, og vi er stolte av hvor langt vi har kommet.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Vår Misjon</h2>
        <p className="text-lg text-gray-400">
          Vi ønsker å tilby en morsom, trygg og engasjerende opplevelse for alle våre brukere. Vårt mål er å levere en høykvalitets plattform der du kan spille gratis og samtidig nyte favorittsporten din.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Møt Vårt Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="text-center">
            <Image
              src="/images/jonathan-megerson.webp"
              alt="Team member 1"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jonathan Megerson</h3>
            <p className="text-gray-400">CEO & Grunnlegger</p>
          </div>

          {/* Member 2 */}
          <div className="text-center">
            <Image
              src="/images/jane-smith.webp"
              alt="Team member 2"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-400">CTO & Medgrunnlegger</p>
          </div>

          {/* Member 3 */}
          <div className="text-center">
            <Image
              src="/images/emily-johnson.webp"
              alt="Team member 3"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-gray-400">Markedsføringssjef</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-6">Vil du vite mer?</h2>
        <p className="text-lg text-gray-400 mb-6">
          Kontakt oss for mer informasjon om våre tjenester og hvordan vi kan gi deg en uforglemmelig opplevelse.
        </p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Kontakt Oss
        </a>
      </div>
    </section>
  );
}
