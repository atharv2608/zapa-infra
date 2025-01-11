import CallToAction from "@/components/products/CallToAction"
import FeaturedProducts from "@/components/products/FeaturedProducts"
import Hero from "@/components/products/Hero"
import ProductsList from "@/components/products/ProductsList"

function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductsList />
      <FeaturedProducts />
      <CallToAction />
    </div>
  )
}

export default Products