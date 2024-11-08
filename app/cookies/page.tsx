
export default function Cookies() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-center mb-6">Cookie policy</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
        <p className="text-lg text-gray-700">
        Cookies, also known as cookies, are small text files that are stored on your device (PC, tablet, mobile phone) when you visit a website. Cookies help the website recognize your device and remember information about your visit, such as language settings or login information.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How do we use cookies?</h2>
        <p className="text-lg text-gray-700">
        We use cookies to ensure that we give you the best experience on our website. For example, we use them to remember your preferences, improve website performance, and to compile anonymous statistics about how users navigate our site.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of cookies we use</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>
            <strong>Required cookies:</strong> These are essential for the proper functioning of the website and cannot be turned off in our systems.
          </li>
          <li>
            <strong>Performance and analytics cookies:</strong> These cookies help us improve the performance of the website by tracking how users interact with it.
          </li>
          <li>
            <strong>Functional cookies:</strong> These are used to improve the functionality of the website, for example by remembering your settings and choices.
          </li>
          <li>
            <strong>Advertising and targeting cookies:</strong> These are used to show you relevant ads based on your interests.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to manage cookies?</h2>
        <p className="text-lg text-gray-700">
        You can manage your cookie preferences via the settings in your web browser. You can choose to block or delete cookies, but please note that this may affect the functionality of our website.
        </p>
        <p className="text-lg text-gray-700 mt-4">
        For more information on how to manage cookies, visit the help function in your browser.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to our Cookie Policy</h2>
        <p className="text-lg text-gray-700">
        We reserve the right to update this cookie policy from time to time to reflect changes to our practices or for legal reasons. Any updates will be published on this page.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700">Do you have questions about our Cookie Policy? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>.</p>
      </div>
    </section>
  );
}
