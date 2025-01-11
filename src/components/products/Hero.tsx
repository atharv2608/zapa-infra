import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-green-700 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Our Product Range
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl">
          Discover our commitment to quality materials for your construction
          needs
        </p>
        <a
          href="#products"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
        >
          Explore Products <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          
          alt="Construction background"
          className="opacity-20 object-cover w-full h-full absolute"
        />
      </div>
    </section>
  );
}

export default Hero;
