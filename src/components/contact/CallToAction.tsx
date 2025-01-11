function CallToAction() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          We're Here to Assist You
        </h2>
        <p className="text-xl text-white mb-8">
          Have questions about our waterproofing materials or cements? Reach out
          to us!
        </p>
        <div className="space-x-4">
          <a
            href="tel:+15551234567"
            className="inline-block bg-white text-green-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Call Now
          </a>
          <a
            href="mailto:info@zapainfra.com"
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-green-700 transition duration-300"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
