
export default function PrivacyPolicy() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg text-gray-700">
        We value your privacy and are committed to protecting your personal data. This privacy policy sets out how we collect, use and protect the information that you give us when you use our website.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What information do we collect?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>
            <strong>Personally identifiable information:</strong> Name, email address, phone number, etc., which you provide to us voluntarily through forms or communications with us.
          </li>
          <li>
            <strong>Automatically collected information:</strong> IP addresses, browser information, device type and visitor statistics via cookies and Other Tracking Technologies.
          </li>
          <li>
            <strong>Instructions for use:</strong> Data about how you use our website, which pages you visit, and which features you use.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How do we use your information?</h2>
        <p className="text-lg text-gray-700">
        The information we collect is used to::
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>Improve the user experience on our website</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Understand how our users interact with the site</li>
          <li>Deliver targeted content and ads</li>
          <li>Comply with legal requirements and regulations</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How do we protect your information?</h2>
        <p className="text-lg text-gray-700">
        We implement a variety of security measures to help protect your personal information. This includes encryption of data, secure servers and restricted access to personal data by only authorized personnel.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sharing of information</h2>
        <p className="text-lg text-gray-700">
        We do not share your personal information with third parties, except:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>Service providers who help us operate our website</li>
          <li>Compliance with legal requirements, such as court orders or government requests</li>
          <li>With partners for marketing purposes, but only with your consent</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your rights</h2>
        <p className="text-lg text-gray-700">
        You have the right to:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your personal data</li>
          <li>Restrict or object to the processing of your personal data</li>
          <li>Transfer your personal data to another service provider</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
        To exercise these rights, please <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to our Privacy Policy</h2>
        <p className="text-lg text-gray-700">
        We reserve the right to update this privacy policy from time to time. Any changes will be posted on this page and we encourage you to review them regularly.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700">
        Do you have any questions about our Privacy Policy? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a>.
        </p>
      </div>
    </section>
  );
}
