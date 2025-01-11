import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="bg-green-700 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Looking for the right materials?
        </h2>
        <p className="text-xl mb-8">
          Contact us for expert advice on selecting the perfect products for
          your project.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
        >
          Contact Us <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
