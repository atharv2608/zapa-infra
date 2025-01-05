import { Card, CardContent } from "../ui/card"

function FeaturedProducts() {
  return (
    <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Premium Cement",
                  description:
                    "High-strength cement for all your construction needs.",
                    image: "https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                  name: "Waterproof Sealant",
                  description:
                    "Advanced sealant for superior water resistance.",
                    image: "https://cdn.leonardo.ai/users/4b9d42c4-ed5f-4c00-bcd4-1b39c5b0364f/generations/57b7feee-331f-4c50-9d27-02412ae2a50f/Leonardo_Phoenix_10_A_detailed_closeup_photograph_of_a_waterpr_1.jpg"
                    
                },
                {
                  name: "Reinforced Steel",
                  description:
                    "Durable steel for enhanced structural integrity.",
                    image: "https://images.pexels.com/photos/46167/iron-rods-reinforcing-bars-rods-steel-bars-46167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                  name: "Eco-Friendly Insulation",
                  description:
                    "Energy-efficient insulation for sustainable building.",
                    image: "https://cdn.leonardo.ai/users/4b9d42c4-ed5f-4c00-bcd4-1b39c5b0364f/generations/964b18ea-8058-4cb2-bf83-6183a8b4e26e/Leonardo_Phoenix_10_A_modern_sleek_and_welllit_construction_si_0.jpg"
                },
              ].map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  {/* w-300 h-200 */}
                  <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  )
}

export default FeaturedProducts