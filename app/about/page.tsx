
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-left">
      {/* Our Story Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-400 mb-6">
        We are dedicated to providing you with an exceptional experience at our social casino. Our team has years of experience in both technology and entertainment, and we are passionate about bringing football inspired slots to all the fans out there.
        </p>
        <p className="text-lg text-gray-400">
        Our journey began with a simple idea: to combine the joy of football with the excitement of slot machines to create something unique and fun. Over the years we have evolved and improved our services to meet the needs of our users, and we are proud of how far we have come.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-400">
        We want to provide a fun, safe and engaging experience for all our users. Our goal is to deliver a high-quality platform where you can play for free and at the same time enjoy your favorite sport.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
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
            <p className="text-gray-400">CEO & founder</p>
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
            <p className="text-gray-400">CTO & Co-Founder</p>
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
            <p className="text-gray-400">Marketing manager</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-6">Want to know more?</h2>
        <p className="text-lg text-gray-400 mb-6">
        Contact us for more information about our services and how we can give you an unforgettable experience.
        </p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Contact Us
        </a>
      </div>
    </section>
  );
}
