import FeaturedProjectCarousel from "./FeaturedProjectCarousel"

function FeaturedWorks() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Projects</h2>
      <FeaturedProjectCarousel />
    </div>
  </section>
  )
}

export default FeaturedWorks