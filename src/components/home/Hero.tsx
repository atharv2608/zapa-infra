import { BrickWall, DropletOff, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/projects/australian-marine-complex.webp"
function Hero() {
  const [_, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative  bg-gray-100 ">


    {/* Hero content */}
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline"> Waterproofing Tomorrow's </span>
                <span className="block text-green-700 xl:inline">Structures Today</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Your trusted partner in advanced waterproofing solutions for durable and resilient construction.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/products"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Products
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={heroImage}
          alt="Construction materials"
          width={1920}
          height={1080}
        />
      </div>
    </div>

    
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-700 tracking-wide uppercase">Our Products</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            The Xypex Crystalline Solution
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
          Xypex coatings and admixtures penetrate concrete pores, reacting with cement by-products to form a durable, non-soluble crystalline structure within the slab.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product 1 */}
            <div className="pt-6 shadow-2xl">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    <BrickWall
                        size={100}
                        color="white"
                        className="h-8 w-8"
                       />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">High-Performance Materials
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                  Engineered to shield your structures from water damage, ensuring long-lasting durability and peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="pt-6 shadow-2xl">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                      <DropletOff
                        size={100}
                        color="white"
                        className="h-8 w-8"
                       />
                
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Ultimate Waterproof Protection
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                  Engineered to shield your structures from water damage, ensuring long-lasting durability and peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="pt-6 shadow-2xl">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    <Leaf
                        size={100}
                        color="white"
                        className="h-8 w-8"
                       />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Versatile and Eco-Friendly</h3>
                  <p className="mt-5 text-base text-gray-500">
                  Designed for diverse applications, our waterproofing solutions are sustainable and perfect for modern construction challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Hero;
