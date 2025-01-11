
function ProductsList() {
    const categories = [
        {
          name: "Cements",
          description: "High-quality cement for all your construction needs",
          products: [
            { name: "Premium Portland Cement", description: "Superior strength for structural applications", image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Quick-Set Cement", description: "Rapid hardening for time-sensitive projects", image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Masonry Cement", description: "Ideal for brickwork and stonework", image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          ]
        },
        {
          name: "Waterproofing Materials",
          description: "Effective solutions to keep water out",
          products: [
            { name: "Liquid Membrane", description: "Seamless waterproofing for roofs and basements", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVwBNkwiEfVBBtTFrjyDKB8STRVkTq_PPJw&s" },
            { name: "Crystalline Waterproofing", description: "Penetrates concrete for long-lasting protection", image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Waterproof Sealant", description: "Flexible sealant for joints and cracks", image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          ]
        },
        {
          name: "Adhesives",
          description: "Strong bonding solutions for various materials",
          products: [
            { name: "Tile Adhesive", description: "High-strength adhesive for ceramic and porcelain tiles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7wD4HWZYbBi6Yd9ohihPc7-lVP_2gEg3tA&s" },
            { name: "Construction Epoxy", description: "Heavy-duty epoxy for structural bonding", image: "https://media.istockphoto.com/id/1440985319/photo/closeup-shot-of-a-construction-worker-pouring-out-epoxy-resin-from-a-bucket-onto-a-floor.jpg?s=612x612&w=0&k=20&c=Su6JHaswnvweibe_RmZ48HuCHN7weeahiinlQzJd6uc=" },
            { name: "Multi-Purpose Adhesive", description: "Versatile adhesive for general construction use", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmIz1nxBA0_aKNY2faLTSxhau2g4uSk5O4g&s" },
          ]
        },
      ]
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{category.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                    <img src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
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