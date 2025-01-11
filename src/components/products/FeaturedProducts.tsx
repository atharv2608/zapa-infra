import { ChevronRight } from "lucide-react"

function FeaturedProducts() {
    const featuredProducts = [
        { name: "Ultra-Durable Cement", description: "Our most advanced cement formula for extreme conditions", image: "https://images.ctfassets.net/o0otttl8ele8/7IpGLGEwebWTKwB19JinPC/74d5a0b4a9a9731067e7fbc53d7465b1/JSW_Concreel_HD_cement__3_.jpg" },
        { name: "Nano-Tech Waterproofing", description: "Cutting-edge waterproofing technology for superior protection", image: "https://media.istockphoto.com/id/857627420/photo/bitumen-waterproofing-of-the-foundation.jpg?s=612x612&w=0&k=20&c=s2hiohdvHTKK5jHcc8ZogVVeaZmVc-Ob4uf1x5IiEDU=" },
      ]
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img src={product.image} alt={product.name} width={300} height={200} className="h-48 w-full object-cover md:w-48" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <a href="#" className="text-green-700 hover:text-green-900 font-medium flex items-center">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturedProducts