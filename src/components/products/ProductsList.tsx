import admixCSeries from "../../assets/products/admix-c-series.webp"
import bioSan from "../../assets/products/bio-san.webp"
import concentrate from "../../assets/products/concentrate.webp"
import modifiedCoating from "../../assets/products/modified-coating.webp"
import patchNPlug from "../../assets/products/patch-n-plug.webp"
import megamixSeries from "../../assets/products/megamix-series.webp"
import fcm80 from "../../assets/products/fcm-80.webp"
import restoraTopSeries from "../../assets/products/restora-top-series.webp"
import gammaCure from "../../assets/products/gamma-cure.webp"
import xycrylicAdmix from "../../assets/products/xycrylic-admix.webp"
import quickset from "../../assets/products/quickset.webp"
import dryShake from "../../assets/products/dry-shake.webp"
function ProductsList() {
    const categories = [
        {
          name: "Admixtures / Additives",
          description: "",
          products: [
            { name: "Admix C-Series", description: "Added to the mix during batching to waterproof concrete from the inside", image: admixCSeries },
            { name: "Bio-San", description: "Antimicrobial admixture to prevent MIC in harsh sewage conditions", image: bioSan },
          ]
        },
        {
          name: "Surface Applied Coatings",
          description: "",
          products: [
            { name: "Concentrate", description: "Applied to concrete for sealing and repair of cracks, joints and honeycomb", image: concentrate },
            { name: "Modified Coating", description: "Reinforces Xypex Concentrate when used as a second coat, producing a harder finish", image: modifiedCoating },
          ]
        },
        {
          name: "Repair & Accessories ",
          description: "",
          products: [
            { name: "Patch’n Plug", description: "Fast-setting hydraulic cement compound for patching and repairs", image: patchNPlug },
            { name: "Megamix Series", description: "Thin coating for waterproofing and resurfacing of masonry and vertical surfaces", image: megamixSeries },
            { name: "FMC 80", description: "Repairs cracks and seals joints on surfaces subject to movement", image: fcm80 },
            { name: "Restora-Top Series", description: "Quick-curing compound for concrete floors, decks, and horizontal surfaces", image: restoraTopSeries },
            { name: "Gamma Cure", description: "Specially designed curing agent for Xypex crystalline waterproofing products", image: gammaCure },
            { name: "Xycrylic Admix", description: "Water-based polymer to add bonding strength to portland cement mixes", image: xycrylicAdmix },
            { name: "Quickset", description: "Hardens, dustproofs and seals fresh and newly cured concrete surfaces", image: quickset },
          ]
        },
        {
          name: "Dry-Shake Product ",
          description: "",
          products: [
            { name: "Dry-shake Series", description: "Applied to fresh concrete before finishing to seal and protect horizontal surfaces", image: dryShake },
          ]
        },
      ]
  return (
    <section className="py-16 px-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{category.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-contain"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default ProductsList