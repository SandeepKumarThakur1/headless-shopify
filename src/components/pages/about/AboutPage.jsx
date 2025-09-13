import React from "react";
import Image from "next/image";
import aboutImg from "../../../../public/Images/banner.webp"; // update path if needed
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="aboutHero relative text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-6 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are passionate innovators delivering high-quality solutions that empower businesses worldwide.
          </p>
        </div>
      </section>

      {/* About Company Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={aboutImg}
            alt="About Our Company"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            Our company was founded with a mission to redefine innovation and
            customer experience. Over the years, we’ve helped clients achieve
            sustainable growth by offering cutting-edge solutions tailored to
            their unique needs.
          </p>
          <p className="text-gray-700">
            With a dedicated team of professionals, we focus on excellence,
            creativity, and building trust with every partnership.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and bring innovative solutions to life for
                our clients.
              </p>
            </div>
            <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Transparency and honesty guide us in every decision and action
                we take.
              </p>
            </div>
            <div className="p-6 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence and deliver quality that exceeds
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src={aboutImg}
              alt="Team Member"
              width={150}
              height={150}
              className="mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src={aboutImg}
              alt="Team Member"
              width={150}
              height={150}
              className="mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
          </div>

          {/* Member 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Image
              src={aboutImg}
              alt="Team Member"
              width={150}
              height={150}
              className="mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">David Brown</h3>
            <p className="text-gray-500">Lead Designer</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-black text-white py-12 text-center border-b">
        <h2 className="text-3xl font-bold mb-4">Want to Work With Us?</h2>
        <p className="mb-6">
          Let’s build something amazing together. Get in touch today!
        </p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
