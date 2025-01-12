import { Card, CardContent } from "../ui/card"
import admixCSeries from "../../assets/products/admix-c-series.webp"
import concentrate from "../../assets/products/concentrate.webp"
import dryShake from "../../assets/products/dry-shake.webp"
import patchNPlug from "../../assets/products/patch-n-plug.webp"
function FeaturedProducts() {
  return (
    <section className="py-16 px-5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Admix C-Series",
                  description:
                    "Added to the mix during batching to waterproof concrete from the inside",
                    image: admixCSeries
                },
                {
                  name: "Dry-shake Series",
                  description:
                    "Applied to fresh concrete before finishing to seal and protect horizontal surfaces",
                    image: dryShake
                    
                },
                {
                  name: "Concentrate",
                  description:
                    "Applied to concrete for sealing and repair of cracks, joints and honeycomb",
                    image: concentrate
                },
                {
                  name: "Patch’n Plug",
                  description:
                    "Fast-setting hydraulic cement compound for patching and repairs",
                    image: patchNPlug
                },
              ].map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  {/* w-300 h-200 */}
                  <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full object-cover"
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