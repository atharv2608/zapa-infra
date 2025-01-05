
function CompanyOverview() {
  return (
    <section className="py-16 bg-gray-50 px-5">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-green-600">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2005, Zapa Infra has been at the forefront of the construction materials industry for over 15 years. We specialize in providing high-quality waterproofing materials and cements that meet the evolving needs of modern construction projects.
          </p>
          <p className="text-gray-700 mb-4">
            Our commitment to innovation, sustainability, and customer satisfaction has made us a trusted partner for contractors, architects, and builders across the country.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Zapa Infra facility"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>

  )
}

export default CompanyOverview