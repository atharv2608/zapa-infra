import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Let's Build Something Great Together
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Explore our products or get in touch for your next project
        </p>
        <Link
          to="/contact"
          className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
